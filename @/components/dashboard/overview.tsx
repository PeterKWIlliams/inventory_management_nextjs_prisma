import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data: Record<string, number>;
}

const Overview: FC<OverviewProps> = ({ data }) => {
  function transformData(
    data: Record<string, number>
  ): { name: string; total: number }[] {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const transformedData: { name: string; total: number }[] = [];

    for (let i = 0; i < 12; i++) {
      const targetDate = new Date(currentYear, currentMonth - i, 1);
      const monthName = targetDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

      const longMonthName = targetDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      const total = data[longMonthName] || 0;

      transformedData.push({
        name: monthName,
        total: total,
      });
    }

    return transformedData.reverse();
  }

  const chartData = transformData(data);

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <XAxis
            dataKey="name"
            label={{ value: "Month", position: "insideBottom", dy: 10 }}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />
          <YAxis
            stroke="#888888"
            label={{
              value: "Items Stored",
              angle: -90,
              position: "insideLeft",
              dx: -5,
            }}
            allowDecimals={false}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default Overview;

[
  {
    name: "Nov 2022",
    total: 1,
  },
  {
    name: "Dec 2022",
    total: 0,
  },
  {
    name: "Jan 2023",
    total: 0,
  },
  {
    name: "Feb 2023",
    total: 0,
  },
  {
    name: "Mar 2023",
    total: 0,
  },
  {
    name: "Apr 2023",
    total: 0,
  },
  {
    name: "May 2023",
    total: 0,
  },
  {
    name: "Jun 2023",
    total: 0,
  },
  {
    name: "Jul 2023",
    total: 0,
  },
  {
    name: "Aug 2023",
    total: 0,
  },
  {
    name: "Sep 2023",
    total: 0,
  },
  {
    name: "Oct 2023",
    total: 1,
  },
];
