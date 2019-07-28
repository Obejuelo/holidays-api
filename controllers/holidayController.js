const axios = require('axios')
const Holiday = require('../models/Holiday')

const index = async (req, res) => {
    const country = req.params.country
    const year = req.params.year
    const month = req.params.month
    const url = 'https://date.nager.at/api/v2/publicholidays/'
    let holidays = []

    let monthInt = parseInt(month)
    if(monthInt < 01 || monthInt > 12) {
        res.status(400).json({
            message: 'el mes debe ser no mayor a 12 y no menor a 01'
        })
        return
    }

    let yearInt = parseInt(year)
    if(yearInt < 2019 || yearInt > 2021) {
        res.status(400).json({
            message: 'El año debe ser no mayor a 2021 y no menor a 2019'
        })
        return
    }

    if(country !== 'US' && country !== 'MX') {
        res.status(400).json({
            message: "Solo se aceptan dos países, 'MX' 'US'"
        })
        return
    }

    try {
        const resp = await axios.get(`${url}${year}/${country}`)
        const data = await resp.data
        data.map((holi)=>{
            let date = holi.date // Guardamos la fecha en una variable
            let name = holi.name // Guardamos el nombre en una variable
            let dateArr = date.split('-') // Separamos la fecha en un arreglo para poder comparar

            let holiday = {date, name}

            if(dateArr[1] === month) { // Si es igual a month lo agregamos al arreglo
                holidays.push(holiday)
                Holiday.create({ // Las búsquedas se guardan en ua DB mongoDB
                    date : holi.date,
                    name : holi.name
                })
                .then(() => {
                    console.log('Registro creado');
                })
            }
        })
        res.json(holidays)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}

module.exports = {index}