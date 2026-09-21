import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png"
                alt="profile"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatibus ducimus eveniet commodi perferendis consectetur
                quam vero officia nam quo.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div>
            <div className="flex items-center gap-3">
            <Mail/>
            <span>patel@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
            <Contact/>
            <span>8935737937</span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Profile;
