import { useAuth0 } from "@auth0/auth0-react";
import { SheetContent} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

const MenuLogin = () => {

    const { user, logout } = useAuth0();

    return (

        <div className="flex">
            <span className="flex space-x-2 items-center">
                <SheetContent className="space-y-3">
                    <DropdownMenu>

                        <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-orange-500">
                            <CircleUserRound className="text-orange-500" />
                            {user?.name}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>

                            <DropdownMenuItem className="flex justify-center items-center">
                                <Link to='/user-profile' className="font-bold hover:text-orange-500">
                                    User Profile
                                </Link>
                            </DropdownMenuItem>
                            <Separator></Separator>
                            <DropdownMenuItem>
                                <Button onClick={() => logout()} className="flex flex-1 font-bold  bg-orange-500">
                                    Log Out
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetContent>
            </span>
        </div>
    );
}

export default MenuLogin;