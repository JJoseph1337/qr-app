import {
  useId,
  useState,
  FC,
  InputHTMLAttributes,
} from "react";
import { cn } from "../../helpers/cn";
import styles from "./DropdownInput.module.css";
import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowUp } from "../../icons/ArrowUp";

export interface DropdownInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  size?: "small" | "large";
  disabled?: boolean;
}

export const DropdownInput: FC<DropdownInputProps> = ({
  size = "small",
  disabled = false,
}: DropdownInputProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const id = useId();

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        <div className={styles.inputContainer}>
          <input
            className={cn([
              styles.input,
              {
                [styles["input--large"]]: size === "large",
                [styles["input--small"]]: size === "small",
              },
            ])}
            id={id}
            placeholder="Dropdown Label"
            disabled={disabled}
          />
          <button
            className={cn([
              styles.button,
              {
                [styles["button--large"]]: size === "large",
                [styles["button--small"]]: size === "small",
              },
            ])}
            onClick={() => handleButtonClick()}
            disabled={disabled}
          >
            {isMenuOpen ? <ArrowUp /> : <ArrowDown />}
          </button>
        </div>
      </label>
      {isMenuOpen && (
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <span>Testim</span>
            </li>
            <li className={styles.menu__item}>
              Testiryem 2
            </li>
            <li className={styles.menu__item}>
              Testiryem 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
