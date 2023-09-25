import { notFoundError, requestError } from "@/errors"
import { ticketsRepository } from "@/repositories/tickets-repository"

type body = {ticketTypeId: number}
async function create (body: body, userId: number) {
    const {ticketTypeId} = body
    console.log(ticketTypeId)
    if (!ticketTypeId) throw requestError(400, 'não foi enviado o tipo de ticket')
    if (!userId) throw notFoundError()
    
    const result = await ticketsRepository.create(ticketTypeId, userId)
    return result
 
}

async function getAll(userId: number){
    const result = await ticketsRepository.getAll(userId)
    if (!result.Ticket) throw notFoundError()

    return result.Ticket

}

async function getTypes(){
    const result = await ticketsRepository.getTypes()
    let response = result
    if (!result){
        response = []
    }
    return response
}

export const ticketsService = {
    create,
    getAll,
    getTypes
}