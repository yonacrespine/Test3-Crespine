import "./MainPage.css";

import workspace from "../../../Assets/Images/worplace.jpg"
import { useForm } from "react-hook-form";
import QuestionsModel from "../../../2-Models/QuestionsModel";
import { useState } from "react";
import { meetingService } from "../../../3-Services/meetingService";
import notify from "../../../3-Services/NotifyService";

function MainPage(): JSX.Element {

const {register, handleSubmit, reset}= useForm<QuestionsModel>()
const [questions, setQuestions]= useState<QuestionsModel[]>([])

async function send(question:QuestionsModel){
    try{
        await meetingService.addQuestion(question)
        notify.successMsg("Your message has been sent successfully!")
       reset()
    }
    catch(err:any){
        notify.errorMsg(err.message)
    }
}



    return (
        <div className="MainPage">
			<div className="main">
            <h1>THE WORKSPACE EXPERIENCE PLATFORM</h1>
            <img  className="img-fluid" src={workspace} alt="room" style={{height:"400px",width:"600px", borderRadius:"26px"}}/>
            </div>

            <div className="sendMessage infoContact">
        <h2 >Any Questions ?</h2>
       <form className="form-contact" onSubmit={handleSubmit(send)}>
   
  
    <input type="text" placeholder="Your email" className="input-contact"{...register("email")}/>
    <textarea placeholder="Your message" {...register("question")}></textarea>
     
    <button>Submit</button>
</form>
        </div>  

        </div>
    );
}

export default MainPage;
