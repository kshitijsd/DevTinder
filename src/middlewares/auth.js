const authenticate = (req, res, next) => {
    console.log("Admin Accessed");
    const token = "xyz";
    const isAuthenticated = token === "xyz"; // Example authentication check
    if (!isAuthenticated) {
        return res.status(403).send('Access denied');
    } else {
        next();
    } 
};
module.exports = { authenticate };