const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = '#e04f4f';
});

btn.addEventListener('mouseout', () => {
  btn.style.backgroundColor = '#ff6b6b';
});
