import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      Header
      <Outlet/>
      Footer
    </div>
  );
};

export default AppLayout;