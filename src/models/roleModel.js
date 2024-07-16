const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.checkSiteAdminBySiteId = async (data) => {
    const {siteId, roleId, siteAdminUserId} = data;
    const isSiteAdmin = await prisma.umUserSiteRole.findFirst({
        where: {
            user_id : siteAdminUserId,
            site_id: siteId,
            role: roleId,
        },
    });

    return isSiteAdmin;
}

module.exports.checkSuperAdmin = async (data) => {
    const {roleId, superAdminUserId} = data;
    const isSuperAdmin = await prisma.umUserSiteRole.findFirst({
        where: {
            user_id : superAdminUserId,
            role: roleId,
        },
    });
    return isSuperAdmin;
}

module.exports.updateRoleByUserId = async (data) => {
    const {siteId, userId, roleId} = data;
    const updatedRole = await prisma.umUserSiteRole.update({
        where: {
            user_id: userId,
            site_id: siteId,
        },
        data: {
            role: roleId,
        },
    });
    return updatedRole;
}