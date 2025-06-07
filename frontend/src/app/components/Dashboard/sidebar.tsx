"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTachometerAlt } from "react-icons/fa"; 
import { FaImages, FaBox,  FaCog } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const AdminSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    router.push("/admin/adminLogin");
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      
      <div className="lg:hidden text-logoBlue fixed w-full top-0 left-0 z-10 flex items-center px-2 sm:px-8 py-4">
        <button onClick={toggleSidebar} className="text-3xl mr-4">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-logoBlue  z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6 text-left">
          <h2 className="text-2xl text-popBlue font-bold">Admin Dashboard</h2>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center py-2 px-4 hover:bg-popBlue"
              >
                <FaTachometerAlt className="mr-3 text-2xl" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/manage-artworks"
                className="flex items-center py-2 px-4 hover:bg-popBlue"
              >
                <FaImages className="mr-3 text-2xl" />
                <span>Manage Artworks</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/manage-orders"
                className="flex items-center py-2 px-4 hover:bg-popBlue"
              >
                <FaBox className="mr-3 text-2xl" />
                <span>Manage Orders</span>
              </Link>
            </li>
            <li>
              
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="flex items-center py-2 px-4 hover:bg-popBlue"
              >
                <FaCog className="mr-3 text-2xl" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center py-2 px-4 text-left hover:bg-popBlue"
              >
                <IoIosLogOut className="mr-3 text-2xl" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Content area to push to the right when sidebar is open */}
      <div className={`lg:ml-64 min-h-screen`}>
        {/* Your main content will go here */}
      </div>
    </>
  );
};

export default AdminSidebar;
