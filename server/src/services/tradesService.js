import prismaClient from '../db/prismaClient.js';

/***

 ***/
export async function getTradesService() {
    return prismaClient.trades.findMany();
}

/***

 ***/
export async function createTradeService(tradeData) {
    // Prisma will only use the properties defined in trades model.
    // Extra properties in req.body are ignored unless we specifically reference them
    // ToDo - Add must have fields check before creating a new trade, think whether it belongs here or in the controller
    // ToDo - Either uppercase all symbols or lowercase them before inserting to DB
    // ToDo - Make sure stop-loss price is lower than entry price and take-profit is higher than entry-price
    return prismaClient.trades.create({
        data: tradeData,
    });
}

/***

 ***/
export async function getTradeByIdService(tradeId) {
    return await prismaClient.trades.findUnique({
        where: {id: tradeId},
    });
}

/***

 ***/
export async function updateTradeService(tradeId, updatedData) {
    return prismaClient.trades.update({
        where: {id: tradeId},
        data: updatedData,
    })
}

/***

 ***/
export async function deleteTradeService(tradeId) {
    return await prismaClient.trades.delete({
        where: {id: tradeId},
    });
}