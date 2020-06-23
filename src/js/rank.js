export default function tabRank () {
  const btnToggle = document.querySelector('.header__img');
  const mainRank = document.querySelector('.main-rank');
  const main = document.querySelector('.main');
  const img = document.querySelector('.header__img');

  btnToggle.addEventListener( 'click', () => {
    mainRank.classList.toggle('active');
    main.classList.toggle('active');
    img.classList.toggle('active');
  })
}