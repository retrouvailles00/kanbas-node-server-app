import model from "./model.js";
export const createResponse = (response) => {
    delete response._id;
    return model.create(response);
}

export const findResponseById = (responseId) => {
    return model.find({ _id: responseId });
}

export const checkifUserTakenQuiz = (uid, qid) => {
    return model.findOne({ user: uid, quiz: qid });
}
