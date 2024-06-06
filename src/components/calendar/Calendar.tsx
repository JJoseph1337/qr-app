import { FC, useMemo, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import styles from "./TheCalendar.module.css";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { ArrowRight } from "../../icons/ArrowRight";
import { enUS, Locale } from "date-fns/locale";
import { cn } from "../../helpers/cn";
import { DaysCalendar } from "./DaysCalendar";
import { MonthsCalendar } from "./MonthsCalendar";
import { YearsCalendar } from "./YearsCalendar";
import { isSameDay, startOfToday, format } from "date-fns";

interface CalendarChangeParams {
  startDate: string;
  endDate: string;
}

interface TheCalendarProps {
  value?: string;
  defaultValue?: string;
  onChange?: ({
    startDate,
    endDate,
  }: CalendarChangeParams) => void;
  calendars?: 1 | 2;
  calendarType?:
    | "days"
    | "years"
    | "months"
    | "dualCalendar";
  monthFormat?: "MMM" | "MMMM";
  locale?: Locale;
  yearsRange?: number;
}

export const TheCalendar: FC<TheCalendarProps> = ({
  calendarType = "days",
  monthFormat = "MMM",
  yearsRange = 5,
  locale = enUS,
}) => {
  const {
    currentDate,
    nextMonth,
    setCurrentDate,
    allDaysInMonth,
    allDaysInNextMonth,
    onNextMonth,
    onPreviousMonth,
    getWeekDays,
    getMonths,
    getYears,
  } = useCalendar();

  const [selectedDate, setSelectedDate] = useState(null);
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);

  const allDaysInWeek = getWeekDays({ locale });
  const months = getMonths({
    locale,
    monthFormat,
  });
  const years = getYears(yearsRange);
  const props = {
    weekdays: allDaysInWeek,
    allDaysInMonth,
  };
  console.log(nextMonth);

  const handleDayClick = (day: Date) => {
    const resetDays = () => {
      setSelectedDate(null);
      setRangeEnd(null);
      setRangeStart(null);
    };

    if (isSameDay(day, selectedDate)) {
      resetDays();
      return;
    }

    if (selectedDate && selectedDate !== day) {
      setRangeEnd(day);
      setRangeStart(selectedDate);
      return;
    }

    setSelectedDate(day);
  };

  const handleMonthClick = (month: Date) => {
    setCurrentDate(
      `${month} ${startOfToday().getFullYear()}`
    );
    setSelectedDate(month);
  };

  const handleYearClick = (year: Date) => {
    setCurrentDate(
      `${format(startOfToday(), "MMMM")} ${year}`
    );
    setSelectedDate(year);
  };

  const calendarTypeMap = useMemo(
    () => ({
      days: (
        <DaysCalendar
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          {...props}
        />
      ),
      dualCalendar: (
        <DaysCalendar
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          {...props}
        />
      ),
      months: (
        <MonthsCalendar
          months={months}
          onMonthClick={handleMonthClick}
          selectedDate={selectedDate}
        />
      ),
      years: (
        <YearsCalendar
          years={years}
          selectedDate={selectedDate}
          onYearClick={handleYearClick}
        />
      ),
    }),

    [months, years, props]
  );

  return (
    <div className={styles.calendarContainer}>
      <div
        className={cn([
          styles.calendar,
          {
            [styles["calendar--left"]]:
              calendarType === "dualCalendar",
          },
        ])}
      >
        <div className={styles.calendar__header}>
          <ArrowLeft
            onClick={onPreviousMonth}
            aria-label="Previous month button"
            role="button"
          />
          <h2>{currentDate}</h2>
          {calendarType !== "dualCalendar" && (
            <ArrowRight
              onClick={onNextMonth}
              aria-label="Next month button"
              role="button"
            />
          )}
        </div>
        <div
          className={cn([
            styles.calendar__body,
            {
              [styles["calendar__body--4-grid-columns"]]:
                calendarType === "months" ||
                calendarType === "years",
            },
          ])}
        >
          {calendarTypeMap[calendarType]}
        </div>
      </div>
      {calendarType === "dualCalendar" && (
        <div
          className={cn([
            styles.calendar,
            {
              [styles["calendar--right"]]:
                calendarType === "dualCalendar",
            },
          ])}
        >
          <div className={styles.calendar__header}>
            <h2>{nextMonth}</h2>
            <ArrowRight
              onClick={onNextMonth}
              aria-label="Next month button"
              role="button"
            />
          </div>
          <div
            className={cn([
              styles.calendar__body,
              {
                [styles["calendar__body--4-grid-columns"]]:
                  calendarType === "months" ||
                  calendarType === "years",
              },
            ])}
          >
            <DaysCalendar
              selectedDate={selectedDate}
              onDayClick={handleDayClick}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              allDaysInMonth={allDaysInNextMonth}
              weekdays={allDaysInWeek}
            />
          </div>
        </div>
      )}
    </div>
  );
};
