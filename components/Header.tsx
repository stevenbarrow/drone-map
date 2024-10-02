import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";


function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
      <Link href="/dashboard" className="text-2xl">
        Drone <span className="text-indigo-600">Map</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
         

          <Button asChild variant="outline">
            <Link href="/map">My Map</Link>
          </Button>

          

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;