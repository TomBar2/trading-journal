import { useState, useEffect } from "react";

import StatsCard from "./StatsCard/StatsCard.jsx";
import NetWorthChart from "@/components/Dashboard/NetWorthChart/NetWorthChart.jsx";

import { getAvgReturnById } from "@/api/statsApi.js";

export default function StatsGrid() {
  const [avgReturn, setAvgReturn] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = 1; // ToDo - change it later to be the logged-in user

  useEffect(() => {
    async function loadStats() {
      try {
        const value = await getAvgReturnById(userId);
        setAvgReturn(value);
      } catch (err) {
        console.error("Failed loading avg return", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, [userId]);

  return (
    <div className="grid grid-cols-4 grid-rows-16 gap-4">
      <div className="col-span-2 row-span-16">
        <NetWorthChart />
      </div>

      <div className="row-span-8">
        <StatsCard
          title="Avg Return"
          value={
            loading ? (
              "Loading..."
            ) : avgReturn >= 0 ? (
              <span className="text-green-600">+{avgReturn.toFixed(2)}%</span>
            ) : (
              <span className="text-red-600">{avgReturn.toFixed(2)}%</span>
            )
          }
        />
        />
      </div>

      <div className="row-span-16">
        <StatsCard title="Stop-Loss Usage" value="82%" />
      </div>

      <div className="row-span-8">
        <StatsCard title="New Trades This Week" value="12" />
      </div>
    </div>
  );
}
