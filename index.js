'use strict'

const friendsModel = require('./schema.js');


exports.handler = async (event) => {
  
  console.log('Event', event)
  console.log('PATH PARAMS', event.pathParameters)
  try {

    const id = event.queryStringParameters.id;

    const friend = await friendsModel.delete(id)

    let data = JSON.stringify(friend)

    return {
      statusCode: 200,
      body: data
    };
  } catch(e) {

    return {
      statusCode: 500,
      body: e.message
    }
  }
}