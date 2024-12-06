import db from "./database";
import {
  ref,
  set,
  get,
  child,
  update,
  remove,
  query,
  orderByChild,
  startAt,
  endAt,
  limitToFirst,
  equalTo,
} from "firebase/database";

// CREATE: Function to add a new teacher
/* 
export async function addTeacher(teacherId, teacherData) {
  const teacherRef = ref(db, `teachers/${teacherId}`);
  try {
    await set(teacherRef, teacherData);
    console.log("Teacher added successfully");
  } catch (error) {
    console.error("Error adding teacher: ", error);
  }
} */

// Fetch teachers with real-time filtering and pagination
export async function getTeachers({
  limit = 4,
  offset = 0,
  languages = null,
  price_per_hour_min = 0,
  price_per_hour_max = Infinity,
  rating_min = 0,
} = {}) {
  const dbRef = ref(db, "teachers");

  try {
    // Base query to fetch teachers ordered by price per hour
    let teacherQuery = query(dbRef);

    // Apply price range filtering (start at minimum price, end at maximum)
    if (price_per_hour_min || price_per_hour_max !== Infinity) {
      teacherQuery = query(
        dbRef,
        orderByChild("price_per_hour"),
        startAt(price_per_hour_min),
        endAt(price_per_hour_max)
      );
    }

    // Apply rating filtering (teachers with rating >= rating_min)
    if (rating_min > 0) {
      teacherQuery = query(
        teacherQuery,
        orderByChild("rating"),
        startAt(rating_min)
      );
    }

    // Filter by languages (if provided)
    if (languages) {
      teacherQuery = query(
        teacherQuery,
        orderByChild("languages"),
        equalTo(languages)
      );
    }

    // Apply pagination (limit the number of results and skip offset)
    teacherQuery = query(teacherQuery, limitToFirst(limit));

    // Get the snapshot and process it
    const snapshot = await get(teacherQuery);
    if (snapshot.exists()) {
      const teachers = snapshot.val();
      return Object.values(teachers).slice(offset, offset + limit); // Adjust pagination with offset
    } else {
      throw new Error("No data available");
    }
  } catch (error) {
    throw new Error("Failed to fetch data: " + error.message);
  }
}
export async function getTeacherById(idTeacher) {
  const dbRef = ref(db, `teachers/${idTeacher}`);
  try {
    let teacherQuery = query(dbRef);
    const snapshot = await get(teacherQuery);
    if (snapshot.exists()) {
      const teacher = snapshot.val();

      return teacher;
    } else {
      throw new Error("No data available");
    }
  } catch (error) {
    throw new Error("Failed to fetch data: " + error.message);
  }
}
export async function getTeachersById(arrayIdTeachers) {
  const promises = arrayIdTeachers.map((idTeacher) => {
    return getTeacherById(idTeacher);
  });

  return await Promise.all(promises);
}

// Example usage:

// Add a new teacher
// addTeacher('teacher1', { name: 'John Doe', subject: 'Math' });

// Get all teachers
// getTeachers().then(teachers => console.log(teachers));

// Update a teacher's data
// updateTeacher('teacher1', { name: 'Jane Smith' });

// Delete a teacher
// deleteTeacher('teacher1');
