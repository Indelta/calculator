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
      } else {
        document.querySelector(hidden).classList.remove('show');
      }    
    })
  })

 
}



export default activeManager;