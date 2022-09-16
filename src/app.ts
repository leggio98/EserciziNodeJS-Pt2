import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";

const app = express();

const prisma = new PrismaClient();

app.get("/planets", async (request, response) => {
   
    const planets = await prisma.planet.findMany();

    response.json(planets);
});

// Request examples

// //GET /planets  - retrieve all the planets
// app.get("/planets", (request, response) => {});

// //GET /planets/:id   -retrieve a specific planet
// app.get("/planet/:id", (request, response) => {});

// //POST /planets   -Create a new planet
// app.post("/planets", (request, response) => {});

// //PUT /planets/:id   -Replace an existing planet
// app.put("/planets/:id", (request, response) => {});

// //DELETE /planets/:id    - Delete an existing planet
// app.delete("/planets/:id", (request, response) =>{});

// //POST /planets/:id/photo - Add a photo for a planet
// app.post("/planets/:id/photo", (request, response)=>{})

export default app;
