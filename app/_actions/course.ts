"use server";

import { connectToDb } from "../_lib/mongoose";
import { enrollStudent, findCourses } from "../_model/courseModel";
import { addCourse, findUserbyId } from "../_model/userModel";

export const enrollToCourse = async (code: string, uid: string) => {
  await connectToDb();

  const user = await findUserbyId(uid);
  console.log("XXXXXXXXXXXXXXXXXXXXXXX", user);

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

  if (user.courses.length !== 0) {
    const records = await findCourses(user.courses);
    return records;
  } else {
    console.log("walang enrolled");
    return [];
  }
};
