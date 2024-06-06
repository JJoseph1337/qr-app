import { useState, FC, PropsWithChildren } from "react";
import { cn } from "../../helpers/cn";
import { AddIcon } from "../../icons/AddIcon";
import { MinusIcon } from "../../icons/MinusIcon";
import styles from "./Accordion.module.css";

interface AccordionProps {
  disabled?: boolean;
}

export const Accordion: FC<
  PropsWithChildren<AccordionProps>
> = ({ disabled, children }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] =
    useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.header}
          onClick={() =>
            setIsDescriptionOpen(!isDescriptionOpen)
          }
        >
          <span
            className={cn([
              styles.title,
              {
                [styles["title--disabled"]]:
                  disabled === true,
              },
            ])}
          >
            Accordion title
          </span>
          <button
            disabled={disabled}
            className={styles.button}
            onClick={() =>
              setIsDescriptionOpen(!isDescriptionOpen)
            }
          >
            {isDescriptionOpen ? (
              <AddIcon />
            ) : (
              <MinusIcon />
            )}
          </button>
        </div>
        {isDescriptionOpen && children}
      </div>
    </div>
  );
};
