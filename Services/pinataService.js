const getPinataModel = require("../Models/Pinata");
const pinataModel = require("../Models/pinata").pinata;
const offerModel = require("../Models/offer").offer;
const data = require("../Data/data.json")


const PinataService = () => {

    const getAllPinatas = () => {
        return data.pinatas;
    };

    const getPinataById = id => {
        const allPinatas = getAllPinatas()
        for (let i = 0; i < allPinatas.length; i++){
            if (allPinatas[i].id == id){
                return allPinatas[i];
            }
        }
        return null;
    }
    const createPinata = pinata => {
        let newPinata = getPinataModel();
        const allPinatas = getAllPinatas();

        newPinata.name = pinata.name;
        newPinata.maximumHits = pinata.maximumHits;
        newPinata.id = allPinatas.length + 1;

        allPinatas.push(newPinata);
        return newPinata;
    }

    return {
        getAllPinatas,
        getPinataById,
        createPinata
    }


};

module.exports = PinataService();