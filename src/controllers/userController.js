const User = require('../models/UserModel');

module.exports.deleteUserBySuperAdmin = async (req, res) => {
    const { userId, siteId } = req.params;
    const data = { userId, siteId };
    try {
        const deletedUser = await User.deleteUserBySuperAdmin(data);
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(400).json({ message: 'User not deleted' });
    }
}

module.exports.deleteUserBySiteAdmin = async (req, res) => {
    const { userId, siteId } = req.params;
    const data = { userId, siteId };
    try {
        const deletedUser = await User.deleteUserBySuperAdmin(data);
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(400).json({ message: 'User not deleted' });
    }
}