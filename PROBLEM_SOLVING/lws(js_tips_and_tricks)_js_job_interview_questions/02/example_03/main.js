// 3. destructuring aliases

const language = {
  name: "JavaScript",
  estd: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: creatorName } = language;
console.log(languageName, creatorName);
