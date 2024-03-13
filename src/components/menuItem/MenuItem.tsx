import { ReactNode, FC } from "react";
import { cn } from "../../helpers/cn";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  text?: string;
  style?: "secondary";
  icon?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({
  text = "Menu-item",
  style,
  icon,
}: MenuItemProps) => {
  return (
    <div
      className={cn([
        styles.container,
        {
          [styles["container--secondary"]]:
            style === "secondary",
        },
      ])}
    >
      {icon}
      <span
        className={cn([
          styles.text,
          {
            [styles["text--secondary"]]:
              style === "secondary",
          },
        ])}
      >
        {text}
      </span>
    </div>
  );
};

export default MenuItem;
