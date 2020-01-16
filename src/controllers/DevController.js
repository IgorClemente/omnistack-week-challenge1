const axios = require("axios");
const Dev = require("../models/Dev");

const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, longitude, latitude } = request.body;

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, bio, avatar_url } = apiResponse.data;

    let dev = await Dev.findOne({
      github_username
    });

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    if (!dev) {
      dev = await Dev.create({
        name,
        bio,
        avatar_url,
        github_username,
        techs: techsArray,
        location
      });
    }

    response.json(dev);
  }
};
