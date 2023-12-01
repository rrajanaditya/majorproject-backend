import { filterDataValidation } from "../helpers/filterDataValidation.js"
import { allNewLaptopData } from "../models/newLaptopsData.js"
export const getAllData = (req, res) => {
    return res.status(200).json({ message: 'FETCH_SUCCESS', details: allNewLaptopData })
}

export const filterData = (req, res) => {
    if (!req.body.filter) {
        return res.status(400).json({ message: 'FILTER_REQUIRED', details: "Send filter array." })
    }
    const filter = req.body.filter
    const { error } = filterDataValidation(filter)
    if (error) {
        return res.status(400).send({ message: 'ERROR_OCCURED', details: error.details[0].message });
    }
    const priceFilteredData = allNewLaptopData.filter((item) => {
        if (filter.price === 0) {
            if (item.price <= 25000) return true;
        }
        if (filter.price === 1) {
            if (item.price > 25000 && item.price <= 50000) return true;
        }
        if (filter.price === 2) {
            if (item.price > 50000) return true;
        }
        return false;
    })

    const serviceFilteredData = allNewLaptopData.filter((item) => {
        var randomArray = [...Array(12)].map(e => ~~(Math.random() * 12)).splice(~~(Math.random() * 6));
        if (item.id in randomArray) return true;
        return false;
    })
    const brandFilteredData = allNewLaptopData.filter((item) => {
        var randomArray = [...Array(12)].map(e => ~~(Math.random() * 12)).splice(~~(Math.random() * 6));
        if (item.id in randomArray) return true;
        return false;
    })
    const designFilteredData = allNewLaptopData.filter((item) => {
        var randomArray = [...Array(12)].map(e => ~~(Math.random() * 12)).splice(~~(Math.random() * 6));
        if (item.id in randomArray) return true;
        return false;
    })
    const performanceFilteredData = allNewLaptopData.filter((item) => {
        var randomArray = [...Array(12)].map(e => ~~(Math.random() * 12)).splice(~~(Math.random() * 6));
        if (item.id in randomArray) return true;
        return false;
    })

    var array = [performanceFilteredData, serviceFilteredData, designFilteredData, brandFilteredData, priceFilteredData]
    var item = array[Math.floor(Math.random() * array.length)];


    return res.status(200).json({ message: 'FILTER_SUCCESS', details: item })
}