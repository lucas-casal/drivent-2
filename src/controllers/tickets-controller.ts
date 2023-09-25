import { AuthenticatedRequest } from "@/middlewares";
import { ticketsService } from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

async function create (req: AuthenticatedRequest, res: Response){
    const result = await ticketsService.create(req.body, req.userId)
    res.send(result).status(httpStatus.CREATED)
}


async function getAll(req: AuthenticatedRequest, res: Response){
    const result = await ticketsService.getAll(req.userId)
    res.send(result).status(httpStatus.OK)
}

async function getTypes(_req: AuthenticatedRequest, res: Response){
    const result = await ticketsService.getTypes()
    res.send(result).status(httpStatus.OK)
}
export const ticketsController = {
    create,
    getAll,
    getTypes
}