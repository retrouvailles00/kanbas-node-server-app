import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        type: String,
        title: String,
        points: Number,
        question: String,

        choices: [{
            text: String,
            isCorrect: Boolean
        }],
        correctAnswer: Boolean,
    }, 
    { collection: "questions" });
export default schema;
