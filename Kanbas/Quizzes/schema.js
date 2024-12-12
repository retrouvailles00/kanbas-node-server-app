import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quizTitle: String,
        ifPublished: Boolean,
        courseObjectId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        quizType: String,
        points: Number,
        assignmentGroup: String,
        shuffleAnswers: Boolean,
        timeLimit: String,
        multipleAttempts: Boolean,
        howManyAttempts: Number,
        showCorrectAnswers: String,
        accessCode: String,
        oneQuestionAtATime: Boolean,
        webcamRequired: Boolean,
        lockQuestionsAfterAnswering: Boolean,
        dueDate: Date,
        availableDate: Date,
        untilDate: Date,
        questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuestionModel' }],
    },
    { collection: "quizzes" }
);
export default schema;