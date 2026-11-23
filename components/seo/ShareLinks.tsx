// Plain share links (Prompt 18): no scripts, SDKs or cookies, just each network's own share URL.
type Props = {
  /** Canonical URL of the page being shared. */
  url: string;
  title: string;
  label: string;
};

export function shareTargets(url: string, title: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  return [
    { name: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { name: "X", href: `https://x.com/intent/post?text=${t}&url=${u}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: "Email", href: `mailto:?subject=${t}&body=${u}` }
  ];
}

export function ShareLinks({ url, title, label }: Props) {
  return (
    <nav className="seo-internal-links share-links" aria-label={label}>
      <span className="share-links-label">{`${label}:`}</span>
      {shareTargets(url, title).map((target) => (
        <a key={target.name} href={target.href} target="_blank" rel="noopener noreferrer">
          {`Share on ${target.name}`}
        </a>
      ))}
    </nav>
  );
}
