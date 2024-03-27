import { Route, Routes } from "react-router";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../../HomeArea/PageNotFound/PageNotFound";
import Meetings from "../../MeetingsArea/Meetings/Meetings";
import AddMeeting from "../../MeetingsArea/AddMeeting/AddMeeting";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>

                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/meetings" element={<Meetings/>}/>
                <Route path="/add_meeting" element={<AddMeeting/>}/>
                
                

            </Routes>
        </div>
    );
}

export default Routing;
