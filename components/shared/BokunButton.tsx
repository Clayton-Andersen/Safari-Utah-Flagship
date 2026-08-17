"use client";

type BokunButtonProps = {
  buttonId: string;
  dataSrc: string;
  label: string;
  className?: string;
  directUrl?: string;
  fallbackLabel?: string;
};

export default function BokunButton({
  buttonId,
  dataSrc,
  label,
  className = "",
  directUrl,
  fallbackLabel = "open the full calendar",
}: BokunButtonProps) {
  return (
    <div className="space-y-2">
      <button
        id={buttonId}
        className={`bokunButton font-sans ${className}`}
        data-src={dataSrc}
        data-testid="widget-book-button"
        type="button"
      >
        {label}
      </button>

      {directUrl && (
        <p className="text-[11px] leading-5 text-sand/60">
          Trouble opening the calendar?{" "}
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-sand"
          >
            {fallbackLabel}
          </a>
          .
        </p>
      )}
    </div>
  );
}
