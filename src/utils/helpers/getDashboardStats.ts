import { userData } from "@/components/dashboard/dashboard";

interface Stats {
  managedLocation: {
    oneDay: number;
    oneMonth: number;
    oneYear: number;
  };
  storedItem: {
    oneDay: number;
    oneMonth: number;
    oneYear: number;
  };
  itemStorage: {
    oneDay: number;
    oneMonth: number;
    oneYear: number;
  };
  monthlyTotals: Record<string, number>; // Add this property
}

export function transformDashboardData(data: userData): Stats {
  if (!data) return {} as typeof stats;
  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

  const stats: Stats = {
    managedLocation: {
      oneDay: 0,
      oneMonth: 0,
      oneYear: 0,
    },
    storedItem: {
      oneDay: 0,
      oneMonth: 0,
      oneYear: 0,
    },
    itemStorage: {
      oneDay: 0,
      oneMonth: 0,
      oneYear: 0,
    },
    monthlyTotals: {}, // Initialize the monthlyTotals property
  };

  data.forEach((managedLocation) => {
    const createdAt = new Date(managedLocation.createdAt);

    if (createdAt >= oneDayAgo) {
      stats.managedLocation.oneDay += 1;
    }

    if (createdAt >= oneMonthAgo) {
      stats.managedLocation.oneMonth += 1;
    }

    if (createdAt >= oneYearAgo) {
      stats.managedLocation.oneYear += 1;
    }

    managedLocation.itemStorage.forEach((itemStorage) => {
      const itemStorageCreatedAt = new Date(itemStorage.createdAt);

      if (itemStorageCreatedAt >= oneDayAgo) {
        stats.itemStorage.oneDay += 1;
      }

      if (itemStorageCreatedAt >= oneMonthAgo) {
        stats.itemStorage.oneMonth += 1;
      }

      if (itemStorageCreatedAt >= oneYearAgo) {
        stats.itemStorage.oneYear += 1;
      }

      itemStorage.storedItem.forEach((storedItem) => {
        const storedItemCreatedAt = new Date(storedItem.createdAt);

        if (storedItemCreatedAt >= oneDayAgo) {
          stats.storedItem.oneDay += 1;
        }

        if (storedItemCreatedAt >= oneMonthAgo) {
          stats.storedItem.oneMonth += 1;
        }

        if (storedItemCreatedAt >= oneYearAgo) {
          stats.storedItem.oneYear += 1;
        }

        // Calculate the month and year for the storedItem
        const monthYearKey =
          storedItemCreatedAt.toLocaleString("default", { month: "long" }) +
          " " +
          storedItemCreatedAt.getFullYear().toString(); // Convert the year to a string

        // Update the monthlyTotals property
        stats.monthlyTotals[monthYearKey] =
          (stats.monthlyTotals[monthYearKey] || 0) + 1;
      });
    });
  });

  return stats;
}
