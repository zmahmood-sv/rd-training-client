const { query, nullToUndefined } = require("@simpleview/sv-graphql-client");
class People {

    constructor({ graphUrl, graphServer }) {
        this.name = "training";
        this._graphurl = graphUrl;
        this._graphServer = graphServer;
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
            headers,
            clean: true

        });
        return data;
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
            headers,
            clean: true

        });
        return data;
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
            headers,
            clean: true

        });
        return data;
    }
}

module.exports = People;