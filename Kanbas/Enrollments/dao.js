import Database from "../Database/index.js";
import EnrollmentRoutes from "./routes.js";

export function createEnrollment(enrollment) {
    Database.enrollments = [...Database.enrollments, enrollment];
    return enrollment;
}

export function deleteEnrollment(courseId, userId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((e) => !(e.course === courseId && e.user === userId));
}
export function getCourseWithEnrollment(courseId) {
    return Database.courses.filter((c) => c._id == courseId);
}