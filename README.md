# Donasi Masjid API

Donasi Masjid API, Restful API service for **Donasi Masjid** project. Build with **Express 4** and **PostgreSQL** as the database.

## About
Donasi Masjid API just one of service for **Donasi Masjid** project (soon). It used to serve and store data for the frontend side.

## Getting Started
This project must be install on online server if you want this project can be accessed publicly. Specification :
#### Server Requirements
1. Node.js 6 or higher
2. PostgreSQL database

#### Installation Steps
1. Clone the repo : `git clone https://github.com/qodrorid/donasi-masjid-api.git`
2. `$ cd donasi-masjid-api`
3. `$ cp .env.example .env`
4. Create new PostgreSQL database. *Note: You can use other SQL database like MySQL or MariaDB by change the DB_DIALECT
 in the .env file [see here](http://docs.sequelizejs.com/manual/installation/usage.html#dialects)*
5. Set database credentials on `.env` file
6. Install the dependencies `yarn install`
7. Run the database migrations `yarn sequelize db:migrate`
8. Run the database seeder `yarn sequelize db:seed:all`
9. `$ yarn build`
10. `$ yarn start:production`
11. `yarn start` for running on development

## Maintainers and Contributors
This project maintained by [Alif Rizki Pambudi](https://github.com/alfrizp) and developed by [contributors](https://github.com/qodrorid/donasi-masjid-api/graphs/contributors).

## Ingredients
Donasi Masjid API runs over [Node.js](https://nodejs.org/en/) and use [PostgreSQL](https://www.postgresql.org/) as the database.
Built with [Express 4](https://expressjs.com/), [Sequelize](https://github.com/sequelize/sequelize) as the ORM, and many other dependencies.

## How to contribute
This project is still being developed. We're delighted that you're helping make this open source project better.

### Reporting a bug
First, **make sure the bug hasn't already been reported** by searching GitHub's issues section.

If no existing issue exists, go ahead and create one. **Please be sure to include all of the following**:

1. A clear, descriptive title (ie. "A bug" is not a good title).
2. Include the error message if have.

### Submitting a Pull Request
1. Fork it
2. Create your feature branch `git checkout -b new-feature`
3. Commit your changes `git commit -m "Add some feature"`
4. Push to the branch `git push -u origin new-feature`
5. Create new Pull Request

## License
[MIT](https://github.com/qodrorid/donasi-masjid-api/blob/master/LICENSE.md) &copy; [alfrizp](https://github.com/alfrizp)