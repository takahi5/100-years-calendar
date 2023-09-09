import Link from "next/link";

const years = Array(10)
  .fill(0)
  .map((_, i) => i + 1975);
export default function Home() {
  return (
    <div className="m-4">
      {years.map((year) => (
        <div className="m-2" key={year}>
          <Link
            href={`/calendars/${year}`}
            className="underline"
          >{`${year}年生まれの100年カレンダー`}</Link>
        </div>
      ))}
    </div>
  );
}
