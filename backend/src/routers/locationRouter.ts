import { Router } from "express";
import locationControllers from "../controllers/location/locationControllers";

export function locationRouter() {
  const router = Router();

  router.get("/", locationControllers.fetchLocation);
  router.get("/trends", locationControllers.getLocationTrends);
  router.get("/search", locationControllers.searchLocation);

  return router;
}
