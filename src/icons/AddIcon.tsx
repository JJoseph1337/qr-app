import { FC, SVGProps } from "react";

export const AddIcon: FC<SVGProps<SVGSVGElement>> = (
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
        d="M22.6667 13H1.33333C0.604444 13 0 12.5467 0 12C0 11.4533 0.604444 11 1.33333 11H22.6667C23.3956 11 24 11.4533 24 12C24 12.5467 23.3956 13 22.6667 13Z"
        fill="currentColor"
      />
      <path
        d="M12 24C11.4533 24 11 23.3956 11 22.6667V1.33333C11 0.604444 11.4533 0 12 0C12.5467 0 13 0.604444 13 1.33333V22.6667C13 23.3956 12.5467 24 12 24Z"
        fill="currentColor"
      />
    </svg>
  );
};
