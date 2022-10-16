import { push, ref, set } from "firebase/database";
import { db } from "./firebase";

export const getDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yr = today.getFullYear();

  return mm + '-' + dd + '-' + yr;
}

/** writing to db */
export const writeMoodData = (userID: string, dept: string, mood: string) => {
  // personal entry
  // const personalLevel: string = getDate() + '/' + userID;
  // set(ref(db, personalLevel), {
  //   dept: dept,
  //   mood: mood
  // });

  // dept entry
  const deptLevel: string = getDate() + '/' + dept;
  push(ref(db, deptLevel), {
    mood: mood
  });

  // berkeley entry
  const uniLevel: string = getDate() + '/berkeley';
  push(ref(db, uniLevel), {
    mood: mood
  });
}