import type { MouseEventHandler } from "react";

export function ActionButton({
  onClick,
  text,
  bgColor = "bg-green-400",
  hoverColor = "bg-green-500",
}: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  bgColor?: string;
  hoverColor?: string;
}) {
  return (
    <button
      className={`p-3 text-xs font-bold ${bgColor} text-white transtition-all rounded-md hover:${hoverColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
