import { Link } from "react-router-dom";
import { Heart, Trash2Icon, MapPinIcon } from "lucide-react"; // Assuming you have these icons imported
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"; // Assuming you have these components
import { Button } from "./ui/button";
import { useUser} from "@clerk/clerk-react";


const JobCard = ({ job, isMyJob = false, savedInit = false, onJobSaved = () => {} }) => {
  // Use some user context or hook to get user data if needed
  const user = useUser(); 

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job.title}
          {isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
              onClick={() => onJobSaved(job.id)} // Assuming this function handles job saving/removal
            />
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {job.company && <img src={job.company.logo_url} className="h-6" alt="Company Logo" />}
          <div className="flex gap-2 items-center">
            <MapPinIcon size={15} /> {job.location}
          </div>
        </div>
        <hr />
        <p>{job.description.substring(0, job.description.indexOf(". "))}...</p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        <Heart size={20} stroke="red" fill={savedInit ? "red" : "none"} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
