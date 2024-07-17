const siteModel = require("../models/siteModel");

module.exports.getAdminSites = async (req, res) => {
    const userId = res.locals.user_id;
    const data = { userId };
    try {
        const sites = await siteModel.getAllsitesForSiteAdmin(data);
        return res.status(200).json(sites);
    } catch (error) {
        return res.status(400).json({ message: 'Sites not found' });
    }
}

module.exports.crateSite = async (req, res) => {
    const { siteName, siteUrl, siteDescription, siteApiKey, siteAdminUserId } = req.body;
    const data = { siteName, siteUrl, siteDescription, siteApiKey, siteAdminUserId };
    try {
        const site = await siteModel.createSite(data);
        return res.status(200).json({ message: 'Site created successfully' });
    } catch (error) {
        return res.status(400).json({ message: 'Site not created' });
    }
}