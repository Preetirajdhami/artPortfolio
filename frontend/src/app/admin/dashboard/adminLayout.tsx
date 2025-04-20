
import AdminSidebar from '@/app/components/Dashboard/sidebar';
import React from 'react';


const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
