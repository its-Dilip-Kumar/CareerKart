const express=require("express");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const app=express();
const main=require("./utils/db");
const userRoute=require("./routes/user.route");
const companyRoute=require("./routes/company.route");
const jobRoute=require("./routes/job.route");
const applicationRoute=require("./routes/application.route");


require('dotenv').config()


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOption));



const PORT=process.env.PORT || 3000;

//api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"
// "http://localhost:8000/api/v1/user/profile/update"



main()
.then(()=>{
    console.log("Connected to DB");
    app.listen(PORT,()=>{
        console.log("listening at port 3000");
    })
}).catch((e)=>{
    console.log("Failed to Connect to DB:",e);
})
