const app = require("./middlewares/app");
const invalidRouteMiddleware = require("./middlewares/invalidroute");
const approutes = require("./routes/app.routes");
const config = require("config");
const PORT = process.env.PORT || config.get("port");

// Configure approutes in routes folder
app.use(approutes);

// Middleware to handle invalid route
app.use(invalidRouteMiddleware);

app.listen(PORT, (req, res) => {
  console.log(`app running on port ${PORT}`);
});
