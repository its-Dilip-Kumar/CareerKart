import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from "@/utils/contant";
import { setCompanies } from "@/redux/companySlice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });

  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const { companies } = useSelector((store) => store.company);

  // Fetch companies on mount
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        console.log("companies API response =>", res.data);
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log("fetch companies error =>", error);
      }
    };
    fetchCompanies();
  }, [dispatch]);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    setInput({ ...input, companyId: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        const res=await axios.post(`${JOB_API_END_POINT}/post`,input,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        })
        if(res.data.success){
            toast.success(res.data.message);
            navigate("/admin/jobs");
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }finally{
        setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-4xl w-full border border-gray-200 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input
                value={input.title}
                onChange={changeEventHandler}
                type="text"
                name="title"
                placeholder="e.g. Frontend Developer"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                value={input.description}
                onChange={changeEventHandler}
                type="text"
                name="description"
                placeholder="Short description"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <Input
                value={input.requirements}
                onChange={changeEventHandler}
                type="text"
                name="requirements"
                placeholder="e.g. React, Node.js"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                value={input.salary}
                onChange={changeEventHandler}
                type="text"
                name="salary"
                placeholder="e.g. 12 LPA"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={input.location}
                onChange={changeEventHandler}
                type="text"
                name="location"
                placeholder="e.g. Bangalore"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                value={input.jobType}
                onChange={changeEventHandler}
                type="text"
                name="jobType"
                placeholder="e.g. Full-time"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                value={input.experience}
                onChange={changeEventHandler}
                type="text"
                name="experience"
                placeholder="e.g. 2 years"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>No. of Position</Label>
              <Input
                value={input.position}
                onChange={changeEventHandler}
                type="number"
                name="position"
                placeholder="e.g. 3"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {companies.length > 0 && (
              <div className="col-span-2">
                <Label>Company</Label>
                <Select
                  value={input.companyId}
                  onValueChange={selectChangeHandler}
                >
                  <SelectTrigger className="w-full my-1">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem key={company._id} value={company._id}>
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          {loading ? (
            <Button
              disabled
              className="w-full my-4 border rounded-sm h-10 bg-black text-white flex items-center justify-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Please Wait</span>
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-4 border rounded-sm h-10 bg-black text-white"
            >
              Post New Job
            </Button>
          )}

          {companies.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center my-3">
              *Please register a company first, before posting a job
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;