const sessionModel = require("../models/sessionModel");

module.exports.updateLogoutTimestamp = async (req, res) => {
  try {
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

    if (!session) {
      res.status(404).json({ message: "Session not found" });
    } else {
      res.status(200).json({ message: "Logout timestamp updated successfully" });
    }
  } catch (error) {
    console.error("Error updating logout timestamp:", error);
    res.status(500).json({ message: "Failed to update logout timestamp" });
  }
};

