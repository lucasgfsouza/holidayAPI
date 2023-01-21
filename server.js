const express = require('express')

const mobileHolidays = require('./mobileHolidays')

const brazilianHolidays = require('./brazilianHolidays.json')

const DateConvertion = require('./helpers/dateConvertion')

const dateConvertion = new DateConvertion();

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
      if (!req.query.year){
      res.send(brazilianHolidays)
      }else {
        const { year } = req.query
        res.send(dateConvertion.convertMmDdToFullDate(brazilianHolidays, year))
      }
      
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
