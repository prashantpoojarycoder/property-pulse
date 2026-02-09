import { Express } from "express";
import { Server } from "http";
import authRoutes from './routes/auth.routes.ts';
import propertyRoutes from "./routes/property.routes.ts";



export async function registerRoutes(
  Server: Server,
  app: Express
): Promise<Server> {
  app.use('/api/auth', authRoutes);
  app.use("/api/properties", propertyRoutes);
  return Server;
}
