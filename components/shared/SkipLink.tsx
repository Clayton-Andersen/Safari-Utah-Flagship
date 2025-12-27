export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 
                 focus:z-50 focus:bg-bone focus:text-night focus:px-4 focus:py-2 
                 focus:rounded-full focus:text-sm focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
