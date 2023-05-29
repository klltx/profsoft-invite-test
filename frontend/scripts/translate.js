const aboutMeTranslate = {
  rus: {
    aboutMeHeader: "Обо мне",
    aboutMeText:
      "Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.",
    aboutMeText2: `Я учусь на курсах "Веб и мобильный дизайн интерфейсы" в IT-Академии.`,
    aboutMeText3: `Готов реализовать отличные проекты с замечательными людьми.`,
    updatedTimeText: `Обновлено: `,
  },
  en: {
    aboutMeHeader: "About me",
    aboutMeText:
      "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
    aboutMeText2: `I'm studying at courses "Web and mobile design interfaces" in IT-Academy.`,
    aboutMeText3: `Ready to implement excellent projects with wonderful people.`,
    updatedTimeText: `Updated: `,
  },
};

const aboutMeHeader = document.querySelector("#aboutMeHeader");
const aboutMeText = document.querySelector("#aboutMeText");
const aboutMeText2 = document.querySelector("#aboutMeText2");
const aboutMeText3 = document.querySelector("#aboutMeText3");
const updatedTimeText = document.querySelector("#updatedTimeText");
let isRus = false;

const getTranslatedText = (key) => {
  return isRus ? aboutMeTranslate.rus[key] : aboutMeTranslate.en[key];
};

aboutMeHeader.addEventListener("click", () => {
  isRus = !isRus;
  aboutMeHeader.textContent = getTranslatedText("aboutMeHeader");
  aboutMeText.textContent = getTranslatedText("aboutMeText");
  aboutMeText2.textContent = getTranslatedText("aboutMeText2");
  aboutMeText3.textContent = getTranslatedText("aboutMeText3");
  updatedTimeText.textContent = getTranslatedText("updatedTimeText");
});
