import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import MeetingsModel from "../4-models/meetingsModel";
import TeamsModel from "../4-models/teamsModel";
import QuestionsModel from "../4-models/questionsModel";




async function getAllTeam():Promise<TeamsModel[]>{
    const sql= ` SELECT * FROM teams`;

    const teams= await dal.execute(sql)

    return teams
}

async function getMeetingsByTeam(teamID:number):Promise<MeetingsModel[]>{
    const sql= ` SELECT teamName, startMeetingTime, endMeetingTime, description, room 
    FROM meetings
    JOIN teams
    ON meetings.teamID= teams.teamID
    WHERE meetings.teamID= ? `;

    const meetings= await dal.execute(sql, [teamID])
    return meetings
}

async function addMeeting(meeting:MeetingsModel):Promise<MeetingsModel>{
    const sql= `INSERT INTO meetings VALUES (DEFAULT, ?, ?, ?, ?, ?)`;

    const info:OkPacket = await dal.execute(sql, [meeting.teamID, meeting.startMeetingTime, meeting.endMeetingTime, meeting.description, meeting.room])

    meeting.meetingID= info.insertId

    return meeting
}

async function getMeetingsByTeamAndTime(teamID: number,startMeetingTime: string,endMeetingTime: string): Promise<MeetingsModel[]> {
    const sql = `SELECT * FROM meetings
    WHERE teamID = ?
    AND ((startMeetingTime >= ? AND startMeetingTime <= ?) OR (endMeetingTime >= ? AND endMeetingTime <= ?))`;

    const meetings = await dal.execute(sql, [teamID,startMeetingTime,endMeetingTime,startMeetingTime,endMeetingTime,]);

    return meetings;
}

async function addQuestion(question:QuestionsModel):Promise<QuestionsModel>{
    const sql=` INSERT INTO questions VALUES (DEFAULT,?,?)`;

    const info:OkPacket= await dal.execute(sql,[question.email, question.question])

    question.questionID= info.insertId

    return question

}


export default {
    getAllTeam, getMeetingsByTeam, addMeeting, getMeetingsByTeamAndTime, addQuestion
}