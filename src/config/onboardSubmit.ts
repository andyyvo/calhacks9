import { ref, set } from "firebase/database";
import { db } from "./firebase";

const getDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yr = today.getFullYear();

  return mm + '-' + dd + '-' + yr;
}

export const writeMoodData = (userID: string, dept: string, mood: string) => {
  const date: string = getDate() + '/' + userID;
  set(ref(db, date), {
    dept: dept,
    mood: mood
  });
}