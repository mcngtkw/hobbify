import { Power } from "lucide-react";
import { handleSignOut } from "@/lib/actions";

export function SignOutButton() {
  return (
    <form action={handleSignOut} className="w-full">
      <button 
        type="submit"
        className="flex w-full items-center gap-2 px-2 py-1.5 text-sm hover:bg-gray-100 rounded-sm"
      >
        <Power className="w-4 h-4" />
        Sign Out
      </button>
    </form>
  );
}