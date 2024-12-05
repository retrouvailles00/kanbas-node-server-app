import model from "./model.js";
export function findAllCourses() {
    return model.find();
}

export function findCoursesForEnrolledUser(userId) {
    // const { courses, enrollments } = Database;
    // const enrolledCourses = courses.filter((course) =>
    //     enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    // return enrolledCourses;
}

export function findUnenrolledCourses(userId) {
    // const { courses } = Database;
    // const enrolledCourses = findCoursesForEnrolledUser(userId);
    // const unenrolledCourses = courses.filter(c =>
    //     !enrolledCourses.some(enrolledCourse => enrolledCourse._id === c._id)
    // );
    // return unenrolledCourses;
}

export function createCourse(course) {
    delete course._id;
    return model.create(course);
}

export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });

}

export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export function findCourse(courseId) {
    // return Database.courses.filter((c) => c._id == courseId);
}