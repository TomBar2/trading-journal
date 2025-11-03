import bcrypt from 'bcrypt'

import * as usersService from '../services/usersService.js'

/***

 ***/
export async function getUsers(req, res) {
    try {
        const users = await usersService.getUsersService()
        res.json(users)
    } catch (error) {
        console.log('[Users Controller] getUsers:', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function createUser(req, res) {
    try {
        const { email: userEmail, password: userPassword } = req.body
        const hashedPassword = await bcrypt.hash(userPassword, 8)
        const newUser = await usersService.createUserService(userEmail, hashedPassword)
        res.status(201).json(newUser)
    } catch (error) {
        console.log('[Users Controller] createUser:', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function getUserById(req, res) {
    try {
        const { id } = req.params
        const userId = parseInt(id)
        const user = await usersService.getUserByIdService(userId)
        res.status(200).json(user)
    } catch (error) {
        console.log('[Users Controller] getUserById:', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function getUserTrades(req, res) {
    try {
        const { id } = req.params
        const userId = parseInt(id)

        const trades = await usersService.getUserTradesService(userId)
        res.status(200).json(trades)
    } catch (error) {
        console.log('[Users Controller] getUserTrades:', error)
        res.status(500).json({ error: error })
    }
}

/***

 ***/
export async function deleteUser(req, res) {
    try {
        const { id } = req.params
        const userId = parseInt(id)
        const deletedUser = await usersService.deleteUserService(userId)
        res.status(200).json(deletedUser)
    } catch (error) {
        console.log('[Users Controller] deleteUser:', error)
        res.status(500).json({ error: error })
    }
}
