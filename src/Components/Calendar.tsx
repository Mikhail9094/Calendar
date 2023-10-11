import { useState } from "react";
import styles from "./calendar.module.scss";
import Dates from "./Dates/Dates";
import { addMonths, addYears, format, subMonths, subYears } from "date-fns";
import { DateContext } from "./context";


function Calendar() {
  const [date, setDate] = useState(new Date());
  const [visibilityDates, setVisibilityDates] = useState(false);

  const onAddMonth = () => {
    setDate(addMonths(date, 1));
  };

  const onAddYear = () => {
    setDate(addYears(date, 1));
  };

  const onSubMonth = () => {
    setDate(subMonths(date, 1));
  };

  const onSubYear = () => {
    setDate(subYears(date, 1));
  };

  const onChangeDay = (item: Date) => {
    setDate(item);
    setVisibilityDates(!visibilityDates);
  };

  return (
    <DateContext.Provider
      value={{ date, onAddMonth, onAddYear, onSubMonth, onSubYear, onChangeDay }}
    >
      <div className={styles.main}>
        <fieldset>
          <legend>Дата</legend>
          <input
            type="text"
            value={format(date, "dd/MM/yyyy")}
            className={styles.input}
            onClick={() => setVisibilityDates(!visibilityDates)}
          ></input>
        </fieldset>

        {visibilityDates && <Dates />}
      </div>
    </DateContext.Provider>
  );
}

export default Calendar;
