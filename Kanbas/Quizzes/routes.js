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

    app.post("/api/quizzes", async (req, res) => {
        const quiz = await quizzesDao.createQuiz(req.body);
        res.json(quiz);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.status(204).send();
    });

    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.status(204).send();
    });
}