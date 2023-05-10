import passport from 'passport';
import jwt from 'passport-jwt';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use('current', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'pageSecret'
    }, async(jwt_payload, done) => {
        try{
            return done(null, jwt_payload);
        } catch(err){
            return done(err);
        }
    })
    )
}

const cookieExtractor = req => {
    let token = null;
    if( req && req.cookies ){
        token = req.cookies['secretToken']
    };
    return token;
}

export default initializePassport;