const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// hopefully on delete cascade on every relations
module.exports.deleteUserBySiteId = async (data) => {

    const { userId } = data;
    const deletedUser = await prisma.umAuthentication.delete({
        where: {
            user_id: userId,
            site_id: siteId,
        },
    });
    return deletedUser;
}