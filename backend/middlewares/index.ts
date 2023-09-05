import express, { NextFunction } from 'express'
import { get, merge } from 'lodash'

import { getUserById, getUserBySessionToken } from '../db/users'

export const isAdmin = async (req: express.Request, res: express.Response, next: NextFunction) => {
    const { id } = req.params
    
    const currentUser = await getUserById(id)

    if (!currentUser) return res.sendStatus(400)

    if (currentUser.role === 'admin') next()

    return res.sendStatus(400)
}

export const isModerator = async (req: express.Request, res: express.Response, next: NextFunction) => {
    const { id } = req.params
    
    const currentUser = await getUserById(id)

    if (!currentUser) return res.sendStatus(400)

    if (currentUser.role === 'moderator' || currentUser.role === 'admin') next()

    return res.sendStatus(400)
}

export const isOwner = async (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const currentUserId = get(req, 'identity._id') as string

        if (!currentUserId) return res.sendStatus(403)
        if (currentUserId.toString() !== id) return res.sendStatus(403)

        next()
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        const { sessionToken } = req.cookies['AUTH']

        if (!sessionToken) return res.sendStatus(403)

        const existingUser = await getUserBySessionToken(sessionToken)

        if (!existingUser) return res.sendStatus(403)

        merge(req, { identity: existingUser })

        return next()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}