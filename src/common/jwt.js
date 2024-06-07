const jwt = {
    exp: process.env.JWT_EXPIRATION,
    secret: process.env.JWT_SECRET,
}

export default jwt;