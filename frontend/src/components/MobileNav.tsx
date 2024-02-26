import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MenuLogin from "./MenuLogin";

const MobileNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return(
   <Sheet>
    <SheetTrigger>
    <Menu className="text-orange-500"></Menu>  
    </SheetTrigger>
    

    { isAuthenticated ? ( <MenuLogin/> ) :
    
    (   <SheetContent className="space-y-3">
        <SheetTitle>Welcome to the Foodish.com</SheetTitle>
        <Separator/>
        <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500"
            onClick={async () => await loginWithRedirect()}>Log In</Button>
    </SheetDescription>
    
    </SheetContent>
    )
  }
   
    
   </Sheet>
  );
}

export default MobileNav;