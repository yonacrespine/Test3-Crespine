import axios from "axios";
import TeamsModel from "../2-Models/TeamsModel";
import { appConfig } from "../1-Utils/Config";
import MeetingsModel from "../2-Models/MeetingsModel";
import QuestionsModel from "../2-Models/QuestionsModel";

class MeetingService{



    async getAllTeams():Promise<TeamsModel[]>{
        const response= await axios.get<TeamsModel[]>(appConfig.teamsUrl)
        const teams= response.data
        return teams
    }

    async getMeetingsByTeam(teamID: number):Promise<MeetingsModel[]>{

        const response = await axios.get(appConfig.meetingsUrl+ teamID)
        const meetings= response.data
        return meetings
    }


    async addMeeting(meeting:MeetingsModel):Promise<MeetingsModel>{
        const response= await axios.post(appConfig.meetingsUrl, meeting)
        const addedMeeting= response.data
        return addedMeeting
    }

    async getMeetingByTeamAndTime(teamID:number, startMeetingTime:string, endMeetingTime:string):Promise<MeetingsModel[]>{
        const response= await axios.get(`${appConfig.meetingByTeamAndTime}${teamID}/${startMeetingTime}/${endMeetingTime}`)
        const meetings= response.data
        return meetings
    }

    async addQuestion(question:QuestionsModel):Promise<QuestionsModel>{
        const response= await axios.post<QuestionsModel>(appConfig.questionsUrl, question)
        const addedQuestion= response.data
        return addedQuestion
    }
}

export const meetingService= new MeetingService()