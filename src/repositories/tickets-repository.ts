import { prisma } from "@/config";
import { notFoundError } from "@/errors";

async function create(ticketTypeId: number, userId: number){
    const enrollment = (await prisma.enrollment.findMany({
        orderBy:[
           { createdAt: 'desc'}
        ],
        where:{
            userId
        }
    }))[0]
    if (!enrollment) throw notFoundError()
    return await prisma.ticket.create({
        data:{
            ticketTypeId,
            enrollmentId: enrollment.id,
            status: 'RESERVED'
        },
        include:{
            TicketType: true
        }
    })
}

async function getAll(userId: number){
    const result = await prisma.enrollment.findFirst({
        include:{
            Ticket: {
                include: {
                    TicketType: true
                }
            }
        },
        where:{
            userId
        }
    })
    return result
}

async function getTypes (){
    return await prisma.ticketType.findMany()
}
export const ticketsRepository = {create, getAll, getTypes}