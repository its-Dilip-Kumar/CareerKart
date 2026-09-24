const Job=require("../models/job.model");
//admin post jobs
const postJob=async (req,res)=>{
    try {
        const {title,description,requirements,salary,location,jobType,position,companyId,experience}=req.body;
        const userId=req.id;
        if(!title || !description || !requirements || !salary || !location || !jobType || !position || !companyId || !experience){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        const job=await Job.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experienceLevel:experience,
            position,
            company:companyId,
            created_by:userId
        })
        return res.status(201).json({
            message:"New Job Created Successfully",
            job,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllJobs=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}}
            ]
        };
        const jobs=await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

const getJobById=async (req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({
            path:"applications"
        })
        if(!job){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({job,success:true})
    } catch (error) {
       console.log(error); 
    }
}

const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    console.log("=== ADMIN JOBS DEBUG ===");
    console.log("Admin ID:", adminId);

    const jobs = await Job.find({ created_by: adminId })
      .populate("company")
      .sort({ createdAt: -1 });

    console.log("Jobs count:", jobs.length);
    if (jobs.length > 0) {
      console.log("First job:", JSON.stringify(jobs[0], null, 2));
    }

    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong", success: false });
  }
};


module.exports={postJob,getAllJobs,getJobById,getAdminJobs};


