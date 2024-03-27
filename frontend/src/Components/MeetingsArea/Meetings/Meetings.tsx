import { useEffect, useState } from "react";
import "./Meetings.css";
import TeamsModel from "../../../2-Models/TeamsModel";
import MeetingsModel from "../../../2-Models/MeetingsModel";
import { meetingService } from "../../../3-Services/meetingService";
import notify from "../../../3-Services/NotifyService";


function Meetings(): JSX.Element {


const [teams, setTeams]= useState<TeamsModel[]>([])
const [ meetings, setMeetings]= useState<MeetingsModel[]>([])

useEffect(()=>{
    meetingService.getAllTeams()
    .then(ts=>setTeams(ts))
    .catch(err=>notify.errorMsg(err))
})


async function getMeeting(teamID:number){
    try{
        const myMeetings= await meetingService.getMeetingsByTeam(teamID)
        setMeetings(myMeetings)

    }
    catch(err:any){
        notify.errorMsg(err.message)
    }
}
    return (
        <div className="Meetings">
              <div className=" mySelect col-md-4">
			<select name=""  className="form-select" aria-label="Default select example" onChange={async(e)=>getMeeting(e.target.selectedIndex)}>
                <option disabled selected>Choise your team</option>
                {teams.map((t,index)=>(<option key={t.teamID} value={index}>{t.teamName}</option>))}
            </select>
            </div>

            {meetings.length>0 && 
            
            <table className="table  table-striped">
 <thead>
     <tr>
       
         <th scope="col">Team Name</th>
         <th scope="col">From</th>
         <th scope="col">To</th>
         <th scope="col">Description</th>
         <th scope="col">Room</th>
        
     </tr>
     </thead>
     <tbody>
        {meetings.map(m=>(<tr key={m.meetingID}>
                <td>{m.teamName}</td>
                <td>{m.startMeetingTime.toLocaleString()}</td>
                <td>{m.endMeetingTime.toLocaleString()}</td>
                <td>{m.description}</td>
                <td>{m.room}</td>
        </tr>))}
     </tbody>




 </table>
            
            }
            </div>
 
    );
}

export default Meetings;
