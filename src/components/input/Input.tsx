import { FC, InputHTMLAttributes, useId } from "react";
import styles from "./Input.module.css";
import { cn } from "../../helpers/cn";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  caption?: string;
  state?: "error";
}

export const Input: FC<InputProps> = ({
  title,
  caption,
  state,
  ...props
}: InputProps) => {
  const id = useId();

  return (
    <label
      className={styles.label}
      htmlFor={id}
    >
      {title && <p className={styles.title}>{title}</p>}
      <input
        className={cn([
          styles.input,
          {
            [styles["input--error"]]: state === "error",
          },
        ])}
        id={id}
        {...props}
        placeholder="Empty"
      />
      {caption && (
        <p
          className={cn([
            styles.caption,
            {
              [styles["caption--error"]]: state === "error",
            },
          ])}
        >
          {caption}
        </p>
      )}
    </label>
  );
};
