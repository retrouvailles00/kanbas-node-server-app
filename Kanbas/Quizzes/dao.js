import res from "express/lib/response.js";
import model from "./model.js";
import mongoose from "mongoose";
export function findQuizzesForCourse(courseId) {
    return model.find({ courseObjectId: courseId });
}

export const findQuizById = (quizId) => model.findById(quizId);
export const findQuestionsForQuiz = (quizId) => model.findById(quizId).populate('questions');
export const addQuestionForQuiz = async (quizId, questionId) => {
    const result = await model.updateOne(
        { _id: quizId }, 
        { $push: { questions: questionId } }
    );
    return result;
}