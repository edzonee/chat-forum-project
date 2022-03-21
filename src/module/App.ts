import { db } from "./firebaseApp";
import { ref, update, remove } from "firebase/database";

export class App {
  constructor(public readonly userId: string, public readonly userMsg: string){

  }
  private showUserInfo():void{
      console.log(this.userId)
  }
}
