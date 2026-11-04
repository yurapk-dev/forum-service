import UserAccount from '../models/userAccount.model.js';

const authentication = async (req, res, next) => {
    if (req.path !== '/account/register' && !req.path.startsWith('/forum/posts')) {
        const token = req.headers.authorization;
        if (!token || !token.startsWith('Basic ')) {
            return res.status(401).json({
                message: 'Authentication token is missing'
            });
        }
        const credentials = Buffer.from(token.split(' ')[1], 'base64').toString('utf-8');
        const [login, password] = credentials.split(':');
        const userAccount = await UserAccount.findById(login);
        if (!userAccount || !(await userAccount.comparePassword(password))) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }
        req.headers.authorization = '';
        req.principal = {
            userName: login,
            roles: userAccount.roles
        }
    }
    return next();
}
export default authentication;

