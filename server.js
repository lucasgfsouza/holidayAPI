const express = require('express')

const mobileHolidays = require('./mobileHolidays')

const brazilianHolidays = require('./brazilianHolidays.json')

const DateConvertion = require('./helpers/dateConvertion')

const dateFns = require('date-fns')
const isBusinessDayFn = require('./utils/isBusinessDay')

const dateConvertion = new DateConvertion();

process.env.TZ = 'Etc/UTC'

const app = express()
const port = 3000

app.get('/mobileHolidays', (req, res) => {
  if (!req.query.year) {
    res.status(400).send('You need to inform an year')
  }
  const { year } = req.query
  res.send(mobileHolidays(year))
})

app.get('/brazilianHolidays', (req, res) => {
  if (!req.query.year) {
    res.send(brazilianHolidays)
  } else {
    const { year } = req.query
    res.send(dateConvertion.convertJsonHolidaysToDate(brazilianHolidays, year))
  }

})


app.get('/isBusinessDay', (req, res) => {
  if (!req.query.addDays) {
    res.status(400).send('You need to inform how many days you want to add')
  }
  let initialDate
  if (!req.query.initialDate) {
    initialDate = new Date()
  } else {
    initialDate = new Date(req.query.initialDate)
  }

  const resultDate = dateFns.addDays(initialDate, +req.query.addDays + 1)

  const { isBusinessDay, holiday } = isBusinessDayFn(resultDate)

  res.send({ isBusinessDay, checkedDate: dateFns.format(resultDate, 'PPP'), holiday })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
