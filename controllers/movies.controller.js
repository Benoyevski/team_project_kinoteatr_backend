const Movie = require("../models/Movie.model");

module.exports.moviesController = {
  addMovie: async (req, res) => {
    try {
      const { image, title, genre, year, country, description, actors } =
        req.body;
      const data = await Movie.create({
        image,
        title,
        genre,
        year,
        country,
        description,
        actors,
      });
      res.json(data);
    } catch (e) {
      return res.status(400).json(e.toString());
    }
  },

  getMovies: async (req, res) => {
    try {
      const data = await Movie.find();
      res.json(data);
    } catch (e) {
      return res.status(400).json(e.toString());
    }
  },

  deleteMovie: async (req, res) => {
    try {
      const data = await Movie.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      return res.status(400).json(e.toString());
    }
  },
};
