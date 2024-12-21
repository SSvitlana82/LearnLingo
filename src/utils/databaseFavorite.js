import db from "./database";
import { nanoid } from "nanoid";
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
export async function addTeacherFavorite(teacherId, userId) {
  const id = nanoid();
  const teacherRef = ref(db, `favorites/${id}`);
  console.log(teacherId);
  try {
    await set(teacherRef, { teacherId, userId, id });
    console.log("Favorites teacher added successfully");
    return { teacherId, userId, id };
  } catch (error) {
    console.error("Error adding teacher: ", error);
  }
}

// Fetch teachers with real-time filtering and pagination
export async function getTeachersFavorite(
  userId,
  { limit = 4, offset = 0 } = {}
) {
  const dbRef = ref(db, "favorites");

  try {
    // Base query to fetch teachers ordered by price per hour
    let teacherQuery = query(dbRef);

    // Filter by UserID

    teacherQuery = query(teacherQuery, orderByChild("userId"), equalTo(userId));

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

// DELETE: Function to delete a teacher
export async function deleteTeacher(favoritesId) {
  const teacherRef = ref(db, `favorites/${favoritesId}`);
  try {
    await remove(teacherRef);
    console.log("Teacher removed successfully");
  } catch (error) {
    console.error("Error deleting teacher: ", error);
  }
}
