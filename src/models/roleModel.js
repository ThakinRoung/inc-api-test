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

// this thing need to be checked after obtaining the sql from assest management team
module.exports.checkPermissionByUserIdAndSiteId = async (data) => {
    const { siteId, userId } = data;

    // Get the rolePermissionId from umUserSiteRolePermission
    const userSiteRolePermission = await prisma.umUserSiteRolePermission.findFirst({
        where: {
            user_id: userId,
            site_id: siteId,
        },
    });

    if (!userSiteRolePermission) {
        return null; // or handle the case where no matching record is found
    }

    const rolePermissionId = userSiteRolePermission.role_permission_id;

    // Get the permissionId from umRolePermission using rolePermissionId
    const rolePermission = await prisma.umRolePermission.findFirst({
        where: {
            id: rolePermissionId,
        },
    });

    if (!rolePermission) {
        return null; // or handle the case where no matching record is found
    }

    const permissionId = rolePermission.permission_id;

    // Get the permission record from umPermission using permissionId
    const permission = await prisma.umPermission.findFirst({
        where: {
            id: permissionId,
        },
    });

    return permission;
}
