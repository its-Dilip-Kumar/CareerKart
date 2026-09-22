import { Bookmark } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {
  const navigate=useNavigate();
  const jobId="dsoghosdg";
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
            <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">2 days ago</p>
            <Button variant="outline" className="rounded-full" size="icon">
                <Bookmark />
            </Button>
            </div>

            <div className="flex items-center gap-2 my-2">
            <Button className="p-6" variant="outline" size="icon">
            <Avatar>
                <AvatarImage src="https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png" />
            </Avatar>
            </Button>
            <div>
                <h1 className="font-medium text-lg">Company Name</h1>
                <p className="text-sm text-gray-500">India</p>
            </div>
            </div>

            <div>
                <h1 className="font-bold text-lg my-2">Title</h1>
                <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus est cumque esse ipsum cupiditate ducimus facilis! Tempora nemo placeat sed.</p>
            </div>

            <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="secondary">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="secondary">
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="secondary">
          24LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save for later</Button>
      </div>
        </div>
    );
}

export default Job;