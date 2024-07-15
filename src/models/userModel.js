const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.getAllUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

module.exports.getUserById = async (data) => {
  const { user_id } = data;
  const user = await prisma.users.findUnique({
    where: {
      user_id: parseInt(user_id),
    },
  });
  return user;
};
