import getDate from './getDate';

const calculatorCredit = () => {
  let percent = document.querySelector('.main__percent').value;
  let n = Number(document.querySelector('.main__term-credit').value);
  let sum = document.querySelector('.main__sum-credit').value;
  let commision = document.querySelector('.main__commision').value ? Number(document.querySelector('.main__commision').value) : 0;
  let dopPayment = document.querySelector('.main__dop-payment').value ? Number(document.querySelector('.main__dop-payment').value) : 0;
  let currentSum;
  let currentPercent;
  let currentDebt;

  function datePayment(j) {
    const date = getDate().date;
    date.setMonth(date.getMonth() + j);
    return date;
  }

    // Аннуитентный расчет кредита

  function findMontlyPayment(param) {
    let i = percent / 12 / 100;
    let k = (i * (1 + i)**n / ((1 + i)**n - 1));
    let montlyPayment
    if (param) {
      montlyPayment = k * sum;
    } else {
      montlyPayment = k * sum + dopPayment;
    }
    return montlyPayment;
  }

  function getPercent(j) {
    let montlyPayment = findMontlyPayment(1).toFixed(2);
    if (!currentSum) {
      currentPercent = percent / 12 / 100 * sum; 
      currentDebt = montlyPayment - currentPercent;
      currentSum = sum - currentDebt;
    } else {
      currentPercent = percent / 12 / 100 * currentSum; 
      currentDebt = montlyPayment - currentPercent;
      currentSum = currentSum - currentDebt;
    }

    return {
      currentPercent: currentPercent,
      currentDebt: currentDebt,
      currentSum: currentSum
    }
  }

  function createTableDef() {    
    for (let j = 1; j <= n; j++) {
      let tr = document.createElement('tr');
      document.querySelector('tbody').appendChild(tr); 
      for (let i = 1; i <= 7; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        if (i === 1) {
          td.innerHTML = j;
        }
        if(i === 2) {
          td.innerHTML = getDate().month[datePayment(j).getMonth()] + ' ' + datePayment(j).getFullYear();
        }  
        if (i === 3) {
          td.innerHTML = findMontlyPayment().toFixed(2);
        }
        if (i === 4) {
          td.innerHTML = sum / n;
        }
        if (i === 5) {
          td.innerHTML = data.currentPercent.toFixed(2);
        }
        if (i === 6) {
          td.innerHTML = dopPayment;
        }
        if (i === 7) {
          td.innerHTML = data.currentSum.toFixed(1);
        }
      }
    }
  }

  // Дифференцированный расчет кредита

  function createTableDef() {    
    for (let j = 1; j <= n; j++) {
      let tr = document.createElement('tr');
      document.querySelector('tbody').appendChild(tr);
      let data = getPercent(); 
      for (let i = 1; i <= 7; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        if (i === 1) {
          td.innerHTML = j;
        }
        if(i === 2) {
          td.innerHTML = getDate().month[datePayment(j).getMonth()] + ' ' + datePayment(j).getFullYear();
        }  
        if (i === 3) {
          td.innerHTML = findMontlyPayment().toFixed(2);
        }
        if (i === 4) {
          td.innerHTML = data.currentDebt.toFixed(2);
        }
        if (i === 5) {
          td.innerHTML = data.currentPercent.toFixed(2);
        }
        if (i === 6) {
          td.innerHTML = dopPayment;
        }
        if (i === 7) {
          td.innerHTML = data.currentSum.toFixed(1);
        }
      }
    }
  }

  function fillResult() {
    let totalPaymant = findMontlyPayment() * n + commision;
    let totalOverPayment = totalPaymant - sum;
    let percOverPayment = totalOverPayment / sum * 100;
    document.querySelector('#payment').innerHTML = findMontlyPayment().toFixed(2);
    document.querySelector('#amount-payment').innerHTML = totalPaymant.toFixed(2); 
    document.querySelector('#overpayment').innerHTML = totalOverPayment.toFixed(2); 
    document.querySelector('#perc-overpayment').innerHTML = percOverPayment.toFixed(2); 
    document.querySelector('#finish-payment').innerHTML = getDate().month[datePayment(n).getMonth()] + ' ' + datePayment(n).getFullYear(); 
  }

  if(document.querySelector('.main__annyit').checked) {
    createTableAut();
    fillResult();
  }else  {
    createTableDef();
    fillResult();
  }


}

export default calculatorCredit;