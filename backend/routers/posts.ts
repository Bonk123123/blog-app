import express from 'express'

import { getAllPosts, getPost, deletePost, updatePost } from '../controllers/posts'
import { isAuthenticated, isOwner } from '../middlewares'

export default (router: express.Router) => {
    router.get('/posts', getAllPosts)
    router.get('/posts/:id', getPost)
    router.delete('/posts/:id', isAuthenticated, deletePost)
    router.patch('/posts/:id', isAuthenticated, updatePost)
}