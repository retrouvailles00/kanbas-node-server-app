import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", (req, res) => {
        const enrollment = req.body;
        const newEnrollment = enrollmentsDao.createEnrollment(enrollment);
        res.send(newEnrollment);
    });
    app.delete("/api/enrollments/:courseId/:userId", (req, res) => {
        const { courseId, userId } = req.params;
        enrollmentsDao.deleteEnrollment(courseId, userId);
        res.sendStatus(204);
    });
}