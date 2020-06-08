
const getDate = () => {
  const yearInput = document.querySelector('select[name=input-year]').value;
  const monthInput = document.querySelector('select[name=input-month]').value;
  let namberMonth;

  const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']; 
  const year = [+yearInput, +yearInput + 1, +yearInput + 2, +yearInput + 3, +yearInput + 4, +yearInput + 5, +yearInput + 6, +yearInput + 7];

  month.forEach( (el, index) => {
    if ( el == monthInput ) {
      namberMonth = index;
    }
  })

  const inputDate = new Date(+yearInput, namberMonth, 1);
  
  return {
    date: inputDate,
    month: month,
    year: year
  }
}

export default getDate;