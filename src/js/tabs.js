import calcPurchasePrice from './calcPurchasePrice';

const activeManager = (elements, hidden) => {
  const tabs = document.querySelectorAll(elements);

  tabs.forEach((el) => {
    el.addEventListener( 'click', () => {
      tabs.forEach((element) => {
        element.classList.remove('active');              
      })
      el.classList.add('active');  

      if(document.querySelector('.main__cost').classList.contains('active')){
        document.querySelector(hidden).classList.add('show');
        document.querySelector('.main__sum-credit').disabled = true;
        calcPurchasePrice();
      } else {
        document.querySelector(hidden).classList.remove('show');
        document.querySelector('.main__sum-credit').disabled = false;
      }    
    })
  }) 
}

export default activeManager;