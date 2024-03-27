import { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";





function catchAll(err:any, request:Request, response:Response, next:NextFunction){
    console.log(err)

    logger(err.message)

    response.status(err.status || 500).send(err.message)
}

export default catchAll