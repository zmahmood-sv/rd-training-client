const movies = require('./collections/Movies');
const people = require('./collections/People');

class TrainingPrefix {
    static graphUrl;
    static graphServer
    constructor(graphUrl, graphServer) {
        this.name = "training";
        this._graphurl = graphUrl;
        this._graphServer = graphServer;
        this._movies = movies;
        this._people = people;
    }
}

module.exports = TrainingPrefix;