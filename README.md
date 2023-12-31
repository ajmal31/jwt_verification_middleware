# jwt_verification_middleware
This is my first published npm module 
npm module Link:-https://www.npmjs.com/package/jwt-verification-middleware 
npm command:-npm i jwt-verification-middleware

                                                    **********************
JWT Verification Middleware
-----------------------------
The JWT Verification Middleware is a Node.js module that provides an easy and secure way to authenticate requests by checking if they contain a valid JSON Web Token (JWT) in the request header. It is designed to be used in web applications, particularly with Express.js, to enforce authentication and ensure that incoming requests are accompanied by a valid JWT token.

Features
--------
Verifies the presence of an authorization token in the request header.
Validates the authenticity and integrity of the JWT using a secret key provided during function initialization.
Easily integrated into Express.js applications as a middleware for route protection.
Enhances the security of your application by ensuring that only authenticated users can access protected routes.

Installation
--------------
To use this middleware, simply install it as an npm package and pass your secret key to the jwtVerification function during setup.
"npm install jwt-verification-middleware"

Usage
-----
const jwtVerificationMiddleware = require('jwt-verification-middleware');

// Initialize the middleware with your secret key
app.use(jwtVerificationMiddleware('your-secret-key'));

// Your protected routes and application logic
ES6 VERSION 
**********
import express from 'express';
import { jwtVerification } from 'jwt-verification-middleware';

// Initialize the middleware with your secret key
app.use(jwtVerificationMiddleware('your-secret-key'));

// Your protected routes and application logic

Contributions
-------------
Contributions, bug reports, and feature requests are welcome. Feel free to create issues, submit pull requests, or provide feedback to help improve this middleware😍

License
-------
This middleware is distributed under the MIT License. See the LICENSE file for details.
