export default (req, res, next) {
    console.log('Auth Middleware');
    next()
}