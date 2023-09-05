import express from 'express'

import { isAuthenticated, isOwner } from '../middlewares'
import { createCommentPost, getAllPostComments, deletePostComment } from '../controllers/comments'

export default (router: express.Router) => {
    router.get('/posts/:postid/comments', getAllPostComments)
    router.post('/posts/:postid/comments', isAuthenticated, createCommentPost)
    router.delete('/posts/:postid/comments/:id', isAuthenticated, deletePostComment)
}