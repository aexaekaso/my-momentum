const loginPage = document.querySelector("#login-page");
const mainPage = document.querySelector("#main-page");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const lockBtn = document.querySelector("#logout-button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintLoginPage() {
  loginPage.classList.remove(HIDDEN_CLASSNAME);
  mainPage.classList.add(HIDDEN_CLASSNAME);
}

function paintMainPage() {
  loginPage.classList.add(HIDDEN_CLASSNAME);
  mainPage.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreeting(userName) {
  const greeting = document.querySelector("#greeting");
  greeting.innerText = `Hello, ${userName}!`;
}

function handleUnlock(event) {
  event.preventDefault();
  paintMainPage();
  const userName = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName); 
}

function handleLock(event) {
  event.preventDefault();
  paintLoginPage();
  localStorage.removeItem(USERNAME_KEY);
}

loginForm.addEventListener("submit", handleUnlock);
lockBtn.addEventListener("click", handleLock);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {  //로그인 전
  paintLoginPage();
} else {
  paintMainPage();
  paintGreeting(savedUserName);
}