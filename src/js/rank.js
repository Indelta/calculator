export default function tabRank () {
  const mainRank = document.querySelector('.main-rank');
  const main = document.querySelector('.main');
  const img = document.querySelector('.header__img');

  mainRank.classList.toggle('active');
  main.classList.toggle('active');
  img.classList.toggle('active');
}