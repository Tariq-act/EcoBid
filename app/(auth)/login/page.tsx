"use client";

import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginRegisterPage() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
