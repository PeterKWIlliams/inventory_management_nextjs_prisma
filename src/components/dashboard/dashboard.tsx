import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { RecentSales } from "./recent-sales";
import type { FC } from "react";
import DashboardCard from "./cards/dashboardCard";
import Overview from "./overview";

import type { RouterOutputs } from "~/utils/api";
import { transformDashboardData } from "~/utils/helpers/getDashboardStats";

export const metadata: Metadata = {
  title: "Inventory Manager",
  description: "Manage all your storage needs",
};
export type userData = RouterOutputs["user"]["getAllData"];

interface DashboardPageProps {
  data: userData;
}

const DashboardPage: FC<DashboardPageProps> = ({ data }) => {
  if (!data) return <div>no data</div>;

  const transformedData = transformDashboardData(data);

  return (
    <div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          {/* <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>change date</Button>
          </div> */}
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          {/* <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList> */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                cardTitle="Locations added past year"
                stat={transformedData.managedLocation.oneYear}
                extraInfo={`You have added ${transformedData.managedLocation.oneYear} storage locations in the last month `}
              />
              <DashboardCard
                cardTitle="Storages added past year"
                stat={transformedData.itemStorage.oneYear}
                extraInfo={`You have added ${transformedData.storedItem.oneDay} items today `}
              />

              <DashboardCard
                cardTitle="Items added past year"
                stat={transformedData.storedItem.oneYear}
                extraInfo={`You have added ${transformedData.storedItem.oneMonth} in the last month`}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 border border-black">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview data={transformedData.monthlyTotals} />
                </CardContent>
              </Card>
              <Card className="col-span-3 border border-black">
                <CardHeader>
                  <CardTitle>Recent Item Additions</CardTitle>
                  <CardDescription>
                    {`You have added ${transformedData.storedItem.oneDay} items today `}
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
  );
};

export default DashboardPage;
