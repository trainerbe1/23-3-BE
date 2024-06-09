import 'dotenv/config';
import express from "express";
import { serve, setup } from "swagger-ui-express";
import authRoutes from "./routes/auth_routes.js";
import jsonFile from '../swagger-output.json' assert { type: 'json' };
import shoppingListRoutes from "./routes/shopping_list_routes.js";
import appConfig from "./common/app.js";
import shoppingListItemRoutes from './routes/shopping_list_item_routes.js';
import recipeRoutes from "./routes/recipe_routes.js";
import cors from "cors";
import mealPlannerRoutes from './routes/meal_planner_routes.js';
import favouriteRoutes from './routes/favourite_routes.js';
import userRoutes from './routes/user_routes.js';
import categoryRoutes from './routes/category_routes.js';

const app = express()

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use(categoryRoutes);
app.use(userRoutes);
app.use(favouriteRoutes);
app.use(mealPlannerRoutes);
app.use(recipeRoutes);
app.use(shoppingListItemRoutes);
app.use(shoppingListRoutes);
app.use(authRoutes);
app.use('/swagger', serve, setup(jsonFile));

app.listen(appConfig.appPort, () => {
  console.log(`Server is running!\nAPI documentation: http://localhost:${appConfig.appPort}/swagger`)
})
