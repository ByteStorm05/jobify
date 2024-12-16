import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="p-2">
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto px-0">
        <Header />
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by Saransh
      </div>
    </div>
  );
};

export default AppLayout; 