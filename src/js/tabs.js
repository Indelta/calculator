import calcPurchasePrice from './calcPurchasePrice';

const activeManager = (elements, hidden) => {
  const tabs = document.querySelectorAll(elements);

  tabs.forEach((el) => {
    el.addEventListener( 'click', () => {
      removeActiveRank ()
      tabs.forEach((element) => {
        element.classList.remove('active');              
      })
      el.classList.add('active');  

      if(document.querySelector('.header__cost').classList.contains('active')){
        document.querySelector(hidden).classList.add('show');
        document.querySelector('.main__sum-credit').disabled = true;
        document.querySelector('.main__range').disabled = true;
        calcPurchasePrice();
      } else {
        document.querySelector(hidden).classList.remove('show');
        document.querySelector('.main__sum-credit').disabled = false;
        document.querySelector('.main__range').disabled = false;
      }    
    })
  }) 
}

function removeActiveRank () {
  const mainRank = document.querySelector('.main-rank');
  const main = document.querySelector('.main');
  const img = document.querySelector('.header__img');

  mainRank.classList.remove('active');
  main.classList.remove('active');
  img.classList.remove('active');
}

export default activeManager;

