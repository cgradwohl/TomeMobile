const AWS = require('aws-sdk');
const chance = require('chance').Chance();

import { init, when } from '../utils';

describe('Login', () => {
  beforeAll(async () => {
    init();
  });

  describe('Given a valid username an password', () => { 
    it('should successfully return the user', async () => { 
      // use the client to login!
      const cognito = new AWS.CognitoIdentityServiceProvider()
      // we already had this variable defined in serverless.yml for the get-index handler.
      const userpoolId = process.env.cognito_user_pool_id
      // we need this value from the environement but we don't need it in ANY of our functions!
      const clientId = process.env.cognito_server_client_id

      const firstName = chance.first({ nationality: "en" });
      const lastName = chance.last({ nationality: "en" });
      const suffix = chance.string({ length: 8, pool: "abcdefghijklmnopqrstuvwxyz" });
      const username = `test-${firstName}-${lastName}-${suffix}`;
      const password = `${chance.string({ length: 8 })}B!gM0uth`;
      const email = `${firstName}-${lastName}@big-mouth.com`;

      const createReq = {
        UserPoolId        : userpoolId,
        Username          : username,
        MessageAction     : 'SUPPRESS',
        TemporaryPassword : password,
        UserAttributes    : [
          { Name: "given_name",  Value: firstName },
          { Name: "family_name", Value: lastName },
          { Name: "email",       Value: email }
        ]
      }

      // using admin privalages to create a user manually
      await cognito.adminCreateUser(createReq).promise()
  
      // TODO:
      // if we are in integration test mode, then we simply invoke the login function.
      // if we are in e2e test mode, then we need to call the deployed /login endpoint
      const response = await when.we_invoke_login(user);
    })
  })
  
});