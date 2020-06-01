const calculatorCredit = () => {
  function findK() {
    let percent = document.querySelector('.main__percent').value;
    let n = Number(document.querySelector('.main__term-credit').value);
    let i = percent / 12 / 100;
    console.log(i, n)
    let k = (i * (1 + i)**n / ((1 + i)**n - 1));
    console.log(k * 100);
  }

  findK();
}

export default calculatorCredit;