import { createContext } from "react";

export const DateContext = createContext({} as Props);
interface Props {
  date: Date;
  onAddMonth(): void;
  onAddYear(): void;
  onSubMonth(): void;
  onSubYear(): void;
  onChangeDay(item: Date): void;
}

