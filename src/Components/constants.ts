import { addDays, eachDayOfInterval, setDay, startOfMonth, format } from "date-fns";
import { ru } from "date-fns/locale";

// первый день первой недели месяца
const firstDayFirstWeekOfMonth = (date: Date) =>
  setDay(startOfMonth(date), 1, {
    weekStartsOn: 1,
  });
const stepDays = (date: Date) => addDays(firstDayFirstWeekOfMonth(date), 41);
export const daysInInterval = (date: Date) =>
  eachDayOfInterval({
    start: firstDayFirstWeekOfMonth(date),
    end: stepDays(date),
  });

export const todayMonth = (date: Date) =>
  format(date, "LLLL", { locale: ru }).charAt(0).toUpperCase() +
  format(date, "LLLL", { locale: ru }).slice(1);

  