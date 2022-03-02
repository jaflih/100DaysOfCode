const parent = document.querySelector('.image');
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    const child = document.createElement('div');
    child.classList.add('puzzle');
    child.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
    parent.appendChild(child);
  }
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

delay(2000).then(() => {
  parent.classList.add('hidden');
  parent.classList.remove('image');
  parent.classList.remove('hidden');
  parent.childNodes.forEach((e) => e.classList.add('show'));
});

