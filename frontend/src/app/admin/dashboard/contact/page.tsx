"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../adminLayout";

interface ContactMessage {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const ManageContacts = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "https://artportfolio-backend.onrender.com/api/contact"
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching contact messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
   <AdminLayout>
     <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full text-sm bg-white">
            <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Received</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{msg.firstName} {msg.lastName}</td>
                  <td className="px-4 py-2">{msg.email}</td>
                  <td className="px-4 py-2">{msg.subject}</td>
                  <td className="px-4 py-2">{msg.message}</td>
                  <td className="px-4 py-2">
                    {new Date(msg.createdAt).toLocaleDateString()} <br />
                    {new Date(msg.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
   </AdminLayout>
  );
};

export default ManageContacts;
