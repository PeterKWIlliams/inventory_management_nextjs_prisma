// import React, { useState } from "react";

// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-800 text-white transition-all duration-300 ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className="p-4">
//         <h1 className="text-2xl font-semibold">Inventory App</h1>
//         <button
//           className="mt-2 px-2 py-1 text-gray-500"
//           onClick={toggleSidebar}
//         >
//           {isOpen ? "Hide Sidebar" : "Show Sidebar"}
//         </button>
//       </div>
//       <nav className="p-4">
//         <ul>
//           <li className="mb-2">
//             <a
//               className="block rounded p-2 hover:bg-gray-700"
//               href="#dashboard"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li className="mb-2">
//             <a className="block rounded p-2 hover:bg-gray-700" href="#products">
//               Products
//             </a>
//           </li>
//           <li className="mb-2">
//             <a className="block rounded p-2 hover:bg-gray-700" href="#orders">
//               Orders
//             </a>
//           </li>
//           <li className="mb-2">
//             <a className="block rounded p-2 hover:bg-gray-700" href="#settings">
//               Settings
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen ? (
        <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 p-4 text-white">
          <h1 className="mb-4 text-2xl">Inventory Management</h1>
          <button
            className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
            onClick={toggleSidebar}
          >
            Hide Sidebar
          </button>
          <nav className="p-4">
            <ul>
              <li className="mb-2">
                <a
                  className="block rounded p-2 hover:bg-gray-700"
                  href="#dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block rounded p-2 hover:bg-gray-700"
                  href="#products"
                >
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block rounded p-2 hover:bg-gray-700"
                  href="#orders"
                >
                  Orders
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block rounded p-2 hover:bg-gray-700"
                  href="#settings"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <button
          className="fixed left-0 top-0 flex h-10 w-10 items-center justify-center rounded-r-full bg-blue-500 text-white"
          onClick={toggleSidebar}
        >
          &gt;
        </button>
      )}
    </>
  );
};

export default Sidebar;
