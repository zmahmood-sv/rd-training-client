class Movies {
    static graphUrl;
    static graphServer
    constructor(graphUrl, graphServer) {
        this.name = "training";
        this._graphurl = graphUrl;
        this._graphServer = graphServer;
    }
}

module.exports = Movies;