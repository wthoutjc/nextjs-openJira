import { formatDistanceToNow } from "date-fns";
// import { es } from "date-fns/locale"

const getFormatDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date); /** Español: (date, {locale: es}) */
  return fromNow;
};

export { getFormatDistanceToNow };
