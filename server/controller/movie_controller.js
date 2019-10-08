const data = require("../myAPI.json");
const cors = require("cors");
let newID = 101;

module.exports = {
	get: (req, res) => {
		res.status(200).send(data);
	}
};
