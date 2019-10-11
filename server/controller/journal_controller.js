const jData = require("../journalAPI.json");
let index = 4;

module.exports = {
	getAll: (req, res) => {
		res.status(200).send(jData);
	},
	getSingle: (req, res) => {
		const { id } = req.params;
		const index = jData.findIndex(journal => {
			return journal.id === parseInt(id);
		});

		if (index !== -1) {
			res.status(200).send(jData[index]);
		} else {
			res.status(404).send(`cannot find entry`);
		}
	},
	delete: (req, res) => {
		const { id } = req.params;
		const index = jData.findIndex(journal => {
			return journal.id === parseInt(id);
		});

		jData.splice(index, 1);

		if (index !== -1) {
			res.status(200).send(jData);
		} else {
			res.status(404).send(`cannot find entry`);
		}
	},
	post: (req, res) => {
		const { title, answer } = req.body;
		jData.push({ id: index, title, answer });
		index++;
		res.status(200).send(jData);
	},
	put: (req, res) => {
		const { id } = req.params;
		const { title, answer } = req.body;

		const index = jData.findIndex(journal => {
			return journal.id === parseInt(id);
		});

		if (index !== -1) {
			jData[index] = {
				id: jData[index].id,
				title: title || jData[index].title,
				answer: answer || jData[index].answer
			};
			res.status(200).send(jData);
		} else {
			res.status(404).send(`cannot find entry`);
		}
	}
};
