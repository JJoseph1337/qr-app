import { FC } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfToday,
  add,
  parse,
  endOfWeek,
  isSameMonth,
  isToday,
  startOfWeek,
  isSameDay,
} from "date-fns";
import styles from "./Calendar.module.css";
import { useState } from "react";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { ArrowRight } from "../../icons/ArrowRight";
import { cn } from "../../helpers/cn";

interface CalendarProps {
  state: "months" | "years" | "days";
  type?: "doubleType";
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
];
const YEARS = [
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
];
const colStartClasses = [
  "",
  "column-start-2",
  "column-start-3",
  "column-start-4",
  "column-start-5",
  "column-start-6",
];

export const Calendar: FC<CalendarProps> = ({
  state,
  type,
}: CalendarProps) => {
  const stateMap = {
    years: YEARS,
    months: MONTHS,
  };

  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState();
  const [currentMonth, setCurrentMonth] = useState(
    format(today, "MMMM yyyy")
  );
  const firstDayCurrentMonth = parse(
    currentMonth,
    "MMMM yyyy",
    new Date()
  );
  const firstDayNextMonth = add(firstDayCurrentMonth, {
    months: 1,
  });

  const firstDayMonthAfter = add(firstDayCurrentMonth, {
    months: 2,
  });

  const [nextMonth, setNextMonth] = useState(
    format(firstDayNextMonth, "MMMM yyyy")
  );

  const newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const newDaysNextMonth = eachDayOfInterval({
    start: startOfWeek(firstDayNextMonth),
    end: endOfWeek(endOfMonth(firstDayNextMonth)),
  });

  const handleClickNextMonth = () => () => {
    setCurrentMonth(format(firstDayNextMonth, "MMMM yyyy"));
    setNextMonth(format(firstDayMonthAfter, "MMMM yyyy"));
  };

  const handleClickPreviousMonth = () => () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, {
      months: -1,
    });
    const firstDayMonthAfter = add(nextMonth, {
      months: -1,
    });

    setCurrentMonth(format(firstDayNextMonth, "MMMM yyyy"));
    setNextMonth(format(firstDayMonthAfter, "MMMM yyyy"));
  };

  const [selectedDay, setSelectedDay] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [rangeStart, setRangeStart] = useState(null);

  const handleClickDay = (day) => {
    if (selectedDay === day) {
      // console.log("if1");

      setSelectedDay(null);
      setRangeEnd(null);
      setRangeStart(null);
      return;
    }

    if (selectedDay && selectedDay !== day) {
      // console.log("if2");

      setRangeEnd(day);
      setRangeStart(selectedDay);
      return;
    }

    setSelectedDay(day);
    // console.log("if3");
  };

  return (
    <div className={styles.doubleTypeCalendar}>
      <div
        className={cn([
          styles.calendar,
          {
            [styles["calendar--left"]]:
              type === "doubleType",
          },
        ])}
      >
        <div className={styles.calendar__header}>
          <ArrowLeft
            className={styles.arrowLeft}
            onClick={handleClickPreviousMonth()}
          />
          <h2>{currentMonth}</h2>
          {type !== "doubleType" && (
            <ArrowRight
              className={styles.arrowRight}
              onClick={handleClickNextMonth()}
            />
          )}
        </div>
        <div
          className={cn([
            styles.calendar__body,
            {
              [styles["calendar__body--months"]]:
                state === "years" || state === "months",
            },
          ])}
        >
          {state === "days" ? (
            <DaysType
              days={newDays}
              selectedDay={selectedDay}
              rangeEnd={rangeEnd}
              rangeStart={rangeStart}
              handleClickDay={handleClickDay}
            />
          ) : (
            stateMap[state].map((month, index) => {
              return (
                <div
                  className={cn([
                    styles.month,
                    {
                      [styles["date--selected"]]:
                        selectedDate === index,
                    },
                  ])}
                  key={month}
                  onClick={() => {
                    if (state === "years") {
                      setCurrentMonth(
                        `${format(today, "MMMM")} ${month}`
                      );
                    }

                    if (state === "months") {
                      setCurrentMonth(
                        `${month} ${today.getFullYear()}`
                      );
                    }

                    setSelectedDate(index);
                  }}
                >
                  {month}
                </div>
              );
            })
          )}
        </div>
      </div>
      {type === "doubleType" && (
        <div
          className={cn([
            styles.calendar,
            {
              [styles["calendar--right"]]:
                type === "doubleType",
            },
          ])}
        >
          <div className={styles.calendar__header}>
            {type !== "doubleType" && (
              <ArrowLeft
                className={styles.arrowLeft}
                onClick={handleClickPreviousMonth()}
              />
            )}
            <h2>{nextMonth}</h2>
            <ArrowRight
              className={styles.arrowRight}
              onClick={handleClickNextMonth()}
            />
          </div>
          <div
            className={cn([
              styles.calendar__body,
              {
                [styles["calendar__body--months"]]:
                  state === "years" || state === "months",
              },
            ])}
          >
            {state === "days" ? (
              <DaysType
                days={newDaysNextMonth}
                selectedDay={selectedDay}
                rangeEnd={rangeEnd}
                rangeStart={rangeStart}
                handleClickDay={handleClickDay}
              />
            ) : (
              stateMap[state].map((month, index) => {
                return (
                  <div
                    className={cn([
                      styles.month,
                      {
                        [styles["date--selected"]]:
                          selectedDate === index,
                      },
                    ])}
                    key={month}
                    onClick={() => {
                      if (state === "years") {
                        setCurrentMonth(
                          `${format(
                            today,
                            "MMMM"
                          )} ${month}`
                        );
                      }

                      if (state === "months") {
                        setCurrentMonth(
                          `${month} ${today.getFullYear()}`
                        );
                      }

                      setSelectedDate(index);
                    }}
                  >
                    {month}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const DaysType = ({
  days,
  selectedDay,
  rangeEnd,
  rangeStart,
  handleClickDay,
}) => {
  const today = startOfToday();
  // const [selectedDay, setSelectedDay] = useState(null);
  // const [rangeEnd, setRangeEnd] = useState(null);
  // const [rangeStart, setRangeStart] = useState(null);

  const selectedDaysInterval = eachDayOfInterval({
    start: selectedDay,
    end: rangeEnd,
  });

  const daysBetween = selectedDaysInterval
    .slice(1, -1)
    .map((day) => format(day, "MMM d"));

  // const handleClickDay = (day) => {
  //   if (selectedDay === day) {
  //     setSelectedDay(null);
  //     setRangeEnd(null);
  //     setRangeStart(null);
  //     return;
  //   }

  //   if (selectedDay && selectedDay !== day) {
  //     setRangeEnd(day);
  //     setRangeStart(selectedDay);
  //     return;
  //   }
  //   setSelectedDay(day);
  // };

  return (
    <>
      {WEEKDAYS.map((day) => {
        return (
          <div
            className={styles.day}
            key={day}
          >
            {day}
          </div>
        );
      })}

      {days.map((day, dayIndex) => (
        <div
          className={cn([
            styles.date,
            {
              [styles["date--grey"]]: !isSameMonth(
                day,
                today
              ),
              [styles["date--current"]]: isToday(day),
              [styles["date--selected"]]: isSameDay(
                day,
                selectedDay
              ),
              [styles["date--rangeStart"]]:
                // day === rangeStart,
                isSameDay(day, rangeStart),

              [styles["date--rangeEnd"]]: isSameDay(
                day,
                rangeEnd
              ),

              [styles["date--rangeBetween"]]:
                daysBetween.includes(format(day, "MMM d")),
              [styles[colStartClasses[getDay(day)]]]:
                dayIndex === 0,
            },
          ])}
          key={dayIndex}
          onClick={() => {
            console.log();

            handleClickDay(day);
          }}
        >
          {format(day, "d")}
        </div>
      ))}
    </>
  );
};
