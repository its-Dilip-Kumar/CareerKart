import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs, searchedQuery } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div>
        <h1 className="font-bold text-xl my-10">
          {searchedQuery
            ? `Search Results for "${searchedQuery}" (${allJobs?.length || 0})`
            : `Search Results (${allJobs?.length || 0})`}
        </h1>

        {!allJobs || allJobs.length === 0 ? (
          <div className="text-center text-gray-500 my-10">
            No jobs found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {allJobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;