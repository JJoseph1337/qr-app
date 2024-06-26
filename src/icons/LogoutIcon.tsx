import { FC, SVGProps } from "react";

export const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.1 7.55999C14.79 3.95999 12.94 2.48999 8.88998 2.48999H8.75998C4.28998 2.48999 2.49998 4.27999 2.49998 8.74999V15.27C2.49998 19.74 4.28998 21.53 8.75998 21.53H8.88998C12.91 21.53 14.76 20.08 15.09 16.54"
        stroke="#262626"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H20.38"
        stroke="#262626"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.15 8.6499L21.5 11.9999L18.15 15.3499"
        stroke="#262626"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
