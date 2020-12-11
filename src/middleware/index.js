const jwt = require('jsonwebtoken')

const { TOKEN_SECRET } = process.env

function isAuth(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) return res.sendStatus(401)
  const token = authorization.trim().split(' ')[1]

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user
    next()
  })
}

module.exports = isAuth
