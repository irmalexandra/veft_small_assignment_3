const getCandyModel = require("../Models/candy");
const pinataModel = require("../Models/pinata").pinata;
const offerModel = require("../Models/offer").offer;
const data = require("../Data/data.json")


const candyService = () => {

    const getAllCandies = () => {
        return data.candies;
    };

    const getCandyById = id => {
        const allCandies = getAllCandies()
        for (let i = 0; i < allCandies.length; i++){
            if (allCandies[i].id == id){
                return allCandies[i];
            }
        }
        return null;
    }

    const createCandy = candy => {
        let newCandy = getCandyModel();
        const allCandies = getAllCandies();

        newCandy.name = candy.name;
        newCandy.description = candy.description;
        newCandy.id = allCandies.length + 1;

        allCandies.push(newCandy);
        return newCandy;
    }

    return {
        getAllCandies,
        getCandyById,
        createCandy
    }


};

module.exports = candyService();