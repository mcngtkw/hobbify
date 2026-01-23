"use client";

import { useState } from "react";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { SignOutButton } from "./SignOutButton";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-indigo-400 border-b border-gray-200 z-50">
      <div className="h-full px-6 flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Logo and Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl text-gray-100">HobbyHub</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/explore" className="text-gray-300 hover:text-gray-900 transition-colors">
              Explore Hobbies
            </Link>
            <Link href="/achievements" className="text-gray-300 hover:text-gray-900 transition-colors">
              Achievements
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search users and groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        {/* Profile Icon with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="cursor-pointer">
              My Groups
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer p-0">
              <SignOutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}