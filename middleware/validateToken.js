const jwt = require("jsonwebtoken");
//middleware to validate jwt token
const validateToken = async (req, res, next) => {
  try {
    let header = req.headers["authorization"];
    if (header && header.startsWith("Bearer")) {
      token = header.split(" ")[1].toString();
      console.log(token);
      if (token) {
        //verifying token with the secret key
        jwt.verify(token, process.env.SECRET, (err, valid) => {
         console.log(err+'sfgsdf');
          if (err) res.status(404).json("Authorisation failed");
          else {
      
            req.userId = valid.id;

            next();

          }
        });
      }
    }
  } catch (err) {
    // internal error response
    res.status(500).json({ error: err.message });
  }
};
module.exports = validateToken;
