const Movies = require('./collections/Movies');
const People = require('./collections/People');

class TrainingPrefix {
    constructor(graphUrl, graphServer) {
        this.name = "training";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
        this._movies = new Movies({graphUrl,graphServer});
        this._people = new People({graphUrl,graphServer});
    }
}

module.exports = TrainingPrefix;