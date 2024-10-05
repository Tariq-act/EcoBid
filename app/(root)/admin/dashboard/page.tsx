"use client";

import OrderManagement from "@/components/Admin/OrderManagement";
import ProductManagement from "@/components/Admin/ProductManagement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, List, Package, ShoppingBag, Users } from "lucide-react";
import { useState } from "react";

// Mock data

const users = [
  {
    id: 1,
    name: "Alice Cooper",
    email: "alice@example.com",
    role: "Buyer",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Dylan",
    email: "bob@example.com",
    role: "Seller",
    status: "Active",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Admin",
    status: "Inactive",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div>
      <div className='min-h-screen bg-green-50 py-8'>
        <div className='container px-4'>
          <h1 className='page-heading'>Admin Dashboard</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className='w-full grid grid-cols-5 mb-8 '>
              <TabsTrigger className='flex items-center' value='products'>
                <Package className='w-4 h-4 mr-2' /> Products
              </TabsTrigger>
              <TabsTrigger className='flex items-center' value='orders'>
                <ShoppingBag className='w-4 h-4 mr-2' /> Orders
              </TabsTrigger>
              <TabsTrigger className='flex items-center' value='categories'>
                <List className='w-4 h-4 mr-2' /> Categories
              </TabsTrigger>
              <TabsTrigger className='flex items-center' value='users'>
                <Users className='w-4 h-4 mr-2' /> Users
              </TabsTrigger>
              <TabsTrigger className='flex items-center' value='reports'>
                <BarChart className='w-4 h-4 mr-2' /> Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value='products'>
              <ProductManagement />
            </TabsContent>
            <TabsContent value='orders'>
              <OrderManagement />
            </TabsContent>
            <TabsContent value='users'></TabsContent>
            <TabsContent value='categories'></TabsContent>
            <TabsContent value='reports'></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
