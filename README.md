# LAB - Class 02

## Project: Basic Server **Express**

### Author: Melo

### Problem Domain

Basic API express server where middleware is written, tested and practice deployment.

### Links and Resources

- [Pull Request](https://github.com/MelodicXP/basic-server-express/pull/1)
- [GitHub Actions ci/cd](https://github.com/MelodicXP/basic-server-express/actions)
- Dev [back-end server url](https://four01-basic-server-express-dev.onrender.com)
- Prod [back-end server url](https://four01-basic-server-express-prod.onrender.com)

### Collaborators

### Setup

#### `.env` requirements (where applicable)

None required for this lab.

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Deploy as dev branch once ci/cd works.
- Feature Two: Deploy as prod branch once all tests pass.

#### Tests

- How do you run tests?
  - jest and supertest

- Any tests of note?

  - 404 on a bad route
  - 404 on a bad method
  - 500 if no name in query string
  - 200 if name is in query string
  - given a name, output object is correct

#### UML

![Lab-02-UML](assets/Lab02UML.png)
