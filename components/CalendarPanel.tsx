"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function CalendarPanel() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentStreak = 7; // Current streak count
  const streakGoal = 30; // Next goal
  const streakProgress = (currentStreak / streakGoal) * 100;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Dates with activity (Jan 18-24, 2026)
  const activityDates = [18, 19, 20, 21, 22, 23, 24];
  
  const isActivityDay = (day: number | null) => {
    if (!day) return false;
    const isJanuary2026 = currentDate.getMonth() === 0 && currentDate.getFullYear() === 2026;
    return isJanuary2026 && activityDates.includes(day);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date();
  const isCurrentMonth = currentDate.getMonth() === today.getMonth() && 
                        currentDate.getFullYear() === today.getFullYear();

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg mb-3">My Hobby Calendar</CardTitle>
        <div className="flex items-center justify-between">
          <div className="font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" onClick={previousMonth} className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-6">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs text-gray-500 py-2">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={index}
              className={`
                aspect-square flex flex-col items-center justify-center text-sm rounded-md relative
                ${day ? "hover:bg-indigo-100 cursor-pointer" : ""}
                ${day && isCurrentMonth && day === today.getDate() 
                  ? "bg-indigo-300 text-white hover:bg-indigo-600" 
                  : "text-gray-700"}
              `}
            >
              {day}
              {isActivityDay(day) && (
                <span className="text-xs leading-none mt-0.5">🔥</span>
              )}
            </div>
          ))}
        </div>

        {/* Streak Counter */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="font-semibold">{currentStreak} Day Streak</div>
                <div className="text-xs text-gray-500">Keep it going!</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Progress value={streakProgress} className="h-2 bg-gray-200" />
            <div className="absolute -top-1 right-0 text-xs text-gray-500 font-medium">
              {streakGoal}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}