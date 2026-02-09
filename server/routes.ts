import { Express } from "express";
import { Server } from "http";
import authRoutes from './routes/auth.routes';
import propertyRoutes from "./routes/property.routes";



export async function registerRoutes(
  Server: Server,
  app: Express
): Promise<Server> {
  app.use('/api/auth', authRoutes);
  app.use("/api/properties", propertyRoutes);
  return Server;
}
