import getDate from './getDate';
import paintDiagram from './diagram';
import pieCharts from './pieCharts';

const calculatorCredit = () => {
  let percent = document.querySelector('.main__percent').value;
  let n = Number(document.querySelector('.main__term-credit').value);
  let sum = document.querySelector('.main__sum-credit').value;
  let commision = document.querySelector('.main__commision').value ? Number(document.querySelector('.main__commision').value) : 0;
  let dopPayment = document.querySelector('.main__dop-payment').value ? Number(document.querySelector('.main__dop-payment').value) : 0;
  let currentSum;
  let currentPercent;
  let currentDebt;
  let finishPayment;
  let sumMontlyPayment = 0;
  let sumMainDebit = 0;
  let sumPercent = 0;
  let sumDopPayment = 0;
  let arrDiagramma = [['Доп. платежи', 'Основной долг', 'Проценты по кредиту']];
  let arrPieCharts = [['Сумма кредита', 'Размер переплаты']];


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

  function getPercentAnt() {
    let montlyPayment = findMontlyPayment(1).toFixed(2);
    if (!currentSum) {
      currentPercent = percent / 12 / 100 * sum; 
      console.log('currentPercent', currentPercent)
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

  function createTableAnt() {    
    for (let j = 1; j <= n; j++) {
      let arrNew = []
      let data = getPercentAnt(); 
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
          arrNew.push(getDate().month[datePayment(j).getMonth()] + ' ' + datePayment(j).getFullYear());
        }  
        if (i === 3) {
          td.innerHTML = findMontlyPayment().toFixed(2);
          sumMontlyPayment += +findMontlyPayment().toFixed(2);          
        }
        if (i === 4) {
          td.innerHTML = data.currentDebt.toFixed(2);
          sumMainDebit += +data.currentDebt.toFixed(2);
          arrNew.push(+data.currentDebt.toFixed(2));
        }
        if (i === 5) {
          td.innerHTML = data.currentPercent.toFixed(2);
          sumPercent += +data.currentPercent.toFixed(2);
          arrNew.push(+data.currentPercent.toFixed(2));
        }
        if (i === 6) {
          td.innerHTML = dopPayment;
          sumDopPayment += +dopPayment;
        }
        if (i === 7) {
          td.innerHTML = data.currentSum.toFixed(1);
        }
      }
      arrDiagramma.push(arrNew);
    }
  }

  function fillResultAnt() {
    let totalPaymant = sumMontlyPayment + commision;
    let totalOverPayment = totalPaymant - sum;
    let percOverPayment = totalOverPayment / sum * 100;
    document.querySelector('#payment').innerHTML = findMontlyPayment().toFixed(2);
    document.querySelector('#amount-payment').innerHTML = totalPaymant.toFixed(2); 
    document.querySelector('#overpayment').innerHTML = totalOverPayment.toFixed(2); 
    document.querySelector('#perc-overpayment').innerHTML = percOverPayment.toFixed(2); 
    document.querySelector('#finish-payment').innerHTML = getDate().month[datePayment(n).getMonth()] + ' ' + datePayment(n).getFullYear(); 
    document.querySelector('.total_payment').innerHTML = sumMontlyPayment.toFixed(2);
    document.querySelector('.total_credit_pay').innerHTML = sumMainDebit.toFixed(0);
    document.querySelector('.total_percent_pay').innerHTML = sumPercent.toFixed(2);
    document.querySelector('.total_services_pay').innerHTML = sumDopPayment.toFixed(2);
    arrPieCharts.push(['Сумма кредита', +sum])
    arrPieCharts.push(['Размер переплаты', totalOverPayment])
  }

  // Дифференцированный расчет кредита


  function getData() {
    let montlyPayment
    if (!currentSum) {
      currentPercent = percent / 12 / 100 * sum; 
      currentDebt = sum / n;
      montlyPayment = currentDebt + currentPercent + dopPayment;
      currentSum = sum - currentDebt;
    } else {
      currentPercent = percent / 12 / 100 * currentSum; 
      currentDebt = sum / n;
      montlyPayment = currentDebt + currentPercent + dopPayment;
      currentSum = currentSum - currentDebt;
    }

    return {
      currentPercent: currentPercent,
      currentDebt: currentDebt,
      currentSum: currentSum,
      montlyPayment: montlyPayment
    }
  }

  function createTableDef() {    
    for (let j = 1; j <= n; j++) {
      let data = getData(); 
      if (j === n) {
        finishPayment = data.montlyPayment;
      }
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
          td.innerHTML = data.montlyPayment.toFixed(2);
          sumMontlyPayment += +data.montlyPayment.toFixed(2);
        }
        if (i === 4) {
          td.innerHTML = data.currentDebt.toFixed(2);
          sumMainDebit += +data.currentDebt.toFixed(2);
        }
        if (i === 5) {
          td.innerHTML = data.currentPercent.toFixed(2);
          sumPercent += +data.currentPercent.toFixed(2);
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

  function fillResultDef() {
    console.log(getData());
    let totalPaymant = sumMontlyPayment + commision;
    let totalOverPayment = totalPaymant - sum;
    let percOverPayment = totalOverPayment / sum * 100;
    document.querySelector('#payment').innerHTML = 'от' + ' ' + finishPayment.toFixed(2);
    document.querySelector('#amount-payment').innerHTML = sumMontlyPayment.toFixed(2); 
    document.querySelector('#overpayment').innerHTML = totalOverPayment.toFixed(2); 
    document.querySelector('#perc-overpayment').innerHTML = percOverPayment.toFixed(2); 
    document.querySelector('#finish-payment').innerHTML = getDate().month[datePayment(n).getMonth()] + ' ' + datePayment(n).getFullYear(); 
    document.querySelector('.total_payment').innerHTML = sumMontlyPayment.toFixed(2);
    document.querySelector('.total_credit_pay').innerHTML = sumMainDebit.toFixed(0);
    document.querySelector('.total_percent_pay').innerHTML = sumPercent.toFixed(2);
    document.querySelector('.total_services_pay').innerHTML = sumDopPayment.toFixed(2);
  }

  if(document.querySelector('.main__annyit').checked) {
    createTableAnt();
    fillResultAnt();
  } else {
    createTableDef();
    fillResultDef();

  }
  paintDiagram(arrDiagramma);
  pieCharts(arrPieCharts);
}

export default calculatorCredit;
