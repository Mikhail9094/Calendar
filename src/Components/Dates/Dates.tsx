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
        <span className={styles.dayWeek}>Пн</span>
        <span className={styles.dayWeek}>Вт</span>
        <span className={styles.dayWeek}>Ср</span>
        <span className={styles.dayWeek}>Чт</span>
        <span className={styles.dayWeek}>Пт</span>
        <span className={`${styles.dayWeek} ${styles.weekend}`}>Сб</span>
        <span className={`${styles.dayWeek} ${styles.weekend}`}>Вс</span>
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
