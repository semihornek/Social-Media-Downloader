import express from "express";
import bodyParser from "body-parser";
import { pathName } from "libs";

import { youtubeRoutes, instagramRoutes, facebookRoutes, twitterRoutes } from "./routes/index";

const app = express();

/* Middlewares */
// use body parser to parse the incoming data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));

// Cors Setup
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

/**
 * Route Handling
 */
app.use("/youtube", youtubeRoutes);
app.use("/instagram", instagramRoutes);
app.use("/facebook", facebookRoutes);
app.use("/twitter", twitterRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server started listening at port ${port}`);
  console.log(pathName());
});
