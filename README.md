# Angular Real World

It is an angular play ground.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ReqBin sign up /api/users
## Sign in /api/users/login
POST /api/users/ HTTP/1.1
Host: conduit.productionready.io
Content-Type: application/json
Content-Length: 113

{
  "user": 
  {
    "email": "?",
    "password": "?",
    "username": "?"
  }
}

GET /api/user HTTP/1.1
Authorization: Token ???
Host: conduit.productionready.io

Response Ok 200
{
    "user": {
        "id": ?,
        "email": "?",
        "createdAt": "2020-12-24T21:47:01.927Z",
        "updatedAt": "2020-12-24T21:47:01.943Z",
        "username": "?",
        "bio": null,
        "image": null,
        "token": "?"
    }
}

References:

https://stackblitz.com/angular/anovqaeopyy?file=src%2Fstyles.css

https://stackblitz.com/angular/qypdxgpopxp?file=src%2Findex.html

## Deploy By Script
# Step 1. Build
ng build --prod

# step 2 Deploy
# syntax: aws s3 sync <source> <target> [--options]
# s3 sync command makes sure the target looks the same as the source in the end. 
# In addition, you can also supply the --delete option 
#   to remove files or objects from the target that are not present in the source.
aws s3 sync dist/angular-realworld/. s3://www.ijianhuang.com --delete
