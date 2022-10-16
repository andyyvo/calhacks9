import { getDatabase, get, ref, onValue, onChildAdded } from "firebase/database";
import { db } from "./firebase";
// import { getDatabase, onValue, ref } from "firebase/database";
import { getDate } from "./onboardSubmit";

// https://console.firebase.google.com/project/moodz-3f930/database/moodz-3f930-default-rtdb/data

export const readDB = () => {
  const uniLevel: string = getDate() + '/berkeley';
  get(ref(db, uniLevel)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      console.log(typeof(snapshot.val()));
    } else {
      console.log("no data available");
    }
  }).catch((error) => {
    console.log(error);
  });
}

// const newDB = getDatabase();
//   const uniLevel = getDate() + '/berkeley';
//   const getRef = ref(newDB, uniLevel);
//   onValue(getRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   });