import mongoose from "mongoose";
const responseSchema = new mongoose.Schema(
    {
        question: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel" },
        userResponse: String,
        isCorrect: Boolean
    },
    { _id: false }
)

const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        score: Number,
        timeTaken: Number,
        completedAt: {
            type: Date,
            default: Date.now
        },
        allowedTimes: Number,
        responses: [responseSchema]
    },
    { collection: "responses" }
)
export default schema;