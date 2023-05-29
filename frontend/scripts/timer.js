const updatedTimeElem = document.querySelector("#updatedTime");

const pad = (str) => String("00" + str).slice(-2);

updatedTimeElem.textContent = `${pad(new Date().getHours())}:${pad(
  new Date().getMinutes()
)}`;

setInterval(() => {
  const time = `${pad(new Date().getHours())}:${pad(new Date().getMinutes())}`;
  updatedTimeElem.textContent = `${time}`;
}, 1000);
