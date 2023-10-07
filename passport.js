// import { serializeUser, deserializeUser, use } from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth2";
// require('dotenv').config();

// const ID = process.env.GOOGLE_CLIENT_ID;
// const SECRET = process.env.GOOGLE_SECRET_CODE;

// serializeUser((user, done) => {
//   done(null, user);
// });
// deserializeUser(function (user, done) {
//   done(null, user);
// });

// use(
//   new GoogleStrategy(
//     {
//       clientID: ID, 
//       clientSecret: SECRET, 
//       callbackURL: "http://localhost:8080/auth/callback",
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       return done(null, profile);
//     }
//   )
// );
