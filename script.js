const wrapper = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');
let count = 0;

wrapper.addEventListener('click', (e) => {
  const children = [...wrapper.children];
  children.forEach((btn) => {
    if (btn.textContent == 'Нажата');
    btn.textContent = 'Нажми меня';
  });

  e.target.innerText = 'Нажата!';
  count++;
  counter.textContent = count;
});
