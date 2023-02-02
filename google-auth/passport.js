const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://192.168.11.100:3000/auth/google/callback'
      },
      function (accessToken, refreshToken, profile, done) {
        console.log("Tryong to access gogole",profile)
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user)
        // })
      }
    )
  )
}
