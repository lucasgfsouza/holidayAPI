# holidayAPI
An API to calculate holidays in brazil, receiving a lista to add and remove holidays.


# Routes
GET - Holidays >>> will return all holidays in Brazil, receive year as param, can receive as queryString flags state and city and an object with 2 keys, both lists, one to add
    and another to remove Holidays, when we have some kind of shift.

GET - AddBusinessDays >>> will receive 2 mandatory params, one is the date to increase and other is the amount of days to increase at first param. Can receive, also, flags
    state, city and the an object with 2 keys, both lists, one to add and another to remove holidays. By Default, this route will not include as business the national holidays
    from Brazil, but it can be removed, passing in the remove list param.

GET - BrazilianHolidays >>> return all national holidays in Brazil, receive year as param.

GET - MobileHolidays >>> return easter, brazilian carnival and corphus christ date from a year that must be sended as queryParam

year params should be pass as YYYY (2022);
list params should be pass as mm/dd as a string, when pass DATE as param, year will be removed in the API context and turn it in a string (['12/25', '01/01']);
date to AddBusinessDays must be sended as yyyy-mm-dd and amount as int
 