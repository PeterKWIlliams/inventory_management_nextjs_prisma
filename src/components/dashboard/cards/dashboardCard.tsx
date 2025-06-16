import { FC, ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";

interface dashboardCardProps {
  extraInfo: string;
  cardTitle: string;
  stat: number;
}

const DashboardCard: FC<dashboardCardProps> = ({
  extraInfo,
  cardTitle,
  stat,
}) => {
  return (
    <>
      <Card className="border border-black">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">{stat}</div>
          <p className="text-xs text-muted-foreground">{extraInfo}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardCard;
