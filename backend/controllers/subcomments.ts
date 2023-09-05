import express from 'express'

import { SubCommentModel } from '../db/subcomment'
import { getPostById } from '../db/posts'
import dayjs from 'dayjs'
import { getUserById, getUserByUsername } from '../db/users'

export const getAllPostSubComments = async (req: express.Request, res: express.Response) => {
    try {
        const { postid, commentid } = req.params
        const post = await getPostById(postid)

        if (!post) return res.sendStatus(400)

        const subcomments = post.comments.find((comment) => (comment._id)?.toString() === commentid)?.subcomments

        return res.sendStatus(200).json(subcomments).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const createSubCommentPost = async (req: express.Request, res: express.Response) => {
    try {
        const { userid, content, img } = req.body
        const { postid, commentid } = req.params

        const post = await getPostById(postid)

        const user = getUserById(userid)

        if (!post || !user) return res.sendStatus(400)
        
        const newSubComment = new SubCommentModel({
            user,
            image: img,
            date: dayjs().toString(),
            content,
        })

        post.comments.find((comment) => (comment._id)?.toString() === commentid)?.subcomments.push(newSubComment)

        await post.save()

        return res.sendStatus(200).json(post.comments).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const deletePostSubComment = async (req: express.Request, res: express.Response) => {
    try {
        const { postid, commentid, id } = req.params

        const post = await getPostById(postid)

        if (!post) return res.sendStatus(400)

        post.comments.find((comment) => (comment._id)?.toString() === commentid)?.subcomments.pull({ _id: id })

        await post.save()

        //const comment = CommentModel.findByIdAndDelete(id)

        return res.sendStatus(200).json(post.comments).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

