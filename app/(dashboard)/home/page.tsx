import { Navbar } from "@/components/Navbar";
import { CalendarPanel } from "@/components/CalendarPanel";
import { FeedPanel } from "@/components/FeedPanel";
import { SuggestedFriendsPanel } from "@/components/SuggestedFriendsPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content - Three Column Layout */}
      <div className="pt-16 max-w-[1920px] mx-auto px-6">
        <div className="grid grid-cols-[320px_1fr_320px] gap-6 py-6">
          {/* Left Panel - Fixed Calendar */}
          <div className="sticky top-[88px] self-start">
            <CalendarPanel />
          </div>

          {/* Center Panel - Scrollable Feed */}
          <div className="min-h-screen">
            <FeedPanel />
          </div>

          {/* Right Panel - Fixed Suggested Friends */}
          <div className="sticky top-[88px] self-start">
            <SuggestedFriendsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
