const btn = document.getElementsByClassName("gen")[0];
const out = document.getElementById("out");

let users = "Микита, Сергій, Дмитро, Ольга, Ганна, Юлія, Вікторія, Євгеній, Єгор, Артем, Віталій, Назар".split(", ");
let lastPicks = JSON.parse(localStorage.getItem("lastPicks")) || [];

btn.onclick = pickUser;

function genRnd(limit) {
  return Math.floor(Math.random() * limit);
}
function pickUser() {
  let selectedUser;
  do {
    selectedUser = users[genRnd(users.length)];
  } while (lastPicks.includes(selectedUser))
  out.value = selectedUser;
  lastPicks.length = 2;
  lastPicks.unshift(selectedUser);
  console.log(lastPicks);
  localStorage.setItem("lastPicks", JSON.stringify(lastPicks));
}
