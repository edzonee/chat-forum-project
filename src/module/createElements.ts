export class CreateElements {
  public createDiv: HTMLDivElement;
  constructor(public div: void) {
    this.div = div;
  }
  public makeElements(): void {
    this.createDiv = document.createElement("div");
    this.createDiv.setAttribute("id", "main");
    document.body.append(this.createDiv);
    this.createDiv.style.justifyContent = "center";
    this.createDiv.style.alignItems = "center";

    const h1: HTMLHeadElement = document.createElement("h1");
    this.createDiv.appendChild(h1);
    h1.setAttribute("id", "title");
    h1.innerText = "Welcome. Write your name </>";

    document.querySelector("main");
    const form: HTMLFormElement = document.createElement("form");
    form.setAttribute("id", "nameInfo");
    this.createDiv.appendChild(form);

    document.querySelector("form");
    const input: HTMLInputElement = document.createElement("input");
    input.setAttribute("id", "userNameInput");
    form.appendChild(input).placeholder = "Enter you name";

    document.querySelector("main");
    const nameBtn: HTMLButtonElement = document.createElement("button");
    nameBtn.setAttribute("id", "submitName");
    form.appendChild(nameBtn);
    nameBtn.innerText = "Enter name";

    const secondDiv: HTMLDivElement = document.createElement("div");
    secondDiv.setAttribute("id", "messageForm");
    this.createDiv.appendChild(secondDiv);
    secondDiv.style.display = "none";

    document.querySelector("messageForm");
    const messageInput: HTMLTextAreaElement =
      document.createElement("textarea");
    secondDiv.appendChild(messageInput).placeholder = "Write your message";
    messageInput.setAttribute("id", "userMessageInput");
    messageInput.style.height = "150px";
    messageInput.style.width = "500px";

    const databaseInfo: HTMLDivElement = document.createElement("div");
    databaseInfo.setAttribute("id", "databaseInfo");
    this.createDiv.append(databaseInfo);
    databaseInfo.style.textAlign = "center";
    databaseInfo.style.display = "none";

    const databaseNames: HTMLParagraphElement = document.createElement("p");
    databaseNames.setAttribute("id", "database-comments");
    databaseNames.setAttribute("value", "database-comments");
    databaseInfo.appendChild(databaseNames);

    databaseInfo.style.border = "1px solid rgb(153, 255, 0)";
    databaseInfo.style.margin = "2rem";
    databaseInfo.style.height = "500px";
    databaseInfo.style.width = "750px";
    databaseInfo.style.textAlign = "center";
    databaseInfo.style.overflowY = "scroll";
  }

  public changeElements(): void {
    const nameBtn: HTMLElement = document.getElementById("submitName");
    nameBtn.innerText = "Submit";

    const userInput: HTMLInputElement =
      document.querySelector("#userNameInput");
    const changeTitle: HTMLElement = document.getElementById("title");
    changeTitle.innerText = `Welcome ${userInput.value}. Write your message below...`;

    const form: HTMLElement = document.getElementById("messageForm");
    form.style.display = "block";

    const databaseInfo: HTMLElement = document.getElementById("databaseInfo");
    databaseInfo.style.display = "block";
  }
  public plsWriteName(): void {
    const writeName: HTMLElement = document.getElementById("title");
    writeName.innerText = "Please write your name...";
  }
}
