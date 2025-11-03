import * as tradesService from '../services/tradesService.js'

/***

 ***/
export async function getTrades(req, res) {
    try {
        const trades = await tradesService.getTradesService()
        res.json(trades)
    } catch (error) {
        console.log('[Trade Controller] getTrades', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function createTrade(req, res) {
    try {
        const newTrade = await tradesService.createTradeService(req.body)
        res.status(201).json(newTrade)
    } catch (error) {
        console.log('[Trade Controller] createTrade', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function getTradeById(req, res) {
    try {
        const { id } = req.params
        const tradeId = parseInt(id)
        const trade = await tradesService.getTradeByIdService(tradeId)
        res.status(200).json(trade)
    } catch (error) {
        console.log('[Trade Controller] getUserById', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function updateTrade(req, res) {
    try {
        const { id } = req.params
        const tradeId = parseInt(id)
        const updatedData = req.body

        const updatedTrade = await tradesService.updateTradeService(tradeId, updatedData)
        res.status(200).json(updatedTrade)
    } catch (error) {
        console.log('[Trades Controller] updateTrade:', error)
        res.status(500).json({ error: 'Failed to update trade' })
    }
}

/***

 ***/
export async function deleteTrade(req, res) {
    try {
        const { id } = req.params
        const tradeId = parseInt(id)
        const deletedTrade = await tradesService.deleteTradeService(tradeId)
        res.status(200).json(deletedTrade)
    } catch (error) {
        console.log('[Trades Controller] deleteTrade:', error)
        res.status(500).json({ error: error })
    }
}
