class TeamsModel{
    public teamID: number
    public teamName: string

    public constructor(team:TeamsModel){
        this.teamID= team.teamID
        this.teamName= team.teamName
    }
}

export default TeamsModel