import "dayjs/locale/ja";
import { Calendar } from "./Calendar";

type Props = {
  year: number;
};

export const YearCalendar: React.FC<Props> = ({ year }) => {
  return (
    <div className="">
      <div className="text-xl font-bold text-left">{year}年</div>
      <table className="table-fixed text-center text-xs">
        <tbody>
          <tr>
            <td className="p-1">
              <Calendar year={year} month={1} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={2} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={3} />
            </td>
          </tr>
          <tr>
            <td className="p-1">
              <Calendar year={year} month={4} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={5} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={6} />
            </td>
          </tr>
          <tr>
            <td className="p-1">
              <Calendar year={year} month={7} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={8} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={9} />
            </td>
          </tr>
          <tr>
            <td className="p-1">
              <Calendar year={year} month={10} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={11} />
            </td>
            <td className="p-1">
              <Calendar year={year} month={12} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
