import { useContext } from "react";
import styles from "./header.module.scss";
import { format } from "date-fns";
import { DateContext } from "../context";
import { todayMonth } from "../constants";

const Header = () => {
  const { date, onAddMonth, onAddYear, onSubMonth, onSubYear } = useContext(DateContext);
  return (
    <div className={styles.buttons}>
      <button type="button" className={styles.subYear} onClick={onSubYear}>
        {"<"}
      </button>
      <button type="button" className={styles.subMonth} onClick={onSubMonth}>
        {"<<"}
      </button>
      <span className={styles.monthAndYear}>{todayMonth(date)}</span>
      <span className={styles.monthAndYear}>{format(date, "yyyy")}</span>
      <button type="button" className={styles.addMonth} onClick={onAddMonth}>
        {">>"}
      </button>
      <button type="button" className={styles.addYear} onClick={onAddYear}>
        {">"}
      </button>
    </div>
  );
};

export default Header;
