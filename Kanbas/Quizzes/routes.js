import * as quizzesDao from "./dao.js";
export default function QuizRoutes(app) {
    const findQuizById = async (req, res) => {
        const quiz = await quizzesDao.findQuizById(req.params.quizId);
        res.json(quiz);
    };
    app.get("/api/quizzes/:quizId", findQuizById);

    const findQuestionsForQuiz = async (req, res) => {
        const quiz = await quizzesDao.findQuizById(req.params.quizId);
        const questions = quiz.questions;
        res.json(questions);
    };
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
}