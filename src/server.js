require("./models"); //esta importacion es importante siempre importar en el index del server

const app = require("./app");
const sequelize = require("./utils/connection");
const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    sequelize.sync();
    // sequelize.sync({ force: true });

    console.log("DB connected");
    app.listen(PORT);
    console.log(`👉 Server running on port ${PORT}`);
    console.log(`👉 Link http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
