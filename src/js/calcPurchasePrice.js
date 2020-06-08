const calcPurchasePrice = () => {
  const purchasePrice = document.querySelector('.main__cost-thing');
  const downPayment = document.querySelector('.main__contribution');
  const creditAmount = document.querySelector('.main__sum-credit');
  const union = document.querySelector('select[name=contribution-union]');
  const rangeInput = document.querySelector('.main__range');
  console.log(union.value)
  
  
  purchasePrice.addEventListener('input', () => {
    if(union.value == 'руб.') {
      creditAmount.value = +purchasePrice.value - downPayment.value;
      rangeInput.value = +purchasePrice.value - downPayment.value;
    } else {
      creditAmount.value = +purchasePrice.value * ( +downPayment.value / 100 );
      rangeInput.value = +purchasePrice.value * ( +downPayment.value / 100 );
    }    
  })

  downPayment.addEventListener('input', () => {
    if(union.value == 'руб.') {
      creditAmount.value = +purchasePrice.value - downPayment.value;
      rangeInput.value = +purchasePrice.value - downPayment.value;
    } else {
      creditAmount.value = +purchasePrice.value * ( +downPayment.value / 100 );
      rangeInput.value = +purchasePrice.value * ( +downPayment.value / 100 );
    }
  })

  union.addEventListener('change', () => {
    if(union.value == 'руб.') {
      creditAmount.value = +purchasePrice.value - downPayment.value;
      rangeInput.value = +purchasePrice.value - downPayment.value;
    } else {
      creditAmount.value = +purchasePrice.value * ( +downPayment.value / 100 );
      rangeInput.value = +purchasePrice.value * ( +downPayment.value / 100 );
    }
  })

}

export default calcPurchasePrice;