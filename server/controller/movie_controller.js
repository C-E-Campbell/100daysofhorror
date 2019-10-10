const data = require("../movieAPI.json");

module.exports = {
	get: (req, res) => {
		res.status(200).send(data);
	},
	delete: (req, res) => {
		const { id } = req.params;
		const index = data.findIndex(movie => {
			return movie.id === parseInt(id);
		});
		data.splice(index, 1);
		res.status(200).send(data);
	}
};
