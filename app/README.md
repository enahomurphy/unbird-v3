## Unbird APP

### RUN REQUIREMENTS

you need your env keys setup.

- Run `cp .env.example .env`
- update add your dev keys
- Run `yarn install && yarn start`

## CONTRIBUTIONS
- Every single projects of the render process is broken down into domains in `./src/domains` some domains are registered in the routes of the app folder while others are registered inside other domains.
- folder director

```
 --- cypress/
 ----- integration/
 --- scripts/
 --- src/
 ------ lib/
 -------- hooks/ this houses all hooks that can be user across all domain
 ------ components/ this houses all reusable renderer process components
 ------ app/
 ---------- utils/
 ------ domains/
 --------- Conversations/
 ------------ hooks/ this houses all hooks that is local to this domain
 ------------ graphql/ this houses all domain specify queries and mutations
 -------------- query/
 -------------- mutation/
 -------------- fragments/
 ------------ styles/
 ------------ locales/
 -------------- conversations-en.json

```

**testing**: Each domain folder should house a test folder **test** and all `e2e`test should go to the `cypress/integration` folder. When testing, we want to test output. We don't really care about the internal state of each component, instead what the user sees when certain actions are triggered
https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

**Codegen**
Codegen analyzes our gql`` queries and automatically generates all the required types and hook queries
To use codegen
- Write a graphql query or Mutation
- Make sure your graphql server is running
- Then run `yarn generate`
- All required types and hook query would be generated into src/lib/graphql/types