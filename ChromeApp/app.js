// html의 요소들은 javascript를 통해서 변경하고 읽을 수 있다.
// const title = document.getElementsByClassName("title");
const title = document.querySelector(".title:first-child h1");
// querySelector를 사용하여서 클래스, 아이디를 지정할 수 있고 그의 자식까지 선택할 수 있다.

title.innerText = "Got you!";
