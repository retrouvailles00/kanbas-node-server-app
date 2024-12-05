import model from "./model.js";
export function findQuestionsById(questionId) {
    return model.find({ _id: questionId });
}
export function createQuestion(question) {
    delete question._id;
    return model.create(question);
}
