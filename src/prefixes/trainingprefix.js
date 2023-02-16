const movies = require('./collections/Movies');
const people = require('./collections/People');

class TrainingPrefix {
    constructor(graphUrl, graphServer) {
        this.name = "training";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
        this._movies = new movies({graphUrl,graphServer});
        this._people = new people({graphUrl,graphServer});
    }
}

module.exports = TrainingPrefix;