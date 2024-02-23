import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return(
   <Sheet>
    <SheetTrigger>
        <Menu className="text-orange-500"></Menu>
    </SheetTrigger>
    <SheetContent className="space-y-3">
        <SheetTitle>Welcome to the Foodish.com</SheetTitle>
        <Separator/>
        <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </SheetDescription>
    </SheetContent>
   </Sheet>
  );
}

export default MobileNav;