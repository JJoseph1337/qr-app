import { FC } from "react";
import styles from "./TheCalendar.module.css";
import { cn } from "../../helpers/cn";

interface MonthsCalendarProps {
  months: string[];
  onMonthClick: (month: Date) => void;
  selectedDate: Date | null;
}

export const MonthsCalendar: FC<MonthsCalendarProps> = ({
  months,
  onMonthClick,

  selectedDate,
}) => {
  return (
    <>
      {months.map((month) => (
        <div
          className={cn([
            styles.dayOfTheMonth,
            {
              [styles["date--selected"]]:
                month === selectedDate,
            },
          ])}
          key={month}
          onClick={() => onMonthClick(month)}
        >
          {month}
        </div>
      ))}
    </>
  );
};
