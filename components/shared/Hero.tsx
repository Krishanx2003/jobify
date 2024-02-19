import { jobType } from "@/types/jobTypes";
import SearchForm from "./SearchForm";

interface HeroProps {
  jobs: jobType[];
}

const Hero = ({ jobs }: HeroProps) => {
  return (
    
      <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-extrabold text-black">
            Land The{" "}
            <span className="text-purple-600 font-extrabold">
              Dream Job
            </span>
            , You Deserve
          </h1>
          <span className="font-thin">
            100,000 jobs listed here! Your dream job is
            waiting
          </span>
        </div>
        <SearchForm jobs={jobs} />
      </div>
   
  );
};

export default Hero;
