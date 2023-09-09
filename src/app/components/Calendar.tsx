import "dayjs/locale/ja";
import dayjs from "dayjs";

const days = [...Array(31)].map((_, i) => i + 1);
const boxes = [...Array(49)].map((_, i) => i);

type Props = {
  year: number;
  month: number;
};

const displayDay = (index: number, offset: number, lastDate: number) => {
  const date = index - offset;
  if (date <= 0) {
    return "";
  }
  if (date > lastDate) {
    return "";
  }
  return date > 0 ? date.toString() : "";
};

type DateProps = {
  index: number;
  firstDay: number;
  lastDate: number;
};
export const Date: React.FC<DateProps> = ({ index, firstDay, lastDate }) => {
  let className = "text-center";
  if (index % 7 === 1) {
    className += " text-red-500";
  } else if (index % 7 === 0) {
    className = " text-blue-500";
  }

  return <td className={className}>{displayDay(index, firstDay, lastDate)}</td>;
};

export const Calendar: React.FC<Props> = ({ year, month }) => {
  const firstDay = dayjs(`${year}-${month}-01`).day();
  const lastDate = dayjs(`${year}-${month}-01`).endOf("month").date();
  return (
    <div className="">
      <div className="text-l font-bold text-left mb-1">{month}月</div>
      <table className="table-fixed text-center text-xs">
        <tbody>
          <tr>
            <th className="w-1/7 text-rose-500">日</th>
            <th className="w-1/7">月</th>
            <th className="w-1/7">火</th>
            <th className="w-1/7">水</th>
            <th className="w-1/7">木</th>
            <th className="w-1/7">金</th>
            <th className="w-1/7 text-blue-500">土</th>
          </tr>
          <tr>
            {[...Array(7)].map((_, i) => (
              <Date index={i + 1} firstDay={firstDay} lastDate={lastDate} key={`1_${i}`} />
            ))}
          </tr>
          <tr>
            {[...Array(7)].map((_, i) => (
              <Date index={i + 8} firstDay={firstDay} lastDate={lastDate} key={`2_${i}`} />
            ))}
          </tr>
          <tr>
            {[...Array(7)].map((_, i) => (
              <Date index={i + 15} firstDay={firstDay} lastDate={lastDate} key={`3_${i}`} />
            ))}
          </tr>
          <tr>
            {[...Array(7)].map((_, i) => (
              <Date index={i + 22} firstDay={firstDay} lastDate={lastDate} key={`4_${i}`} />
            ))}
          </tr>
          <tr>
            {[...Array(7)].map((_, i) => (
              <Date index={i + 29} firstDay={firstDay} lastDate={lastDate} key={`5_${i}`} />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
