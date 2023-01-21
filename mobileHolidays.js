const dateFns = require('date-fns')

module.exports = (year) => {

  let month;
  let day;

  const a = year % 19;
  const b = year % 4;
  const c = year % 7;

  const d = ((19 * a + 24)) % 30;
  const e = (2 * b + 4 * c + 6 * d + 5) % 7;

  if (d + e > 9) {
    month = 3;
    day = (d + e - 9);
  } else {
    month = 2;
    day = (d + e + 22);
  }

  const pascoaDate = new Date(year, month, day)

  const carnavalDate = dateFns.subDays(pascoaDate, 47);

  const corpusChristDate = dateFns.addDays(pascoaDate, 60);

  return { 
    pascoaDate: dateFns.format(pascoaDate, 'PPP'),
    carnavalDate: dateFns.format(carnavalDate, 'PPP'),
    corpusChristDate: dateFns.format(corpusChristDate, 'PPP') };
};
