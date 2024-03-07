import { FC, SVGProps } from "react";

export const MinusIcon: FC<SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.2222 8.94106H1.77778C1.35259 8.94106 1 8.62106 1 8.23518C1 7.8493 1.35259 7.5293 1.77778 7.5293H14.2222C14.6474 7.5293 15 7.8493 15 8.23518C15 8.62106 14.6474 8.94106 14.2222 8.94106Z"
        fill="currentColor"
      />
    </svg>
  );
};
