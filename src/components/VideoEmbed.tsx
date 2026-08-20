/** Extracts an 11-char YouTube video ID from any common URL shape
 *  (watch?v=, youtu.be/, embed/) so the frontmatter can store whatever
 *  URL YouTube Studio hands back without a manual reformat step. */
function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

interface VideoEmbedProps {
  youtubeUrl?: string;
  youtubeStatus?: string;
}

export function VideoEmbed({ youtubeUrl, youtubeStatus }: VideoEmbedProps) {
  if (youtubeStatus !== 'published' || !youtubeUrl) return null;
  const videoId = extractYouTubeId(youtubeUrl);
  if (!videoId) return null;

  return (
    <div className="mb-11 border border-rule bg-paper p-4">
      <div className="relative aspect-video w-full overflow-hidden">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="Video explainer"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block font-utility text-[12.5px] uppercase tracking-wider text-forest hover:underline"
      >
        Watch on YouTube ↗
      </a>
    </div>
  );
}
