import * as responsesDao from "./dao.js";
export default function ResponseRoutes(app) {
    
    app.post("/api/responses", async (req, res) => {
        const examResponse = await responsesDao.createResponse(req.body);
        res.json(examResponse);
    });

    const findResponseById = async (req, res) => {
        const response = await responsesDao.findResponseById(req.params.responseId);
        res.json(response);
    };
    app.get("/api/responses/:responseId", findResponseById);

    
    const checkifUserTakenQuiz = async (req, res) => {
        const { uid, qid } = req.params;
        const response = await responsesDao.checkifUserTakenQuiz(uid, qid);
        res.json(response);
    }
    app.get("/api/responses/:uid/:qid", checkifUserTakenQuiz);
}