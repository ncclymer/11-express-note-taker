const noteData = require('../data/noteData');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(tableData));
}