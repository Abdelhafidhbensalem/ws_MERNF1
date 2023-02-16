const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport')

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload._id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);//req.user
        } else {
            return done(null, false);//unthorized
            // or you could create a new account
        }
    }).select("-password");
}));

module.exports=isAuth=()=>passport.authenticate('jwt', { session: false })