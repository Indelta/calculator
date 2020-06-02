const getDate = () => {
  const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  let date = new Date();
  const yearCurrent = date.getFullYear();
  const year = [yearCurrent, yearCurrent + 1, yearCurrent + 2, yearCurrent + 3, yearCurrent + 4, yearCurrent + 5, yearCurrent + 6, yearCurrent + 7];
  return {
    date: date,
    month: month,
    year: year
  }
}

export default getDate;