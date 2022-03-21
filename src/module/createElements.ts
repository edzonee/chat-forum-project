export class CreateElements {
  public createDiv: HTMLDivElement;
  constructor(public div: void) {
    this.div = div;
  }
  makeElements(): void {
    this.createDiv = document.createElement("div");
    this.createDiv.setAttribute("id", "main");
    document.body.append(this.createDiv);

    const h1 = document.createElement("h1");
    this.createDiv.appendChild(h1);
    h1.innerText = "Please write your name </>";

    document.querySelector("main");
    const form = document.createElement("form");
    form.setAttribute("id", "name");
    this.createDiv.appendChild(form);

    document.querySelector("form");
    const input = document.createElement("input");
    form.appendChild(input).placeholder = "Enter you name";

    document.querySelector("main");
    const btn = document.createElement("button");
    btn.setAttribute("id", "submit");
    form.appendChild(btn);
    btn.innerText = "Sumbit";

    const secondDiv = document.createElement("div");
    secondDiv.setAttribute("id", "messsageForm");
    this.createDiv.appendChild(secondDiv);

    document.querySelector("messageForm");
    const messageInput = document.createElement("textarea");
    secondDiv.appendChild(messageInput).placeholder = "Write your message";
    messageInput.style.height = "250px";
    messageInput.style.width = "500px";
  }
}
