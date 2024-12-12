import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";

import "dotenv/config";
import session from "express-session";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import EnrollmentRoutes from './Kanbas/Enrollments/routes.js';
import QuizRoutes from './Kanbas/Quizzes/routes.js';
import QuestionRoutes from "./Kanbas/Questions/routes.js";
import ResponseRoutes from './Kanbas/Quizzes/Responses/routes.js';
import mongoose from "mongoose";
import "dotenv/config";
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://Cluster36712:dECO47zaaAjSEYMQ@cluster36712.cytqp.mongodb.net/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));


app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
ResponseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);