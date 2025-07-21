"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminSidebar from "../../components/Dashboard/sidebar";
import {
  BarChart3,
  Package,
  MessageSquare,
  TrendingUp,
  Calendar,
  DollarSign,
  Eye,
  Clock,
  Star,
  ArrowUpRight,
  Activity,
} from "lucide-react";

interface DashboardStats {
  totalArtworks: number;
  totalCommissions: number;
  totalMessages: number;
  totalRevenue: number;
  recentActivity: Array<{
    id: string;
    type: "commission" | "message" | "artwork";
    title: string;
    time: string;
  }>;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalArtworks: 0,
    totalCommissions: 0,
    totalMessages: 0,
    totalRevenue: 0,
    recentActivity: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        // No token, redirect to login
        window.location.href = "/admin/login";
        return;
      }

      try {
        // Verify token with backend
        await fetch(
          "https://artportfolio-backend.onrender.com/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then((res) => {
          if (!res.ok) {
            throw new Error("Invalid token");
          }
        });
      } catch (err) {
        console.error("Unauthorized or token expired", err);
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
      }
    };

    verifyAdmin();
  }, []);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setStats({
          totalArtworks: 24,
          totalCommissions: 8,
          totalMessages: 12,
          totalRevenue: 3250,
          recentActivity: [
            {
              id: "1",
              type: "commission",
              title: "New commission from Sarah Johnson",
              time: "2 hours ago",
            },
            {
              id: "2",
              type: "message",
              title: "Contact message from Mike Chen",
              time: "4 hours ago",
            },
            {
              id: "3",
              type: "artwork",
              title: 'Uploaded "Sunset Portrait"',
              time: "1 day ago",
            },
            {
              id: "4",
              type: "commission",
              title: "Commission completed for Emma Davis",
              time: "2 days ago",
            },
            {
              id: "5",
              type: "message",
              title: "Inquiry about custom painting",
              time: "3 days ago",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: "Total Artworks",
      value: stats.totalArtworks,
      icon: BarChart3,
      color: "bg-blue-500",
      change: "+12%",
      changeType: "positive",
    },
    {
      title: "Active Commissions",
      value: stats.totalCommissions,
      icon: Package,
      color: "bg-green-500",
      change: "+8%",
      changeType: "positive",
    },
    {
      title: "New Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      color: "bg-purple-500",
      change: "+24%",
      changeType: "positive",
    },
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-orange-500",
      change: "+15%",
      changeType: "positive",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "commission":
        return Package;
      case "message":
        return MessageSquare;
      case "artwork":
        return BarChart3;
      default:
        return Activity;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "commission":
        return "text-green-600 bg-green-100";
      case "message":
        return "text-blue-600 bg-blue-100";
      case "artwork":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Dashboard Overview
            </h1>
            <p className="text-text/70">
              Welcome back! Here&apos;s what&apos;s happening with your art
              portfolio.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${card.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {card.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary mb-1">
                      {card.value}
                    </p>
                    <p className="text-[#3A4D39]/60 text-sm">{card.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-primary">
                    Recent Activity
                  </h2>
                  <Link
                    href="/admin/activities"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                  >
                    View All
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="animate-pulse flex items-center space-x-4"
                      >
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {stats.recentActivity.map((activity) => {
                      const Icon = getActivityIcon(activity.type);
                      return (
                        <div
                          key={activity.id}
                          className="flex items-center space-x-4 p-3 hover:bg-[#ECE3CE]/20 rounded-lg transition-colors"
                        >
                          <div
                            className={`p-2 rounded-full ${getActivityColor(
                              activity.type
                            )}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-[#3A4D39] font-medium">
                              {activity.title}
                            </p>
                            <p className="text-[#3A4D39]/60 text-sm flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions & Stats */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Link href="/admin/dashboard/comission" passHref>
                    <button
                      className="w-full bg-primary hover:bg-[#154930]/90 text-[#ECE3CE] py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                      aria-label="Create new commission"
                    >
                      <Package className="h-4 w-4 mr-2" />
                      New Commission
                    </button>
                  </Link>
                  <Link href="/admin/dashboard/gallery" passHref>
                    <button
                      className="w-full border border-[#154930]/20 text-primary hover:bg-[#154930]/5 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                      aria-label="Upload new artwork"
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Upload Artwork
                    </button>
                  </Link>
                  <Link href="/admin/dashboard/contact" passHref>
                    <button
                      className="w-full border border-[#154930]/20 text-primary hover:bg-[#154930]/5 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                      aria-label="View messages"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      View Messages
                    </button>
                  </Link>
                </div>
              </div>

              {/* Performance Summary */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h2 className="text-xl font-semibold text-[#3A4D39] mb-4">
                  This Month
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 text-[#154930] mr-2" />
                      <span className="text-[#3A4D39] text-sm">
                        Portfolio Views
                      </span>
                    </div>
                    <span className="font-semibold text-[#3A4D39]">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#154930] mr-2" />
                      <span className="text-[#3A4D39] text-sm">
                        New Followers
                      </span>
                    </div>
                    <span className="font-semibold text-[#3A4D39]">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-[#154930] mr-2" />
                      <span className="text-[#3A4D39] text-sm">
                        Completed Works
                      </span>
                    </div>
                    <span className="font-semibold text-[#3A4D39]">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
