import {
  eachDayOfInterval,
  endOfMonth,
  eachMonthOfInterval,
  format,
  startOfToday,
  add,
  parse,
  endOfWeek,
  startOfWeek,
  sub,
  startOfYear,
  endOfYear,
  getYear,
  eachYearOfInterval,
} from "date-fns";
import { Locale } from "date-fns/locale";
import { useCallback, useState } from "react";

interface GetMonthParams {
  locale: Locale;
  monthFormat: "MMMM" | "MMM";
}

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(
    format(startOfToday(), "MMMM yyyy")
  );

  const firstDayCurrentMonth = parse(
    currentDate,
    "MMMM yyyy",
    new Date()
  );
  const firstDayNextMonth = add(firstDayCurrentMonth, {
    months: 1,
  });

  const allDaysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const allDaysInNextMonth = eachDayOfInterval({
    start: startOfWeek(firstDayNextMonth),
    end: endOfWeek(endOfMonth(firstDayNextMonth)),
  });

  const nextMonth = format(firstDayNextMonth, "MMMM yyyy");

  const getWeekDays = ({
    locale,
  }: {
    locale: Locale;
  }): string[] => {
    const now = new Date();
    const weekDays: string[] = [];
    const start = startOfWeek(now, { locale });
    const end = endOfWeek(now, { locale });
    eachDayOfInterval({ start, end }).forEach((day) => {
      weekDays.push(format(day, "EEEEEE", { locale }));
    });
    return weekDays;
  };

  const getMonths = ({
    locale,
    monthFormat,
  }: GetMonthParams): string[] => {
    const now = new Date();
    const months: string[] = [];

    const start = startOfYear(now);
    const end = endOfYear(now);

    eachMonthOfInterval({ start, end }).forEach((month) => {
      months.push(format(month, monthFormat, { locale }));
    });

    return months;
  };

  const getYears = useCallback((range: number) => {
    const now = new Date();
    const years: string[] = [];

    const start = sub(now, { years: range });
    const end = add(now, { years: range });

    eachYearOfInterval({ start, end }).forEach((year) => {
      years.push(getYear(year).toString());
    });

    return years;
  }, []);

  const onNextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, {
      months: 1,
    });
    setCurrentDate(format(firstDayNextMonth, "MMMM yyyy"));
  };

  const onPreviousMonth = () => {
    const firstDayPreviousMonth = sub(
      firstDayCurrentMonth,
      {
        months: 1,
      }
    );
    setCurrentDate(
      format(firstDayPreviousMonth, "MMMM yyyy")
    );
  };

  return {
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
  };
};
