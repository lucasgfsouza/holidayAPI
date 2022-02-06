class DateConvertion {
    constructor()    
    {
        this.actualYear = new Date().getFullYear()
    }

    convertMmDdToFullDate(dateList, year = this.actualYear) {
        const dateListArray = Object.values(dateList)
        const fullDate = dateListArray.map((date) => {
            const treatedDate = date.replace('/', '-')
            return `${year}-${treatedDate}`
        })
        return fullDate
    }
}

module.exports = DateConvertion;