import Places from "../db/models/placesmodel";
import Palce from "../db/models/placesmodel";

const request = {
  GetPlaces: async (req, res) => {
    await Places.find({})
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  AddPlaces: async (req, res) => {
    const places = await Places.create(req.body);
    places.save();
  },
};

export default request;
