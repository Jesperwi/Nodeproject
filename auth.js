//** Password for JWT */
const jwtSecret = 'jesper';

import { sign } from 'jsonwebtoken';
import { authenticate } from 'passport';

import './passport.js';

let generateJWTToken = (user) => {
    return sign(user, jwtSecret, {
        subject: user.Username,
        expiresIn: '7d',
        algorithm: 'HS256'
    });
};

//** Routing to the login page where it will post user information */
exports = (router) => {
    console.log('hej')
    router.post('/login', (req,res) => { authenticate( 'local',
     {session: false},
  (error, user, info) => {
      res.header('Access-Control-Allow-Origin', '*');
    if (error || !user) {
        return res.status(400).json({
            message: 'Something is not right',
            user:user
        });
  }
  req.login(user,{ session: false}, (error) => {
      if (error) {
        res.send(error);
      }
     let token = generateJWTToken(user.toJSON());
      return res.json({ user,token });
    });
})(req, res);
});
}