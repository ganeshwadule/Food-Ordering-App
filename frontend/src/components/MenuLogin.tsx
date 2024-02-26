import { useAuth0 } from "@auth0/auth0-react";
import { SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MenuLogin = () => {

    const { user  } = useAuth0();

  return(
    
    <div className="flex">
        <span className="flex space-x-2 items-center">
        <SheetContent className="space-y-3">
        <SheetTitle>{user?.email}</SheetTitle>
        <Separator/>
        <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
    </SheetDescription>
    
    </SheetContent>
    </span>
    </div>
  );
}

export default MenuLogin;