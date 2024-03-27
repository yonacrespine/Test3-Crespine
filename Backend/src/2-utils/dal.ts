import mysql from "mysql"
import { myAppConfig } from "./app-config"


// create a pool of connection to mysql
const connection= mysql.createPool({
    // tous les chams du config
    host: myAppConfig.host,
    user: myAppConfig.user,
    password: myAppConfig.password,
    database: myAppConfig.database


})

function execute(sql: string, values?:any[]):Promise<any>{            // par exemple sql cest la demande SELECT * products
    return new Promise<any>((resolve, reject)=>{
        // query prend la demande de mysql et lexecute
        connection.query(sql,values, (err, result)=>{     // query return un model

            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export default {
    execute
}