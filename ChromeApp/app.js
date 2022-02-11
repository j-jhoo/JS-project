// html의 요소들은 javascript를 통해서 변경하고 읽을 수 있다.
const title = document.getElementsByClassName("title");

title.innerText = "Got you!";

console.log("title".id);
console.log("title".class);
