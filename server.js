const express = require('express')

const mobileHolidays = require('./mobileHolidays')

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
    // const {pascoaDate, carnavalDate, corpusChristDate} = mobileHolidays(year)
    res.send(mobileHolidays(year))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
