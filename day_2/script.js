let tabColor = [];
let counter = 0;
(async () => {
  await fetch('https://www.colr.org/json/colors/random/100')
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < 100; i++) {
        tabColor.push(`#${data.colors[i].hex}`);
      }
    });
})();

changeColor = () => {
  document.querySelector('.body').style.backgroundColor = tabColor[counter];
  counter = (counter + 1) % 100;
};

setInterval(changeColor, 1000);
