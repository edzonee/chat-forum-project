import { CreateElements } from "./module/createElements";
import { App } from "./module/App";
import { ref, update, remove, onValue, push } from "firebase/database";
import { db } from "./module/firebaseApp";

new CreateElements().makeElements();

const dbRef = ref(db, "/userInfo");

let names: App[] = [];

onValue(dbRef, (snapshot) => {
  const newUserInfo = snapshot.val();
  console.log(snapshot);
  console.log(newUserInfo);

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

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  const userInput: HTMLInputElement = document.querySelector("#userNameInput");
  const messageInput: HTMLInputElement =
    document.querySelector("#userMessageInput");
  if (userInput.value == "" || messageInput.value == "")
    console.log("Fill in all boxes!");
  else {
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

    /* om namnet inte != name */
    let removeBtn: HTMLButtonElement = document.createElement("button");
    removeBtn.value = userInput.value;
    if (userInput.value != userInput.value) {
      removeBtn.style.display = "none";
    }

    const newKey: string = push(dbRef).key;
    const newUser = {};
    newUser[newKey] = addUser;

    update(dbRef, newUser);
  }
  if (names.length > 24) {
    console.log("Now its more than 25");
    console.log("number of posts", names.length);
    console.log("first post", names[0]);
    const removeFirstEl = ref(db, "/userInfo/" + names[0].commentId);
    remove(removeFirstEl);
  }

  /*  if (userInput != null) {
    const form: HTMLInputElement = document.querySelector("#messageForm");
    const info: HTMLInputElement = document.querySelector("#databaseInfo");

    form.style.display = 'block'
    info.style.display = 'block'
  } */
});
