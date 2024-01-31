import { Interview } from "@/app/entities/interview";
import { delay, fakeInterviewData } from "./fake-data-service";

export const fetchInterviews = async (): Promise<Interview[]> => {
    // Simulate an asynchronous API call with a delay
    await delay(1000);
    
    // Simulate success or failure based on a condition (you can modify as needed)
    const shouldFail = false;
  
    if (shouldFail) {
      throw new Error("Failed to fetch interviews");
    }
  
    return fakeInterviewData;
  };