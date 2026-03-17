"use client";

type BokunButtonProps = {
  buttonId: string;
  dataSrc: string;
  label: string;
  className?: string;
};

export default function BokunButton({
  buttonId,
  dataSrc,
  label,
  className = "",
}: BokunButtonProps) {
  return (
    <button
      id={buttonId}
      className={`bokunButton font-sans ${className}`}
      data-src={dataSrc}
      data-testid="widget-book-button"
      type="button"
    >
      {label}
    </button>
  );
}