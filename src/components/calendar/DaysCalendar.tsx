import { FC } from "react";
import { cn } from "../../helpers/cn";
import {
  getDay,
  isToday,
  isSameDay,
  isSameMonth,
  startOfToday,
  eachDayOfInterval,
  format,
} from "date-fns";
import styles from "./TheCalendar.module.css";

interface DaysCalendarProps {
  weekdays: string[];
  allDaysInMonth: Date[];
  selectedDate: Date | null;
  onDayClick: (day: Date) => void;
  rangeStart: Date | null;
  rangeEnd: Date | null;
}

export const DaysCalendar: FC<DaysCalendarProps> = ({
  weekdays,
  allDaysInMonth,
  selectedDate,
  onDayClick,
  rangeStart,
  rangeEnd,
}) => {
  const selectedDaysInterval = eachDayOfInterval({
    start: selectedDate,
    end: rangeEnd,
  });

  const daysBetween = selectedDaysInterval
    .slice(1, -1)
    .map((day) => format(day, "MMM d"));

  return (
    <>
      {weekdays.map((dayOfTheWeek) => (
        <div
          className={styles.dayOfTheWeek}
          key={dayOfTheWeek}
        >
          {dayOfTheWeek}
        </div>
      ))}
      {allDaysInMonth.map((dayOfTheMonth, index) => (
        <div
          className={cn([
            styles.dayOfTheMonth,
            {
              [styles[
                `column-start-${getDay(dayOfTheMonth)}`
              ]]: index === 0,
              [styles["date--grey"]]: !isSameMonth(
                dayOfTheMonth,
                startOfToday()
              ),
              [styles["date--current"]]:
                isToday(dayOfTheMonth),
              [styles["date--selected"]]: isSameDay(
                dayOfTheMonth,
                selectedDate
              ),
              [styles["date--rangeStart"]]:
                // day === rangeStart,
                isSameDay(dayOfTheMonth, rangeStart),

              [styles["date--rangeEnd"]]: isSameDay(
                dayOfTheMonth,
                rangeEnd
              ),

              [styles["date--rangeBetween"]]:
                daysBetween.includes(
                  format(dayOfTheMonth, "MMM d")
                ),
            },
          ])}
          key={index}
          onClick={() => onDayClick(dayOfTheMonth)}
        >
          {dayOfTheMonth.getDate()}
        </div>
      ))}
    </>
  );
};
