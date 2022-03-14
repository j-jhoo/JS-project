// let age = prompt("당신의 나이는??");

// if (age < 26) {
//   document.write("당신은 20대 초반입니까?");
// } else {
//   document.write("당신은 20대 중후반입니다. ");
// }

// //p.46
// let num1 = 10;
// let num2 = 5;

// // num1 += num2;
// // document.write(num1); // num1 = num1 + num2

// num1 -= num2;
// document.write(num2); // num1 = num1 - num2

// p.55
// let userHeight = 180;
// let userWeight = 74;

// const result = (userHeight - 100) * 0.9;
// document.write(result);

// // p.57
// var name = prompt("이름은?", "");
// let height = prompt("키는?", "0");
// let weight = prompt("몸무게는?", "0");

// let result = (height - 100) * 0.9;
// let last = weight >= result - 5 && weight <= result + 5;
// result = result ? "적정 체중입니다." : "적정 체중아님";
// document.write(name + "님은" + result);

// mission 1-1
// let bus = 3000;
// let food = 6000;
// let drink = 3000;

// let result = bus + food + drink;
// let lastResult = 10000 < result ? result - 10000 + "원 초과" : "돈 관리 잘함";
// document.write("진영님은" + lastResult);

// // mission 1-2
// const firth = 1200;
// const second = 1300;
// const third = 1000;
// let avgSales = (firth + second + third) / 3;
// const fourth = prompt("4분기 판매량은??", "0");
// let msg1 = "판매량이 평균 이상입니다.";
// let msg2 = "판매량이 평균 미달입니다.";

// let result = fourth >= avgSales ? msg1 : msg2;
// document.write(result);

// // 제어문 62p
// const amount = prompt("하루 걸음수는??", "0");

// if (amount >= 10000) {
//   document.write("출력");
// } else {
//   document.write("-----end-----");
// }

// p.63
// const amount = prompt("하루 통화량이 몇분 ?", "0");
// if (amount >= 60) {
//   document.write("통화량이 많으시네여");
// } else {
//   document.write("끝");
// }

// p.65
// const num = prompt("좋아하는 숫자 입력", "0");

// if (num % 2 == 0) {
//   document.write("짝수");
// } else {
//   document.write("홀수");
// }

// // p.67 comfirm(확인, 취소 창이 있는 창)
// const result = confirm("회원 탈퇴하실거??");
// if (result) {
//   document.write("탈퇴 처리 되심.");
// } else {
//   document.write("탈퇴 실패");
// }

// // p. 69 else if
// const mon = prompt("현재는 몇 월입니까?", "0");

// if (mon >= 9 && mon <= 11) {
//   document.write("독서의 계절");
// } else if (mon >= 6 && mon <= 8) {
//   document.write("여행가기 좋은 여름");
// } else if (mon >= 3 && mon <= 5) {
//   document.write("햇살 가득 봄");
// } else {
//   document.write("스키의 계절 겨울");
// }

// p.70
// const id = "1234";
// const pw = "112233";

// let userId = prompt("id는?", "0");
// let userPw = prompt("pw는?", "0");

// if (id === userId) {
//   if (pw === userPw) {
//     document.write("userId님 반갑습니다.");
//   } else {
//     alert("비밀번호가 틀렸습니다.");
//     location.reload();
//   }
// } else if (id !== userId) {
//   alert("아이디가 일치하지 않습니다.");
// }

// p.73 switch문
// const site = prompt(
//   "네이버, 다음, 구글 중 즐겨 사용한ㄴ 포털 검색 사이트는?",
//   "0"
// );

// let url;

// switch (site) {
//   case "google":
//     url = "www.google.com";
//     break;
//   case "naver":
//     url = "www.naver.com";
//     break;
//   case "daum":
//     url = "www.daum.net";
//     break;
//   default:
//     alert("보기 중에 없는 사이트이니다.");
// }
// if (url) location.href = "http://" + url;
// // location.href = 원하는 url로 넘어가게 해줌.

// // p.75 반복문 (while)

// const i = 1;
// while (i <= 30) {
//   if (i % 2 == 0 && i % 6 == 0) {
//     document.write(i);
//   }
//   i++;
// }

// p.79 for문
// for (let i = 1; i < 100; i++) {
//   if (i % 5 == 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 7 == 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   }
// }

// p. 81 continue
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) continue;
//   document.write(i, "<br />");
// }
// document.write("end");
