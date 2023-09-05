import express from 'express'

import { deletePostById, getPostById, getPosts } from '../db/posts'

export const getAllPosts = async (req: express.Request, res: express.Response) => {
    try {
        const posts = await getPosts()

        return res.sendStatus(200).json(posts).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const getPost = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const post = await getPostById(id)

        if (!post) return res.sendStatus(400)

        return res.sendStatus(200).json(post).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const createPost = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { postname, content, img } = req.body

        if (!postname || !content || !img) return res.sendStatus(400)

        const post = await getPostById(id)

        if (!post) return res.sendStatus(400)

        post.postname = postname
        post.content = content
        post.image = img
        
        await post.save()

        return res.sendStatus(200).json(post).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const deletePost = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params

        const deletePost = await deletePostById(id)

        return res.sendStatus(200).json(deletePost).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const updatePost = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { postname, content, img } = req.body

        if (!postname || !content || !img) return res.sendStatus(400)

        const post = await getPostById(id)

        if (!post) return res.sendStatus(400)

        post.postname = postname
        post.content = content
        post.image = img
        
        await post.save()

        return res.sendStatus(200).json(post).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}