import { FC } from "react";
import { cn } from "../../helpers/cn";
import styles from "./TheCalendar.module.css";

interface YearsCalendarProps {
  years: string[];
  onYearClick: (date: Date) => void;
  selectedDate: Date | null;
}

export const YearsCalendar: FC<YearsCalendarProps> = ({
  years,
  onYearClick,
  selectedDate,
}) => {
  return (
    <>
      {years.map((year) => (
        <div
          className={cn([
            styles.year,
            {
              [styles["date--selected"]]:
                year === selectedDate,
            },
          ])}
          key={year}
          onClick={() => onYearClick(year)}
        >
          {year}
        </div>
      ))}
    </>
  );
};
