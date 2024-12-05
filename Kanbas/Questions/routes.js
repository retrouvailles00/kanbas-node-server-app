import * as questionsDao from "./dao.js";
import * as quizzesDao from "../Quizzes/dao.js";
export default function QuestionRoutes(app) {
    const findQuestionsById = async (req, res) => {
        const question = await questionsDao.findQuestionsById(req.params.questionId);
        res.json(question);
    };
    app.get("/api/quizzes/:quizId/questions/:questionId", findQuestionsById);

    const createQuestion = async (req, res) => {
        const newQuestion = await questionsDao.createQuestion(req.body);
        const { quizId } = req.params;
        const quiz = quizzesDao.addQuestionForQuiz(quizId, newQuestion._id);
        if (!quiz) {
            return res.status(404).json({ error: "Quiz not found" });
        }
        res.json(newQuestion);
    }
    app.post("/api/quizzes/:quizId/questions", createQuestion);
}