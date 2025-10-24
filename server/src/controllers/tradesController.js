import * as tradesService from '../services/tradesServices.js'

export async function getTrades(req, res) {
    try {
        const trades = await tradesService.getTradesService()
        res.json(trades);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function createTrade(req, res) {
    try {
        const newTrade = await tradesService.createTradeService(req.body);
        res.status(201).json(newTrade);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function getTradeById(req, res) {
    try {
        const {id} = req.params
        const tradeId = parseInt(id);
        const trade = await tradesService.getTradeByIdService(tradeId);
        res.status(200).json(trade);
    } catch (error) {
        console.log("User Controller - getUserById", error);
        res.status(500).json({error: error});
    }
}