const restaurantsDataByLocation = require('../Models/locations.json');

exports.getRestaurantsByLocation = (req,res) => {
    res.status(200).json({
        message:"restaurants location data is fetched successfully",
        data: restaurantsDataByLocation
    })
}