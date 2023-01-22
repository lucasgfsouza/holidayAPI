class DateConvertion {
    constructor() {
        this.actualYear = new Date().getFullYear()
    }

    convertJsonHolidaysToDate(dateList, year = this.actualYear) {
        const dateListArray = Object.values(dateList)
        const fullDate = dateListArray.map((date) => {
            const treatedDate = date.split('/')
            return new Date(year, ...treatedDate)
        })
        return fullDate
    }

    allHolidaysByYear(mobileHolidays, brazilianHolidays) {
        const allHolidays = [...Object.values(mobileHolidays), ...Object.values(brazilianHolidays)]

        return allHolidays
    }

}

module.exports = DateConvertion;