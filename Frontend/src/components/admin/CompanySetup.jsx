import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { COMPANY_API_END_POINT } from "@/utils/contant";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanySetup = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${params.id}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          const company = res.data.company;
          setInput({
            name: company.name || "",
            description: company.description || "",
            website: company.website || "",
            location: company.location || "",
            file: null,
          });
          dispatch(setSingleCompany(company));
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to load company");
      }
    };

    if (singleCompany && singleCompany._id === params.id) {
      setInput({
        name: singleCompany.name || "",
        description: singleCompany.description || "",
        website: singleCompany.website || "",
        location: singleCompany.location || "",
        file: singleCompany.file || null,
      });
    } else {
      fetchCompany();
    }
  }, [singleCompany, params.id, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 p-8">
            <Button
              onClick={() => navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input type="text" name="name" value={input.name} onChange={changeEventHandler} />
            </div>
            <div>
              <Label>Description</Label>
              <Input type="text" name="description" value={input.description} onChange={changeEventHandler} />
            </div>
            <div>
              <Label>Website</Label>
              <Input type="text" name="website" value={input.website} onChange={changeEventHandler} />
            </div>
            <div>
              <Label>Location</Label>
              <Input type="text" name="location" value={input.location} onChange={changeEventHandler} />
            </div>
            <div>
              <Label>Logo</Label>
              <Input type="file" accept="image/*" name="logo" onChange={changeFileHandler} />
            </div>
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
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;