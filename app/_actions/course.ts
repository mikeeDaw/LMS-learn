"use server";

import { connectToDb } from "../_lib/mongoose";
import {
  enrollStudent,
  findCourses,
  removeStudent,
} from "../_model/courseModel";
import { addCourse, findUserbyId, removeCourse } from "../_model/userModel";

export const enrollToCourse = async (code: string, uid: string) => {
  await connectToDb();

  const user = await findUserbyId(uid);

  //   return true;

  try {
    const resp = await enrollStudent(code, uid).then((res) =>
      JSON.parse(JSON.stringify(res))
    );
    const studRes = await addCourse(uid, code);
    console.log("Lusot");
    console.log(studRes);
    return { error: false, msg: "User Was Enrolled Successfully!", data: resp };
  } catch (error) {
    console.log(error);
    return { error: true, msg: "Something Happened :(" };
  }
};

export const getCoursesOfUser = async (uid: string) => {
  await connectToDb();

  const user = await findUserbyId(uid);

  if (user.courses && user.courses.length !== 0) {
    const records = await findCourses(user.courses);
    return records;
  } else {
    console.log("walang enrolled");
    return [];
  }
};

export const unenrollStudent = async (code: string, uid: string) => {
  await connectToDb();

  try {
    const res = await removeStudent(uid, code);
    const rem = await removeCourse(code, uid);
    return { error: false, msg: "Unenrollment Successful" };
  } catch (error) {
    return { error: true, msg: "Error in Unenrolling..." };
  }
};
