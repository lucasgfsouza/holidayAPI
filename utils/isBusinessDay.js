const DateConvertionClass = require('../helpers/dateConvertion')
const brazilianHolidaysJson = require('../brazilianHolidays.json')
const mobileHolidaysFn = require('../mobileHolidays')
const dateFns = require('date-fns')
const identifyHoliday = require('./identifyHoliday')

module.exports = (dateToCheck) => {
    const dataHelper = new DateConvertionClass()
    const year = dateFns.getYear(dateToCheck)

    const brazilianHolidaysThisYear = dataHelper.convertJsonHolidaysToDate(brazilianHolidaysJson)
    const mobileHolidaysThisYear = mobileHolidaysFn(year)

    const allHolidays = dataHelper.allHolidaysByYear(mobileHolidaysThisYear, brazilianHolidaysThisYear)

    let isBusinessDay = true
    allHolidays.forEach((holiday) => {
        if (dateFns.isSameDay(holiday, dateToCheck)) {
            isBusinessDay = false
        }
    })

    if (dateFns.isWeekend(dateToCheck)) isBusinessDay = false


    let result = { isBusinessDay }

    if (!isBusinessDay) {
        const holidayIdentified = identifyHoliday(dateToCheck, mobileHolidaysThisYear)
        result.holiday = holidayIdentified
    }

    return result
}