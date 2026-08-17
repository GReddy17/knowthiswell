#!/usr/bin/env python3
"""
Renames every .tsx post file so its filename is a clean, URL-safe slug:
  - Strips the leading "NN-" ordering prefix (that's for author sorting
    in the file tree only, it should never leak into the public URL)
  - Removes characters that are invalid or risky in filenames/URLs:
    colons, apostrophes, smart quotes, em/en dashes -> hyphen
  - Collapses repeated hyphens, strips leading/trailing hyphens

Produces a rename map (old relative path -> new relative path) as JSON,
so a second pass can fix up internal seeAlso[] references and regenerate
the barrel file consistently.
"""
import os
import re
import json

POSTS_DIR = "src/content/posts"

def sanitize_filename(name: str) -> str:
    # name is WITHOUT the .tsx extension
    # Strip leading ordering prefix like "01-", "13-", "50-"
    name = re.sub(r'^\d+-', '', name)
    # Normalize smart quotes and dashes first
    name = name.replace('\u2019', '').replace("'", '')  # apostrophes removed
    name = name.replace('\u2014', '-').replace('\u2013', '-')  # em/en dash -> hyphen
    name = name.replace(':', '')  # colons removed entirely
    name = re.sub(r'[^a-zA-Z0-9-]+', '-', name)  # anything else unsafe -> hyphen
    name = re.sub(r'-{2,}', '-', name)  # collapse repeated hyphens
    name = name.strip('-').lower()
    return name

def sanitize_folder(name: str) -> str:
    # Folders keep their "NN-" prefix (used for author ordering in the
    # tree and matches taxonomy.json keys), just clean stray characters.
    name = name.replace('\u2019', '').replace("'", '')
    name = name.replace('\u2014', '-').replace('\u2013', '-')
    name = re.sub(r'[^a-zA-Z0-9-]+', '-', name)
    name = re.sub(r'-{2,}', '-', name)
    return name.strip('-')

rename_map = {}  # old_category/old_slug -> new_category/new_slug (no .tsx, no numeric prefix on slug)

for folder in sorted(os.listdir(POSTS_DIR)):
    folder_path = os.path.join(POSTS_DIR, folder)
    if not os.path.isdir(folder_path):
        continue

    new_folder = sanitize_folder(folder)
    new_folder_path = os.path.join(POSTS_DIR, new_folder)
    if new_folder != folder:
        os.rename(folder_path, new_folder_path)
        print(f"folder: {folder} -> {new_folder}")
    else:
        new_folder_path = folder_path

    # category id used in the registry/URL = folder name with numeric prefix stripped
    old_category_id = re.sub(r'^\d+-', '', folder)
    new_category_id = re.sub(r'^\d+-', '', new_folder)

    for filename in sorted(os.listdir(new_folder_path)):
        if not filename.endswith('.tsx'):
            continue
        old_slug_raw = filename[:-4]  # strip .tsx
        new_slug = sanitize_filename(old_slug_raw)

        old_path = os.path.join(new_folder_path, filename)
        new_path = os.path.join(new_folder_path, f"{new_slug}.tsx")

        old_key = f"{old_category_id}/{old_slug_raw}"
        new_key = f"{new_category_id}/{new_slug}"
        rename_map[old_key] = new_key

        if old_path != new_path:
            if os.path.exists(new_path) and old_path != new_path:
                print(f"  !! COLLISION: {new_path} already exists, skipping rename of {old_path}")
                continue
            os.rename(old_path, new_path)

with open('rename-map.json', 'w') as f:
    json.dump(rename_map, f, indent=2)

print(f"\nRenamed/mapped {len(rename_map)} post files. Map saved to rename-map.json")
