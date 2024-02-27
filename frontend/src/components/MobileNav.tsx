import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
// import { spawn } from "child_process";


const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user  } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500"></Menu>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? <span className="flex items-center font-bold gap-2">

            <CircleUserRound className="text-orange-500" />
            {user?.name}
          </span> : <span>Welcome to the Foodish.com</span>}

        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {isAuthenticated ? <MobileNavLinks /> : <Button className="flex-1 font-bold bg-orange-500"
            onClick={async () => await loginWithRedirect()}>Log In</Button>}

        </SheetDescription>

      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;