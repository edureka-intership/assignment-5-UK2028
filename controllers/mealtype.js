const restaurantsDataMealType = require('../Models/mealtype.json');

exports.getMealType = (req,res) => {
    res.status(200).json({
        message: "restaurants mealtype data is fetched successfully",
        data: restaurantsDataMealType
    });
}