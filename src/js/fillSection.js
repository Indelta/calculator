import getDate from './getDate';

const fillSection = () => {
  let date = getDate();
  console.log(date.date.getMonth())
  console.log(date);
  for (let i = 0; i < date.month.length; i++) {
    const option = document.createElement('option');
    document.querySelector('.main__month').appendChild(option);
    if( i === date.date.getMonth()) {
      option.selected = true;
    }
    option.innerHTML = date.month[i];
  }

  for (let j = 0; j < date.year.length; j++) {
    const option = document.createElement('option');
    document.querySelector('.main__year').appendChild(option);
    option.innerHTML = date.year[j];
  }
}

export default fillSection;