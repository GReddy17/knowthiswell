#!/usr/bin/env python3
"""
Rewrites every "old-category/old-slug" string inside seeAlso[] arrays
(and anywhere else the same string pattern appears) to the new sanitized
"category/slug" form, using rename-map.json produced by
sanitize-filenames.py. Also fixes each file's own `category` and
`subtopic` frontmatter fields to the sanitized category id.
"""
import os
import re
import json

with open('rename-map.json') as f:
    rename_map = json.load(f)

POSTS_DIR = "src/content/posts"

new_category_by_old_folder = {}
for old_key, new_key in rename_map.items():
    old_cat = old_key.split('/')[0]
    new_cat = new_key.split('/')[0]
    new_category_by_old_folder[old_cat] = new_cat

files_changed = 0
refs_fixed = 0

for root, dirs, files in os.walk(POSTS_DIR):
    for filename in files:
        if not filename.endswith('.tsx') or filename == 'index.ts':
            continue
        path = os.path.join(root, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Replace every known old "category/slug" reference with the new one.
        # Sort by length descending so longer/more-specific keys match first.
        for old_key in sorted(rename_map.keys(), key=len, reverse=True):
            if old_key in content:
                new_key = rename_map[old_key]
                count = content.count(f'"{old_key}"')
                if count:
                    content = content.replace(f'"{old_key}"', f'"{new_key}"')
                    refs_fixed += count

        # Fix this file's own `category:` field if it still has a numeric prefix
        for old_cat, new_cat in new_category_by_old_folder.items():
            content = re.sub(
                rf'category: "{re.escape(old_cat)}"',
                f'category: "{new_cat}"',
                content
            )

        if content != original:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            files_changed += 1

print(f"Updated {files_changed} files, fixed {refs_fixed} cross-references.")
