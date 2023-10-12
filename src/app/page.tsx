import Link from "next/link";

const years = Array(71)
  .fill(0)
  .map((_, i) => i + 1960);
export default function Home() {
  return (
    <div className="m-4">
      {years.map((year) => (
        <div className="my-3 mx-5" key={year}>
          <Link
            href={`/calendars/${year}`}
            className="underline"
          >{`📅 ${year}年生まれの100年カレンダー`}</Link>
        </div>
      ))}
    </div>
  );
}
