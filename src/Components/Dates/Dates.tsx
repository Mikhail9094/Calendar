import styles from "./dates.module.scss";
import { daysInInterval } from "../constants";
import { getDate, getDay, isSameDay } from "date-fns";
import Header from "../Header/Header";
import { useContext } from "react";
import { DateContext } from "../context";

function Dates() {
  const { date, onChangeDay } = useContext(DateContext);

  const styleDivWithDate = (date: Date) =>
    isSameDay(date, new Date()) ? styles.today : styles.date;

  const weekend = (date: Date) => {
    return getDay(date) === 0 || getDay(date) === 6 ? styles.weekend : "";
  };

  return (
    <div className={styles.calendar}>
      <Header />
      <div className={styles.days}>
        {["Пн", "Вт", 'Ср', "Чт", "Пт", 'Сб', 'Вс'].map((weekDay, i, arr) => (
          <span className={styles.dayWeek + " " + (i >= arr.length - 2 ? styles.weekend : "")}>
            {weekDay}
          </span>
        ))}
        {daysInInterval(date).map((item, i) => (
          <div
            key={i}
            className={`${styleDivWithDate(item)} ${weekend(item)}`}
            onClick={() => onChangeDay(item)}
          >
            {getDate(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dates;
