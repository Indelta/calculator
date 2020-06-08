const fillSection = () => {
  let date = new Date(); 
  const yearCurrent = date.getFullYear();

  const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']; 
  const year = [yearCurrent, yearCurrent + 1, yearCurrent + 2, yearCurrent + 3, yearCurrent + 4, yearCurrent + 5, yearCurrent + 6, yearCurrent + 7];
  
  for (let i = 0; i < month.length; i++) {
    const option = document.createElement('option');
    document.querySelector('.main__month').appendChild(option);
    if( i === date.getMonth()) {
      option.selected = true;
    }
    option.innerHTML = month[i];
  }

  for (let j = 0; j < year.length; j++) {
    const option = document.createElement('option');
    document.querySelector('.main__year').appendChild(option);
    option.innerHTML = year[j];
  }

  return {
    date: date,
    month: month,
    year: year
  };
}

export default fillSection;