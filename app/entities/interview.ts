import { Chat } from "./chat";
import { FeedBack } from "./feedback";
import { JobPosition } from "./job-position";

export interface Interview {
    id: string;
    chat: Chat;
    jobPosition: JobPosition;
    feedback?: FeedBack;
}
