NomNom-Express
=========
!["NomNom-Express"](./public/assets/nomnom_logo-removebg-preview.png)

## Speedy Noms, Happy Tums!

Tired of Delivery Drama? Enter NomNomExpress: Your Fast Food Fairytale.

Skip the delivery delays and ditch the greasy takeout routine. NomNomExpress is here to rewrite your food pickup story! We understand the struggle –  craving delicious food but facing the hassle of long waits and unreliable deliveries.

NomNomExpress offers a faster, fresher, and friendlier way to get your favorite meals.  Order from a variety of restaurants with our user-friendly app, and breeze in and out to pick up your piping hot food exactly when it's ready.

Forget the delivery anxiety and disappointment.  NomNomExpress puts you in control of your food experience.  Download the app today and get ready to savor a new chapter in convenient and delicious food pickup!


## Getting Started

1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Setup databse
  - Start a new psql session
  - create and open a database with the name 'midterm'
  - Run the scripts in order
  - Run the seeds in order
4. Create a Twilio account
5. Create a .env file for Twilio with the following credentials:
  - TWILIO_ACCOUNT_SID
  - TWILIO_AUTH_TOKEN
  - PHONE
  - TWILIO_PHONE_NUMBER
6. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
7. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Twilio
- Sass
- Moment
- dotenv
- Express
- Morgan
- Nodemon

