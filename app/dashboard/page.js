import DashboardDirect from "@/components/dashboardDirect";
import React from "react";

const Dashboard = async () => {
  // In order to prevent any hydration failures due to Nextjs pre rendering every page, which would cause an issue here due to rendering being dependant on whether the user
  // is signed in or not, a useEffect hook is used to set a session variable
  return (
    <>
      <DashboardDirect />
    </>
  );
};

export default Dashboard;
