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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_END_POINT } from "@/utils/contant";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutHandler=async()=>{
    try {
      const res=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#4e08c5]">Signup</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <PopoverHeader>
                    <PopoverTitle>
                      <div className="flex gap-4 items-center">
                        <Avatar className="cursor-pointer">
                          <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>
                        <h4 className="font-medium">{user?.fullname}</h4>
                      </div>
                    </PopoverTitle>
                    <PopoverDescription className="ml-12">{user?.profile?.bio}</PopoverDescription>
                  </PopoverHeader>
                  <div className="flex flex-col items-start text-gray-600 gap-2">
                    <div className="flex w-fit items-center gap-3">
                      <User2 />
                      <Button variant="link" className="cursor-pointer"><Link to="/profile">View Profile</Link></Button>
                    </div>

                    <div className="flex w-fit items-center gap-3">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link" className="cursor-pointer">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;