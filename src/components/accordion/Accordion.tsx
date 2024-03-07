import { useState } from "react";
import { cn } from "../../helpers/cn";
import { AddIcon } from "../../icons/AddIcon";
import { MinusIcon } from "../../icons/MinusIcon";
import styles from "./Accordion.module.css";

interface AccordionProps {
  disabled?: boolean;
}

export const Accordion = ({ disabled }: AccordionProps) => {
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
        {isDescriptionOpen && (
          <p className={styles.description}>
            Here’s some example text that may answer an FAQ
            or give the user some helpful advice. A
            wonderful serenity has taken possession of my
            entire soul, like these sweet mornings of spring
            which I enjoy with my whole heart.
          </p>
        )}
      </div>
    </div>
  );
};
