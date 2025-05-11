import { Link } from "react-router-dom";

export function NavButton({
  link,
  text,
  bgColor,
  hoverColor,
}: {
  link: string;
  text: string;
  bgColor: string;
  hoverColor: string;
}) {
  return (
    <Link to={link}>
      <div
        className={`p-2 pl-4 pr-4 text-white transition-all ${bgColor} ${hoverColor} rounded-md`}
      >
        {text}
      </div>
    </Link>
  );
}
