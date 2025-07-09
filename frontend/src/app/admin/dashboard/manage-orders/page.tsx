'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Commission {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  portraitImage: string;
  numberOfPortraits: number;
  size: string;
  shippingDestination: string;
  deadline: string;
  additionalInfo?: string;
  createdAt: string;
}

const ManageOrders = () => {
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommissions = async () => {
      try {
        const response = await axios.get('/api/comissions');
        setCommissions(response.data);
      } catch (error) {
        console.error('Error fetching commissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommissions();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : commissions.length === 0 ? (
        <p>No commissions found.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Portraits</th>
                <th className="px-4 py-2">Shipping</th>
                <th className="px-4 py-2">Deadline</th>
                <th className="px-4 py-2">Image</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">
                    {order.firstName} {order.lastName}
                  </td>
                  <td className="px-4 py-2">{order.email}</td>
                  <td className="px-4 py-2">{order.size}</td>
                  <td className="px-4 py-2">{order.numberOfPortraits}</td>
                  <td className="px-4 py-2">{order.shippingDestination}</td>
                  <td className="px-4 py-2">
                    {new Date(order.deadline).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={order.portraitImage}
                      alt="Portrait"
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
