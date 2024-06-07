import 'dotenv/config';
import express from "express";
import { serve, setup } from "swagger-ui-express";
import authRoutes from "./routes/auth_routes.js";
import jsonFile from '../swagger-output.json' assert { type: 'json' };
import shoppingListRoutes from "./routes/shopping_list_routes.js";
import appConfig from "./common/app.js";

const app = express()

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use(shoppingListRoutes)
app.use(authRoutes)
app.use('/swagger', serve, setup(jsonFile))

app.listen(appConfig.appPort, () => {
  console.log(`Server is running!\nAPI documentation: http://localhost:${appConfig.appPort}/swagger`)
})
