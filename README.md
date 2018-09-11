# Airbnb Photo Component

> System-design case study load-testing server/database choices, optimizations, node-clustering, and caching.

## Related Projects

- https://github.com/airfec/nick
- https://github.com/airfec/ozge
- https://github.com/airfec/ricky
- https://github.com/airfec/marcellino

## Table of Contents

1.  [Usage](#Usage)
1.  [Requirements](#requirements)
1.  [Development](#development)

## Technology stack

> A full stack react app built with the philosophy of continuously-integrated, test-driven development.

- CSS
- HTML5
- React.js
- Node.js
- Express
- MongoDB

- Jest
- Enzyme
- CircleCI

## Requirements

- Node v8.10.0
- npm v3.5.2
- MongoDB v3.6.3

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Development

From within the root directory:

To seed database

```sh
npm db:seed
```

To run server

```sh
npm start
```

To run dev enviroment/webpack

```sh
npm run react-dev
```

To run tests

```sh
npm test
```

## REST API

- GET api/rooms/:id/photos/ - gets photo by id from database
- POST api/rooms/:id/photos/ - adds photo by id to database
- PUT api/rooms/:id/photos/ - updates photo by id in database
- DELETE api/rooms/:id/photos/ - removes photo by id from database
