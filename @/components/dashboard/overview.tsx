import { FC } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis
            dataKey="name"
            domain={["January", "December"]}
            tick={{ dy: 20 }}
            label={{
              value: "Month",
              position: "insideBottom",
              dy: 20,
            }}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />
          <CartesianGrid strokeDasharray="3 3" />
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
