const dateFns = require('date-fns')
const brazilianHolidaysJson = require('../brazilianHolidays.json')
module.exports = (date, mobileHolidays) => {
    let result
    Object.entries(mobileHolidays).forEach((holiday) => {
        if (dateFns.isSameDay(holiday[1], date)) result = holiday[0]
    })

    if (!result) {
        Object.entries(brazilianHolidaysJson).forEach((holiday) => {
            if (dateFns.isSameDay(holiday[1], date)) result = holiday[0]
        })
    }

    return result
}