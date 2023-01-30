## DESCRIPTION

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings

  ```sh
  npm run setup
  ```
- `migrate` : Run the database migration script

  ```sh
  npm run migrate
  ```
- `dev` : Starts both servers (frontend + backend) in one terminal

  ```sh
  npm run dev
  ```
  
- `dev-front` : Starts the React frontend server

  ```sh
  npm run dev-front
  ```
  
- `dev-back` : Starts the Express backend server

  ```sh
  npm run dev-back
  ```

- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

  ```sh
  npm run fix
  ```

## FAQ

## AUTHOR

👤**Florian BOUCHEZ** [🇫🇷 Contactez moi 🇬🇧](<fbouchez.pro@gmail.com>)

* Github: [@Bouchez Florian](https://github.com/Fbouchezpro)
* LinkedIn: [@Bouchez Florian](https://www.linkedin.com/in/florian-bouchez-18521b23b/)

👤**Alexis FOULONT** [🇫🇷 Contactez moi 🇬🇧](<alexisfoulont@gmail.com>)

* Github: [@Foulont Alexis](https://github.com/AlexisFLT)
* LinkedIn: [@Foulont Alexis](https://www.linkedin.com/in/alexis-foulont/)

👤**Kevin GUEGUEN** [🇫🇷 Contactez moi 🇬🇧](<gueguenk@gmail.com>)

* Github: [@Kevin Gueguen](https://github.com/guenk)
* LinkedIn: [@Kevin Gueguen](https://www.linkedin.com/in/gueguenk/)

👤**Valentin WAQUET** [🇫🇷 Contactez moi 🇬🇧](<waquetv@gmail.com>)

* Github: [@Valentin Waquet](https://github.com/Sax593)
* LinkedIn: [@Valentin Waquet](https://www.linkedin.com/in/valentin-waquet-420412254/)

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
