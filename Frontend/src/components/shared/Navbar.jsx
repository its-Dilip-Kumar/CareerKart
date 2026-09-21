import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user=false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#4e08c5]">Signup</Button></Link>
              </div>) :(<Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <PopoverHeader>
                <PopoverTitle>
                  <div className="flex gap-4 items-center">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <h4 className="font-medium">Dilip's MernStack</h4>
                  </div>
                </PopoverTitle>
                <PopoverDescription className="ml-12">Lorem ipsum dolor sit amet.</PopoverDescription>
              </PopoverHeader>
              <div className="flex flex-col items-start text-gray-600 gap-2">
                <div className="flex w-fit items-center gap-3">
                  <User2/>
                  <Button variant="link" className="cursor-pointer">View Profile</Button>
                </div>
                
                <div className="flex w-fit items-center gap-3">
                  <LogOut/>
                <Button variant="link" className="cursor-pointer">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>)
          }

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
