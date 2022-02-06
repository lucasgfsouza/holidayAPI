const express = require('express')

const mobileHolidays = require('./mobileHolidays')

const brazilianHolidays = require('./brazilianHolidays.json')

const DateConvertion = require('./helpers/dateConvertion')

const dateConvertion = new DateConvertion();

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mobileHolidays', (req, res) => {
    if (!req.query.year) {
        throw new Error('precisa dum ano aí cabaço')
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
