import SideBar from "../components/SideBar/SideBar.jsx";
import Map from "../components/Map/Map.jsx";

import styles from "./AppLayout.module.css";
import User from "../components/User/User.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
