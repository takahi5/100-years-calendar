import { HundredYearCalendar } from "@/app/components/HundredYearCalendar";
import { Metadata } from "next";

type Props = { params: { year: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.year}年生まれの100年カレンダー`,
  };
}

export async function generateStaticParams() {
  // Generate two pages at build time and the rest on-demand
  return [
    { year: "1960" },
    { year: "1961" },
    { year: "1962" },
    { year: "1963" },
    { year: "1964" },
    { year: "1965" },
    { year: "1966" },
    { year: "1967" },
    { year: "1968" },
    { year: "1969" },
    { year: "1970" },
    { year: "1971" },
    { year: "1972" },
    { year: "1973" },
    { year: "1974" },
    { year: "1975" },
    { year: "1976" },
    { year: "1977" },
    { year: "1978" },
    { year: "1979" },
    { year: "1980" },
    { year: "1981" },
    { year: "1982" },
    { year: "1983" },
    { year: "1984" },
    { year: "1985" },
    { year: "1986" },
    { year: "1987" },
    { year: "1988" },
    { year: "1989" },
    { year: "1990" },
    { year: "1991" },
    { year: "1992" },
    { year: "1993" },
    { year: "1994" },
    { year: "1995" },
    { year: "1996" },
    { year: "1997" },
    { year: "1998" },
    { year: "1999" },
    { year: "2000" },
    { year: "2001" },
    { year: "2002" },
    { year: "2003" },
    { year: "2004" },
    { year: "2005" },
    { year: "2006" },
    { year: "2007" },
    { year: "2008" },
    { year: "2009" },
    { year: "2010" },
    { year: "2011" },
    { year: "2012" },
    { year: "2013" },
    { year: "2014" },
    { year: "2015" },
    { year: "2016" },
    { year: "2017" },
    { year: "2018" },
    { year: "2019" },
    { year: "2020" },
    { year: "2021" },
    { year: "2022" },
    { year: "2023" },
    { year: "2024" },
    { year: "2025" },
    { year: "2026" },
    { year: "2027" },
    { year: "2028" },
    { year: "2029" },
    { year: "2030" },
  ];
}

export default function Page({ params }: Props) {
  return <HundredYearCalendar startYear={parseInt(params.year)} />;
}
