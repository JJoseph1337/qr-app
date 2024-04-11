import { FC, SVGProps } from "react";

export const PlaceholderIcon: FC<
  SVGProps<SVGSVGElement>
> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.1667 10C19.1667 15.0626 15.0626 19.1667 10 19.1667C4.93743 19.1667 0.833374 15.0626 0.833374 10C0.833374 4.93743 4.93743 0.833374 10 0.833374C15.0626 0.833374 19.1667 4.93743 19.1667 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
