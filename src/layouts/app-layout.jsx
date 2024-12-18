// import Header from "../components/Header";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="p-2">
//       <div className="grid-background">
//       </div>
//       <main className="min-h-screen container mx-auto px-0 ">
//         <Header />
//         <Outlet />
//       </main>

//       <div className="p-10 text-center bg-gray-800 mt-10">
//         Made with 💗 by Saransh
//       </div>
//     </div>
//   );
// };

// export default AppLayout; 

import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative p-2">
      {/* Background with lighter and less frequent dots */}
      <div className="absolute inset-0 z-[-1] bg-[#020818] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:32px_32px] bg-fixed opacity-20"></div>

      {/* Main content */}
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


