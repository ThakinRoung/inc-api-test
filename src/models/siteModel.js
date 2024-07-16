const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.getAllsitesForSiteAdmin = async (user_id) => {
    const sites = await prisma.umSite.findMany({
        where: {
            user_id: parseInt(user_id),
        },
    });
    return sites;
}
