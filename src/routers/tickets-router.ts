import { ticketsController } from "@/controllers/tickets-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router()

ticketsRouter.post('/', authenticateToken, ticketsController.create)
ticketsRouter.get('/', authenticateToken, ticketsController.getAll)
ticketsRouter.get('/types',authenticateToken, ticketsController.getTypes)

export {ticketsRouter};