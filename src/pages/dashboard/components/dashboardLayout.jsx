import { Outlet } from "react-router-dom";
import Sidebar from "../../../uiComponents/sidebar";
import styles from "./dashboardLayout.module.css"

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
