import { Navbar } from "@/components/Navbar";
import { CalendarPanel } from "@/components/CalendarPanel";
import { FeedPanel } from "@/components/FeedPanel";
import { SuggestedFriendsPanel } from "@/components/SuggestedFriendsPanel";
import Link from "next/link"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <Navbar />

      <div className="pt-16 max-w-[1920px] mx-auto flex items-center justify-center px-6 min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center gap-x-6 gap-y-10">
          <div className="flex items-center gap-2">
            <div className="w-30 h-30 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-7xl items-center">H</span>
            </div>
            <span className="font-bold text-8xl text-stone-800">HobbyHub</span>
          </div>
          
          <div className="flex flex-col gap-12 w-full max-w-sm">
            <Link href="/login" className="block px-4 py-2 bg-blue-800 text-xl text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
