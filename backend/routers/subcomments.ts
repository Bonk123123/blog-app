import express from 'express'

import { isAuthenticated, isOwner } from '../middlewares'
import { createSubCommentPost, getAllPostSubComments, deletePostSubComment } from '../controllers/subcomments'

export default (router: express.Router) => {
    router.get('/posts/:postid/comments/:commentid/subcomments', createSubCommentPost)
    router.post('/posts/:postid/comments/:commentid/subcomments', isAuthenticated, getAllPostSubComments)
    router.delete('/posts/:postid/comments/:commentid/subcomments/:id', isAuthenticated, deletePostSubComment)
}