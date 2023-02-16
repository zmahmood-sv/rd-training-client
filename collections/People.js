class People {

    static _graphUrl;
    static _graphServer
    constructor(args) {
        this.name = "training";
        this._graphurl = args.graphUrl;
        this._graphServer = args.graphServer;
    }


    async find({ input, context, fields, headers }) {
        context = context || this._graphServer.context
        const { data } = await query({
            query: `
            query training($findId:training_people_find_param!){
                training{
                      people_find(param:$findId){
                        ${fields}
                    }
                }
            }	
              
            `,
            variables: {
                param: input
            },
            url: this._graphurl,
            headers
        });
        return data || undefined;
    }

    async remove({ input, context, fields, headers }) {
        context = context || this._graphServer.context
        const { data } = await query({
            query: `
            mutation training($param:training_people_remove_input){
                training{
                      people_remove(input:$param){
                          ${fields}
                      }
                  }
              }	
            `,
            variables: {
                param: input
            },
            url: this._graphurl,
            headers
        });
        return data || undefined;
    }

    async insert({ input, context, fields, headers }) {
        context = context || this._graphServer.context
        const { data } = await query({
            query: `
            mutation Insert($people: [training_people_insert!]!){
                training {
                  people_insert(people: $people){
                    ${fields}
                  }
                }
              }
            `,
            variables: {
                param: input
            },
            url: this._graphurl,
            headers
        });
        return data || undefined;
    }
}

module.exports = People;