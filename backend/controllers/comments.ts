import express from 'express'

import { CommentModel } from '../db/comment'
import { getPostById } from '../db/posts'
import dayjs from 'dayjs'
import { getUserById } from '../db/users'

export const getAllPostComments = async (req: express.Request, res: express.Response) => {
    try {
        const { postid } = req.params
        const post = await getPostById(postid)

        if (!post) return res.sendStatus(400)

        return res.sendStatus(200).json(post.comments).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const createCommentPost = async (req: express.Request, res: express.Response) => {
    try {
        const { userid, content, img } = req.body
        const { postid } = req.params
        const post = await getPostById(postid)

        const user = getUserById(userid)

        if (!post || !user) return res.sendStatus(400)
        
        const newComment = new CommentModel({
            user,
            image: img,
            date: dayjs().toString(),
            content,
        })

        post.comments.push(newComment)

        const comment = await post.save().then(comment => comment.toObject())

        return res.sendStatus(200).json(comment).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const deletePostComment = async (req: express.Request, res: express.Response) => {
    try {
        const { postid, id } = req.params

        const post = await getPostById(postid)

        if (!post) return res.sendStatus(400)

        post.comments.pull({ _id: id })

        await post.save()

        //const comment = CommentModel.findByIdAndDelete(id)

        return res.sendStatus(200).json(post.comments).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

