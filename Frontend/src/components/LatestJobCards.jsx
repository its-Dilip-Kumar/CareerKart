import { Badge } from "@/components/ui/badge";
import React from "react";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const formatJobType = (type = "") => {
    const map = {
      fulltime: "Full Time",
      "full-time": "Full Time",
      "full time": "Full Time",
      parttime: "Part Time",
      "part-time": "Part Time",
      "part time": "Part Time",
      internship: "Internship",
      remote: "Remote",
      contract: "Contract",
      freelance: "Freelance",
    };
    const key = type.toLowerCase().trim();
    return map[key] || type;
  };

  const navigate=useNavigate();


  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold bg-gray-100" variant="ghost">
          {job?.position} {Number(job?.position) > 1 ? "Positions" : "Position"}
        </Badge>

        <Badge className="text-[#F83002] font-bold bg-gray-100" variant="ghost">
          {formatJobType(job?.jobType)}
        </Badge>

        <Badge className="text-[#7209b7] font-bold bg-gray-100" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;