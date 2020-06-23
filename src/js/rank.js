export default function tabRank () {
  const btnToggle = document.querySelector('.header__img');
  const mainRank = document.querySelector('.main-rank');
  const main = document.querySelector('.main');

  btnToggle.addEventListener( 'click', () => {
    mainRank.classList.toggle('active');
    main.classList.toggle('active');
  })
}