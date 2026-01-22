import LikeButton from "./LikeButton";
import "@/app/ui/global.css"

// Sample code to learn.  This is a server-side component.
// This can't use state.  Can use props though.
export default function Index() {
    const listItems = ["Item 1", "Item 2", "Item 3"];

    return (
        <div>
            <div
  className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
/>
            <ul>
                {
                    listItems.map(
                        i => 
                        <li key={i}>
                            {i}
                        </li>
                    )
                }
            </ul>

            <LikeButton/>
        </div>
    );
}