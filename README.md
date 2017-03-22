# Overview

Example base for a simple Node + Mysql + React project. The following things are included:

## Backend-related examples

* Sequelize (examples assume an existing MySQL installation with a "prueba" database. TODO: include the sql script for it)
  - Connecting to a database
  - Defining a model
  - Writing to, and reading from, the DB, using the example model
* Express
  - Directory structure
  - Route management
  - Endpoints for an example "user" entity
* NPM scripts for loading the server (and auto-reloading it on changes to the server codebase)

## Frontend-related examples

- React dependency with hello world entry point
- Webpack minimal configuration for bundling and transforming es2015 and React JSX
- Webpack minimal configuration for loading a frontend dev server (and auto-reloading it on changes to the frontend codebase + proxying requests to the backend server)

## Potential next steps to take from here

- Setup JSON Web Token-based session management (on frontend and backend). A good start would be:
    + `npm install jsonwebtoken --save`
    + Create an express middleware that can be used in endpoint definitions as needed, for protecting them.
- Setup email sending modules. A good start would be:
    + `npm install nodemailer --save`
    + Choose an email provider, see if there's a decent 3rd party node module for it, and set it up with nodemailer
- Setup testing. Next step depends on the kind of testing that's desired (unit, e2e, generative, etc.)
- Setup node scripts in the `package.json` for different types of builds (production build, dev build, test build, etc.)
- Setup webpack loaders and/or plugins for style-related stuff, e.g. SASS/LESS/etc loader, fonts stuff, stylesheet autoprefixing, etc.

# Contributions Guidelines

Consider the following before sending PRs:

* Adding X dependency to the package.json will most likely be rejected, unless you can provide a super convincing explanation of why X is a must-have.
* Removing X dependency from the package.json, would be highly appreciated (if it doesn't cause fragile reinvention).
* Fixing typos, grammar, and bugs in the example code, would also be highly appreciated.
