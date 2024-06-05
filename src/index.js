import express from "express";
import appConfig from "./commons/app.js";
import authRouters from "./routers/auth_routers.js";

const app = express();

app.use(authRouters);

app.listen(3000, () => {
    console.log(`App running on port ${appConfig.appPort}`);
});