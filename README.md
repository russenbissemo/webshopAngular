# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## server.js details 
const express = require("express");
Cette ligne importe le framework Express qui est utilisé pour créer le serveur.

const cors = require("cors");
Cette ligne importe le middleware Cors qui permet le partage de ressources cross-origin.

const bodyparser = require("body-parser");
Cette ligne importe le middleware body-parser qui est utilisé pour analyser les corps des requêtes entrantes.

const app = express();
Cette ligne crée une instance de l'application Express.

app.use(express.static("public"));
Cette ligne indique au serveur de servir les fichiers statiques du répertoire public.

app.use(bodyparser.urlencoded({ extended: false }));
Cette ligne configure le middleware pour analyser les corps de requête codés en URL.

app.use(bodyparser.json());
Cette ligne configure le middleware pour analyser les corps de requête JSON.

app.use(cors({ origin: true, credentials: true }));
Cette ligne active Cors pour toutes les routes, autorisant les demandes de n'importe quelle origine avec des informations d'identification.

const stripe = require("stripe")("sk_test_51N5pbLKlPTP8j6qsob3Xa8UIC00Kp4vkpHThIp3LwkFiYa8gHPltrpyMH6dzj1iRuz4S3qkqSD3tzbTNUP8LKZMR00YpQxncG1");
Cette ligne crée une instance Stripe et l'initialise avec une clé secrète.

app.post("/checkout", async (req, res, next) => {...});
Cette ligne définit une route pour gérer les requêtes POST vers "/checkout". Il s'agit d'une fonction asynchrone qui attend un objet de requête entrant, un objet de réponse et une fonction de rappel.

try {...} catch (error) {...}
Ce bloc de code configure un bloc try-catch pour gérer les erreurs pouvant survenir lors du traitement de la demande.

const session = await stripe.checkout.sessions.create({...});
Cette ligne crée une nouvelle session de paiement Stripe à l'aide de l'API Stripe. Il attend un corps de demande avec un tableau d'éléments et utilise ces données pour créer des éléments de ligne pour la session de paiement. La session de paiement est ensuite renvoyée et stockée dans la variable 'session'.

res.status(200).json(session);
Cette ligne envoie une réponse JSON avec les données de la session de paiement et un code d'état de 200.

} catch (error) {...}
Ce bloc catch gère toutes les erreurs qui peuvent survenir pendant le processus de paiement. Il transmet l'erreur à la fonction middleware 'next' et consigne le message d'erreur dans la console.

app.listen(4242, () => console.log("app is running on 4242"));
Cette ligne démarre le serveur sur le port 4242 et consigne un message dans la console.

