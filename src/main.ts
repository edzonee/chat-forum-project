import { CreateElements } from "./module/createElements";
import { App } from "./module/App";
import { ref, update, remove, onValue, push } from "firebase/database";
import { db } from "./module/firebaseApp";

new CreateElements().makeElements();

const dbRef = ref(db, "/userInfo");

let names: App[] = [];

onValue(dbRef, (snapshot) => {
  const newUserInfo = snapshot.val();

  document.querySelector("#database-comments").innerHTML = "";
  names = [];

  for (const key in newUserInfo) {
    names.push(
      new App(
        key,
        newUserInfo[key].userId,
        newUserInfo[key].userMsg,
        newUserInfo[key].timeStamp
      )
    );
  }
});

document.querySelector("#nameInfo").addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput: HTMLInputElement = document.querySelector("#userNameInput");
  const messageInput: HTMLInputElement =
    document.querySelector("#userMessageInput");
  if (userInput.value == "") {
    new CreateElements().plsWriteName();
  } else {
    new CreateElements().changeElements();
    const date = new Date();
    const addUser = {
      userId: (document.querySelector("#userNameInput") as HTMLInputElement)
        .value,
      userMsg: (document.querySelector("#userMessageInput") as HTMLInputElement)
        .value,
      timeStamp:
        date.getFullYear() +
        " " +
        (date.getMonth() + 1) +
        "/" +
        date.getUTCDate() +
        " - " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":",
    };

    if (messageInput.value != "") {
      const newKey: string = push(dbRef).key;
      const newUser = {};
      newUser[newKey] = addUser;

      update(dbRef, newUser);
    }
  }
  /* Prevents database from getting more than 25 objects */
  if (names.length > 24) {
    const removeFirstEl = ref(db, "/userInfo/" + names[0].commentId);
    remove(removeFirstEl);
  }
});
