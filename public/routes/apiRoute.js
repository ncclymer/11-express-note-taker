const noteArray = require('../data/notes');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteArray));
}