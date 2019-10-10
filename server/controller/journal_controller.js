const jData = require("../journalAPI.json");
let index = 4;

module.exports = {
	get: (req, res) => {
		res.status(200).send(jData);
	},
	delete: (req, res) => {
		const { id } = req.params;
		const index = jData.findIndex(journal => {
			return journal.id === parseInt(id);
		});
		jData.splice(index, 1);
		if (index !== -1) {
			res.status(200).send(jData);
		}
	},
	post: (req, res) => {
		const { title, answer } = req.body;
		jData.push({ index, title, answer });
		index++;
		res.status(200).send(jData);
	},
	put: (req, res) => {}
};
