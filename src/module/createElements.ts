export class CreateElements {
  public createDiv: HTMLDivElement;
  constructor(public div: void) {
    this.div = div;
  }
  makeElements(): void {
    this.createDiv = document.createElement("div");
    this.createDiv.setAttribute("id", "main");
    document.body.append(this.createDiv);

    const h1: HTMLHeadElement = document.createElement("h1");
    this.createDiv.appendChild(h1);
    h1.innerText = "Please write your name </>";

    document.querySelector("main");
    const form: HTMLFormElement = document.createElement("form");
    form.setAttribute("id", "nameInfo");
    this.createDiv.appendChild(form);

    document.querySelector("form");
    const input: HTMLInputElement = document.createElement("input");
    input.setAttribute("id", "userNameInput");
    form.appendChild(input).placeholder = "Enter you name";

    document.querySelector("main");
    const btn: HTMLButtonElement = document.createElement("button");
    btn.setAttribute("id", "submit");
    form.appendChild(btn);
    btn.innerText = "Sumbit";


    const secondDiv: HTMLDivElement = document.createElement("div");
    secondDiv.setAttribute("id", "messsageForm");
    this.createDiv.appendChild(secondDiv);
/*     secondDiv.style.display = 'none' */

    document.querySelector("messageForm");
    const messageInput: HTMLTextAreaElement =
      document.createElement("textarea");
    secondDiv.appendChild(messageInput).placeholder = "Write your message";
    messageInput.setAttribute("id", "userMessageInput");
    messageInput.style.height = "250px";
    messageInput.style.width = "500px";
/*     messageInput.style.display = 'none' */

    const databaseInfo: HTMLDivElement = document.createElement("div");
    databaseInfo.setAttribute("id", "databaseInfo");
    document.body.append(databaseInfo);
    databaseInfo.style.textAlign = "center";
/*     databaseInfo.style.display = 'none' */

    const databaseNames: HTMLParagraphElement = document.createElement("p");
    databaseNames.setAttribute("id", "database-comments");
    databaseInfo.appendChild(databaseNames);
    databaseInfo.style.border = '2px solid rgb(153, 255, 0)'
    databaseInfo.style.margin = '2rem'

    /*   const databaseMessages: HTMLParagraphElement = document.createElement("p");
    databaseMessages.setAttribute("id", "user-msg");
    databaseInfo.appendChild(databaseMessages); */
  }
}
