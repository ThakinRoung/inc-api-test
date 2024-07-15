const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.updateLogoutTimestamp = async (data) => {
    const { user_id, site_id } = req.params;
    const session = await prisma.umSession.update({
        where: {
            user_id_site_id: {
                user_id: parseInt(user_id),
                site_id: parseInt(site_id),
            },
        },
        data: {
            logout_at: new Date(),
        },
    });
}