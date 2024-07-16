const roleModel = require("../models/roleModel");

module.exports.isSiteAdmin = async (req, res, next) => {
    const {siteId} = req.params;
    const roleId = res.locals.role_id;
    const siteAdminUserid = res.locals.user_id
    const data = {siteId, roleId, siteAdminUserid};
        try {
            const isSiteAdmin = await roleModel.checkSiteAdminBySiteId(data);
            if (isSiteAdmin) {
                next();
            } else {
                return res.status(401).json({ message: 'Not authorized' });
            }
        }catch (error) {
            return res.status(401).json({ message: 'Not authorized' });
        }
}

module.exports.isSuperAdmin = async (req, res, next) => {
    const roleId = res.locals.role_id;
    const superAdminUserid = res.locals.user_id
    const data = {roleId, superAdminUserid};
    try {
        const isSuperAdmin = await roleModel.checkSuperAdmin(data);
        if (isSuperAdmin) {
            next();
        } else {
            return res.status(401).json({ message: 'Not authorized' });
        }
    }catch (error) {
        return res.status(401).json({ message: 'Not authorized' });
    }
}

module.exports.UpdateUserRole = async (req, res) => {
    const {siteId, userId } = req.params;
    const {roleId} = req.body;
    const data = {siteId, userId, roleId};
    try {
        const updatedRole = await roleModel.updateRoleByUserId(data);
        return res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
        return res.status(400).json({ message: 'Role not updated' });
    }
}