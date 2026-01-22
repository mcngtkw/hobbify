import { useState } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/app/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { Button } from "@/app/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface FeedItem {
  id: number;
  userName: string;
  userAvatar: string;
  timeAgo: string;
  hobby: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const mockFeedData: FeedItem[] = [
  {
    id: 1,
    userName: "Sarah Johnson",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    timeAgo: "2 hours ago",
    hobby: "Photography",
    content: "Just captured this stunning sunset at the beach! The golden hour never disappoints. 📸",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    likes: 142,
    comments: 23,
  },
  {
    id: 2,
    userName: "Mike Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    timeAgo: "4 hours ago",
    hobby: "Rock Climbing",
    content: "Finally conquered the overhang route at the gym! Took me 3 weeks but persistence pays off. 💪🧗‍♂️",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop",
    likes: 89,
    comments: 15,
  },
  {
    id: 3,
    userName: "Emma Davis",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    timeAgo: "6 hours ago",
    hobby: "Painting",
    content: "Finished my watercolor landscape series. Each piece represents a different season in my hometown.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    likes: 215,
    comments: 34,
  },
  {
    id: 4,
    userName: "Alex Rivera",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    timeAgo: "8 hours ago",
    hobby: "Cooking",
    content: "Tried making authentic ramen from scratch today. The broth took 12 hours but it was worth every minute! 🍜",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=600&fit=crop",
    likes: 178,
    comments: 42,
  },
  {
    id: 5,
    userName: "Jessica Park",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    timeAgo: "10 hours ago",
    hobby: "Gardening",
    content: "My first tomatoes of the season! There's something magical about growing your own food. 🍅🌱",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&h=600&fit=crop",
    likes: 95,
    comments: 18,
  },
  {
    id: 6,
    userName: "David Martinez",
    userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    timeAgo: "12 hours ago",
    hobby: "Woodworking",
    content: "Just completed this handmade coffee table from reclaimed oak. Love working with my hands!",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&h=600&fit=crop",
    likes: 156,
    comments: 27,
  },
];

export function FeedPanel() {
  const [feedFilter, setFeedFilter] = useState("following");

  return (
    <div className="w-full">
      {/* Fixed Filter Dropdown */}
      <div className="sticky top-16 bg-white z-40 pb-4 pt-6 border-b border-gray-200 mb-6">
        <Select value={feedFilter} onValueChange={setFeedFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="following">Following</SelectItem>
            <SelectItem value="suggested">Suggested</SelectItem>
            <SelectItem value="all">All Hobbies</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Scrollable Feed */}
      <div className="space-y-4 pb-8">
        {mockFeedData.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              {/* User Info Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={item.userAvatar}
                    alt={item.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{item.userName}</div>
                    <div className="text-sm text-gray-500">
                      {item.timeAgo} · {item.hobby}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <p className="mb-4">{item.content}</p>

              {/* Image */}
              {item.image && (
                <ImageWithFallback
                  src={item.image}
                  alt="Post content"
                  className="w-full rounded-lg mb-4 object-cover"
                />
              )}

              {/* Actions */}
              <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{item.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{item.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
