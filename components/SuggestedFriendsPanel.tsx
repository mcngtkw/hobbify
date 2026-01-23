import { UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface SuggestedFriend {
  id: number;
  name: string;
  avatar: string;
  mutualFriends: number;
  topHobby: string;
}

const mockSuggestedFriends: SuggestedFriend[] = [
  {
    id: 1,
    name: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    mutualFriends: 12,
    topHobby: "Yoga",
  },
  {
    id: 2,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    mutualFriends: 8,
    topHobby: "Cycling",
  },
  {
    id: 3,
    name: "Rachel Kim",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    mutualFriends: 15,
    topHobby: "Photography",
  },
  {
    id: 4,
    name: "Tom Harris",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
    mutualFriends: 6,
    topHobby: "Guitar",
  },
  {
    id: 5,
    name: "Nina Patel",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    mutualFriends: 10,
    topHobby: "Reading",
  },
];

export function SuggestedFriendsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Suggested Friends</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockSuggestedFriends.map((friend) => (
          <div key={friend.id} className="flex items-start gap-3">
            <ImageWithFallback
              src={friend.avatar}
              alt={friend.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm truncate">{friend.name}</div>
              <div className="text-xs text-gray-500 mb-1">
                {friend.mutualFriends} mutual friends
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Loves {friend.topHobby}
              </div>
              <Button size="sm" className="w-full bg-indigo-500 hover:bg-indigo-600">
                <UserPlus className="w-4 h-4 mr-1" />
                Follow
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}