class MeetingsModel{
    public meetingID: number
    public teamID: number
    public startMeetingTime: Date
    public endMeetingTime: Date
    public description: string
    public room: string

    public constructor(meeting:MeetingsModel){
        this.meetingID= meeting.meetingID
        this.teamID= meeting.teamID
        this.startMeetingTime= meeting.startMeetingTime
        this.endMeetingTime= meeting.endMeetingTime
        this.description= meeting.description
        this.room= meeting.room
    }
}

export default MeetingsModel