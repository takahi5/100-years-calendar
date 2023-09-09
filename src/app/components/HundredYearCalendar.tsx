import "dayjs/locale/ja";
import { YearCalendar } from "./YearCalendar";

type Props = {
  startYear: number;
};

export const HundredYearCalendar: React.FC<Props> = ({ startYear }) => {
  const renderRow = (row: number) => {
    return [...Array(5)]
      .map((_, i) => i + startYear)
      .map((year, i) => (
        <td className="p-4" key={`${row}_${i}`}>
          <YearCalendar year={year + row * 5} />
        </td>
      ));
  };

  return (
    <div className="p-4">
      <div className="text-2xl font-bold text-left mb-1">{startYear}年生まれの100年カレンダー</div>
      <table className="table-fixed text-center text-xs">
        <tbody>
          <tr>{renderRow(0)}</tr>
          <tr>{renderRow(1)}</tr>
          <tr>{renderRow(2)}</tr>
          <tr>{renderRow(3)}</tr>
          <tr>{renderRow(4)}</tr>
          <tr>{renderRow(5)}</tr>
          <tr>{renderRow(6)}</tr>
          <tr>{renderRow(7)}</tr>
          <tr>{renderRow(8)}</tr>
          <tr>{renderRow(9)}</tr>
          <tr>{renderRow(10)}</tr>
          <tr>{renderRow(11)}</tr>
          <tr>{renderRow(12)}</tr>
          <tr>{renderRow(13)}</tr>
          <tr>{renderRow(14)}</tr>
          <tr>{renderRow(15)}</tr>
          <tr>{renderRow(16)}</tr>
          <tr>{renderRow(17)}</tr>
          <tr>{renderRow(18)}</tr>
          <tr>{renderRow(19)}</tr>
        </tbody>
      </table>
    </div>
  );
};
