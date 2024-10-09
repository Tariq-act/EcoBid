"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data
const user = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+1 234 567 8900",
  address: "123 Eco Street, Green City, EC 12345",
  avatar: "/placeholder.svg",
  ecoPoints: 1500,
};

const orderHistory = [
  { id: "ORD001", date: "2023-06-01", total: 150, status: "Delivered" },
  { id: "ORD002", date: "2023-05-15", total: 89.99, status: "Shipped" },
  { id: "ORD003", date: "2023-04-30", total: 200, status: "Processing" },
];

const savedItems = [
  { id: 1, name: "Eco-Friendly Water Bottle", price: 25 },
  { id: 2, name: "Bamboo Cutlery Set", price: 15 },
  { id: 3, name: "Organic Cotton T-Shirt", price: 30 },
];

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // Here you would typically update the user information in your backend
  };

  return (
    <div className='min-h-screen bg-green-50 py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-green-800 mb-8'>My Account</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card className='md:col-span-1'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold'>
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col items-center'>
              <Image
                src={user.avatar}
                alt={user.name}
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <h2 className='text-2xl font-bold mb-2'>{user.name}</h2>
              <p className='text-gray-600 mb-4'>{user.email}</p>
              <div className='flex items-center space-x-2 text-green-600'>
                <Award className='h-5 w-5' />
                <span>{user.ecoPoints} Eco-Points</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleEdit} className='w-full'>
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </CardFooter>
          </Card>

          <Card className='md:col-span-2'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold'>
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <div>
                  <Label htmlFor='name'>Full Name</Label>
                  <div className='relative'>
                    <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input
                      id='name'
                      defaultValue={user.name}
                      className='pl-10'
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input
                      id='email'
                      type='email'
                      defaultValue={user.email}
                      className='pl-10'
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor='phone'>Phone</Label>
                  <div className='relative'>
                    <Phone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input
                      id='phone'
                      defaultValue={user.phone}
                      className='pl-10'
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor='address'>Address</Label>
                  <div className='relative'>
                    <MapPin className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input
                      id='address'
                      defaultValue={user.address}
                      className='pl-10'
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue='orders' className='mt-8'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='orders'>Order History</TabsTrigger>
            <TabsTrigger value='saved'>Saved Items</TabsTrigger>
          </TabsList>
          <TabsContent value='orders'>
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>
                  View your past orders and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderHistory.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>{order.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='saved'>
            <Card>
              <CardHeader>
                <CardTitle>Saved Items</CardTitle>
                <CardDescription>
                  Items {`you've`} saved for later
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {savedItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button variant='outline' size='sm'>
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}