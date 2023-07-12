import type { Component } from "solid-js";

import "./dashboard.scss";
import Header from "../header/header";
import DashboardBody from "../dashboardBody/dashboardBody";

const Dashboard: Component = () => {
  return (
    <div class="dashboard">
      <Header />
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
