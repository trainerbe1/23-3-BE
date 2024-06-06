import express from "express";
import { serve, setup } from "swagger-ui-express";
import authRouter from "./routes/auth.js";
import jsonFile from '../swagger-output.json' assert { type: 'json' };

const app = express()

/* Routes */

/* Middlewares */
app.use(authRouter)
app.use('/swagger', serve, setup(jsonFile))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
})
