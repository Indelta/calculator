const changeValueInput = () => {
  document.querySelector('.main__range').addEventListener('input', () => {
    document.querySelector('.main__sum-credit').value = document.querySelector('.main__range').value;
  })

  document.querySelector('.main__range-percent').addEventListener('input', () => {
    document.querySelector('.main__term-credit').value = document.querySelector('.main__range-percent').value;
  })
}

export default changeValueInput;