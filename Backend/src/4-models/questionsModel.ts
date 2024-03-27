class QuestionsModel{
    public questionID: number
    public email: string
    public question: string


    public constructor(question:QuestionsModel){
        this.questionID= question.questionID
        this.email= question.email
        this.question= question.question
    }
}

export default QuestionsModel