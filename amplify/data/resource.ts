import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { sayHello } from '../functions/say-hello/resource';

const schema = a.schema({
  User: a
    .model({
      name: a.string(),
      age: a.int()
    })
    .authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
  },
});
