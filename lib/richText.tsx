const RICH_TEXT_TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function renderRichText(text: string) {
  return text.split(RICH_TEXT_TOKEN).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="font-semibold text-gray-800">
          {part.slice(2, -2)}
        </span>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a
          key={index}
          href={href}
          className="font-semibold text-gray-900 underline underline-offset-4"
        >
          {label}
        </a>
      );
    }

    return part;
  });
}
