import { Metadata } from "next";
import { Button } from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecentSales } from "./recent-sales";
import { CalendarDateRangePicker } from "./date-range-picker";
import { FC } from "react";
import DashboardCard from "./cards/dashboardCard";
import Overview from "./overview";

import { RouterOutputs } from "~/utils/api";
import { transformDashboardData } from "~/utils/helpers/getDashboardStats";

export const metadata: Metadata = {
  title: "Inventory Management",
  description: "Manage all your storage needs",
};
export type userData = RouterOutputs["user"]["getAllData"];

interface DashboardPageProps {
  data: userData;
}

const DashboardPage: FC<DashboardPageProps> = ({ data }) => {
  if (!data) return <div>no data</div>;

  const transformedData = transformDashboardData(data);
  console.log("this is what im looking for", transformedData);

  return (
    <>
      <div className="hidden flex-col bg-secondary md:flex">
        <div className="border-b"></div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <DashboardCard
                  cardTitle="Total locations"
                  stat={5}
                  extraInfo="You added 10 locations so far"
                />
                <DashboardCard
                  cardTitle="Total storages"
                  stat={10}
                  extraInfo="You made 265 sales this month"
                />

                <DashboardCard
                  cardTitle="Total Items"
                  stat={10}
                  extraInfo="amoount of items added last month"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview data={[{ name: "feb", total: 5 }]} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Additions</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
