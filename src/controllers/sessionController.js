const sessionModel = require("../models/sessionModel");

module.exports.updateLogoutTimestamp = async (req, res) => {
  try {
    const { user_id, site_id } = req.params;
    const session = await sessionModel.updateLogoutTimestamp({ user_id, site_id });

    if (!session) {
      res.status(404).json({ message: "Session not found" });
    } else {
      // clearing auth cookie
      res.clearCookie('auth_token', {
        httpOnly: true,
        // secure: true // Set to true if using HTTPS
      });
      res.status(200).json({ message: "Logout timestamp updated successfully" });
    }
  } catch (error) {
    console.error("Error updating logout timestamp:", error);
    res.status(500).json({ message: "Failed to update logout timestamp" });
  }
};

