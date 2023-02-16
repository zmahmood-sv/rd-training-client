const { query } = require("@simpleview/sv-graphql-client");

class Movies {
  constructor({ graphUrl, graphServer }) {
    this.name = "training";
    this._graphurl = graphUrl;
    this._graphServer = graphServer;
  }


  async find({ input, context, fields, headers }) {
    context = context || this._graphServer.context
    const { data } = await query({
      query: `
            query Docs ($param:training_movies_find_param!){
                training{
                  movies_find(param:$param){
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
            mutation training($param:training_movies_remove_input){
              training{
                movies_remove(input:$param){
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
            mutation training($param:[training_movies_insert!]!){
                training{
                  movies_insert(movies:$param){
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

module.exports = Movies;