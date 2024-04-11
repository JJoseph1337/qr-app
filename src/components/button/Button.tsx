import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../helpers/cn";
import styles from "./Button.module.css";
import { PlaceholderIcon } from "../../icons/PlaceholderIcon";

interface ButtonProps
  extends ButtonHTMLAttributes<ButtonHTMLAttributes> {
  style?: "secondary";
  size?: "large" | "small" | "medium";
  iconPosition:
    | "left"
    | "right"
    | "iconOnly"
    | "leftJustified"
    | "rightJustified";
}

export const Button: FC<ButtonProps> = ({
  style,
  size,
  iconPosition,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn([
        styles.button,
        {
          [styles["button--secondary"]]:
            style === "secondary",
          [styles["button--medium"]]: size === "medium",
          [styles["button--small"]]: size === "small",

          [styles["button--icon-right"]]:
            iconPosition === "right",
          [styles["button--iconOnly"]]:
            iconPosition === "iconOnly",
          [styles["button--leftJustified"]]:
            iconPosition === "leftJustified",
          [styles["button--rightJustified"]]:
            iconPosition === "rightJustified",
        },
      ])}
      disabled={false}
    >
      <PlaceholderIcon />
      {iconPosition === "iconOnly" ? "" : "Button"}
    </button>
  );
};
