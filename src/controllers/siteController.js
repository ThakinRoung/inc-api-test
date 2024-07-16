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