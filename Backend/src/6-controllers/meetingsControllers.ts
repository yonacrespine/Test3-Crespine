import express, { NextFunction, Request, Response } from "express"
import meetingsLogic from "../5-logics/meetingsLogic"
import MeetingsModel from "../4-models/meetingsModel"
import QuestionsModel from "../4-models/questionsModel"


const router= express.Router()

router.get("/teams", async(request:Request, response:Response, next:NextFunction)=>{
    try{
        const teams=  await meetingsLogic.getAllTeam()

        response.json(teams)
    }
    catch(err:any){
        next(err)
    }

})

router.get("/meetings/:teamID", async(request:Request, response:Response, next:NextFunction)=>{
    try{
        const teamID= +request.params.teamID

        const meetings= await meetingsLogic.getMeetingsByTeam(teamID)

        response.json(meetings)
    }
    catch(err:any){
        next(err)
    }
})

router.post("/meetings",async(request:Request, response:Response, next:NextFunction)=>{
    try{
        const meeting= new MeetingsModel(request.body)
        const addedMeeting= await meetingsLogic.addMeeting(meeting)
        response.status(201).json(addedMeeting)
    }
    catch(err:any){
        next(err)
    }
})

router.get("/meetings_by_team_and_time/:teamID/:startime/:endtime", async(request:Request, response:Response, next:NextFunction)=>{

    try{
        const startime= request.params.startime
        const endtime= request.params.endtime
        const teamID= +request.params.teamID
    
        const meetings= await meetingsLogic.getMeetingsByTeamAndTime(teamID,startime,endtime)
       response.json(meetings)
    }
    catch(err:any){
        next(err)
    }
 
})

router.post("/questions",async(request:Request, response:Response, next:NextFunction)=>{
    try{
        const question= new QuestionsModel(request.body)
        const addedQuestion= await meetingsLogic.addQuestion(question)
        response.status(201).json(addedQuestion)
        
    }
    catch(err:any){
        next(err)
    }
})


export default router