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

module.exports.createSite = async (data) => {
    const {siteName, siteUrl, siteDescription, siteApiKey, siteAdminUserId} = data;
    const site = await prisma.umSite.create({
        data: {
            site_name: siteName,
            site_url: siteUrl,
            site_description: siteDescription,
            site_api_key: siteApiKey,
            user_id: siteAdminUserId,
        },
    });
    return site;
}