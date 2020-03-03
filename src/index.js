import app from "./middlewares/app";
import invalidRouteMiddleware from "./middlewares/invalidroute";
import approutes from "./routes/app.routes";
import config from "config";

const PORT = process.env.PORT || config.get("port");

// Configure approutes in routes folder
app.use(approutes);

// Middleware to handle invalid route
app.use(invalidRouteMiddleware);

// Error middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, (req, res) => {
  console.log(`app running on port ${PORT}`);
});
