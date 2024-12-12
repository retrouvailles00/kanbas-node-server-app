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

export const createQuiz = (quiz) => {
    delete quiz._id;
    return model.create(quiz);
}

export const updateQuiz = (quizId, quizUpdates) => {
    return model.updateOne({ _id: quizId }, quizUpdates);
}

export const deleteQuiz = (quizId) => {
    return model.deleteOne({ _id: quizId });
}