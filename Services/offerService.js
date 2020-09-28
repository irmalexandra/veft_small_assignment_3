const candyModel = require("../Models/candy").candy;
const pinataModel = require("../Models/pinata").pinata;
const offerModel = require("../Models/offer").offer;
const data = require("../Data/data.json")


const offerService = () => {

    const getAllOffers= () => {
        return data.offers;
    };

    return {
        getAllOffers
    }
};

module.exports = offerService();