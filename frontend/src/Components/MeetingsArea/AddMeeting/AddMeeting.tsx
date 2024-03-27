import { useForm } from "react-hook-form";
import "./AddMeeting.css";
import MeetingsModel from "../../../2-Models/MeetingsModel";
import { useEffect, useState } from "react";
import TeamsModel from "../../../2-Models/TeamsModel";
import { meetingService } from "../../../3-Services/meetingService";
import { useNavigate } from "react-router-dom";
import notify from "../../../3-Services/NotifyService";

function AddMeeting(): JSX.Element {


const [teams, setTeams]= useState<TeamsModel[]>([])
// const [meetings, setMeetings]= useState<MeetingsModel>()
const {register, handleSubmit, formState: { errors }  }= useForm<MeetingsModel>()
const navigate= useNavigate()

useEffect(()=>{
    meetingService.getAllTeams()
    .then(ts=>setTeams(ts))
    .catch(err=>alert(err))
})

async function send(meeting:MeetingsModel){
    try{
        await meetingService.addMeeting(meeting)
       
        notify.successMsg("your meeting has been add successfully!")
        
        navigate("/meetings")
    }
    catch(err:any){
        notify.errorMsg(err.message)
    }
}

async function timeOfMeeting(meeting: MeetingsModel) {
    try {
      const meetingsList = await meetingService.getMeetingByTeamAndTime(
        meeting.teamID, meeting.startMeetingTime.toLocaleString(), meeting.endMeetingTime.toLocaleString()
      );
  
     
      if (meetingsList.length > 0) {
        notify.errorMsg(`This team already has a meeting scheduled during this time.`);
        return;
      }
  
       await send(meeting)
    } catch (err: any) {
      alert(err);
    }
  }
    return (
        <div className="AddMeeting">
			<form className="form" onSubmit={handleSubmit(timeOfMeeting)}>
            <h2>New Meeting</h2>
                <select name="" id="" {...register("teamID", { required: true })}>
                    <option value="" disabled selected>Choise your team</option>
                    {teams.map(t=>(<option key={t.teamID} value={t.teamID}>{t.teamName}</option>))}
                </select>
                {errors.teamID && <p className="error-message">Please select a team.</p>}

                <label htmlFor="">From:</label>
                <input type="datetime-local" {...register("startMeetingTime")} required />
                
                <label htmlFor="">To:</label>
                <input type="datetime-local" {...register("endMeetingTime")} required/>

                <label htmlFor="">Description</label>
                <input type="text" {...register("description")} required/>

                <label htmlFor="">Room</label>
                <input type="text" {...register("room")} required/>

                <button className="submit">Add Meeting</button>


            </form>
        </div>
    );
}

export default AddMeeting;
