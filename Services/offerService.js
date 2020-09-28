const candyModel = require("../Models/candy").candy;
const pinataModel = require("../Models/pinata").pinata;
const offerModel = require("../Models/offer").offer;
const data = require("../Data/data.json");


const offerService = () => {
    let allOffers = data.offers;

    const getAllOffers= () => {
        return allOffers;
    };

    return {
        getAllOffers
    }
};

module.exports = offerService();