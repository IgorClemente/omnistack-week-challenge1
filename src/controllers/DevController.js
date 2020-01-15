const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(request, response) {
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, bio, avatar_url } = apiResponse.data;

    const techsArray = techs.split(",").map(tech => tech.trim());

    const dev = await Dev.create({
      name,
      bio,
      avatar_url,
      github_username,
      techsArray
    });

    response.json(dev);
  }
};
