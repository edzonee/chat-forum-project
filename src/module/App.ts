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
  public getUserId(): string {
    return (this.id = this.userId);
  }
  public getUserMsg(): string {
    return (this.msg = this.userMsg);
  }

  public printUserInfo(): void {
    const userName: HTMLParagraphElement = document.createElement("p");
    userName.id = this.commentId;
    userName.innerText =
      this.timeStamp + ` User name: ${this.userId}, Message: ${this.userMsg}`;
    const userdiv: HTMLDivElement =
      document.querySelector("#database-comments");
    userdiv.appendChild(userName);

    /* nst userMessage: HTMLParagraphElement = document.createElement("p");
    document.body.appendChild(userMessage);
    userMessage.innerText = "Message: "; */
  }
  public removeMessage(): void {
    document.querySelector(`#${this.commentId}`).remove();
  }
}
