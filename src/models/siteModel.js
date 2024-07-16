const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.getAllsitesForSiteAdmin = async (data) => {
    const {userId} = data;
    const sites = await prisma.umSite.findMany({
        where: {
            user_id: userId,
        },
    });
    return sites;
}
