import "dayjs/locale/ja";
import { YearCalendar } from "./YearCalendar";

type Props = {
  startYear: number;
};

export const HundredYearCalendar: React.FC<Props> = ({ startYear }) => {
  const renderPage = (from: number) => {
    return (
      <div
        style={{
          width: "210mm",
          height: "297mm",
          borderWidth: 1,
          borderColor: "#eee",
          margin: "2mm",
          paddingTop: "2mm",
          marginTop: "3mm",
          paddingBottom: "2mm",
          marginBottom: "3mm",
        }}
        className="flex flex-wrap flex-row justify-around"
      >
        <YearCalendar year={from} />
        <YearCalendar year={from + 1} />
        <YearCalendar year={from + 2} />
        <YearCalendar year={from + 3} />
      </div>
    );
  };

  return [...Array(25)].map((_, i) => <div key={i}>{renderPage(startYear + i * 4)}</div>);
};
