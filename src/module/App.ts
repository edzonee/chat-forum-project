import { get, ref, remove, child, DataSnapshot } from "firebase/database";
import { db } from "./firebaseApp";
export class App {
  id: string;
  msg: string;
  constructor(
    public readonly commentId: string,
    public readonly userId: string,
    public readonly userMsg: string,
    public readonly timeStamp: string
  ) {
    this.printUserInfo();
  }
  public printUserInfo(): void {
    const userName: HTMLParagraphElement = document.createElement("p");
    const removeBtn: HTMLButtonElement = document.createElement("button");
    removeBtn.setAttribute("value", this.commentId);
    const userInfo: HTMLInputElement =
      document.querySelector("#database-comments");
    removeBtn.innerText = "X";
    userInfo.append(removeBtn);

    removeBtn.addEventListener("click", (e) => {
      const test: HTMLInputElement = document.querySelector("#userNameInput");

      get(child(ref(db), `userInfo/${this.commentId}`)).then(
        (snapshot: DataSnapshot): void => {
          if (snapshot.exists()) {
            if (test.value == snapshot.val().userId) {
              const taskRef = ref(db, "/userInfo/" + this.commentId);
              remove(taskRef);
            }
          }
        }
      );
    });
    userName.id = this.commentId;
    userName.innerText =
      this.timeStamp + ` User name: ${this.userId}, Message: ${this.userMsg}`;
    const userdiv: HTMLDivElement =
      document.querySelector("#database-comments");
    userdiv.appendChild(userName);
  }
  public removeMessage(): void {
    document.querySelector(`#${this.commentId}`).remove();
  }
  public removeDomElement(): void {
    document.querySelector(`#${this.id}`).remove();
  }
}
