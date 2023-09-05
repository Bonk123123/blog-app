import express from 'express'

import authentication from './authentication'
import users from './users'
import posts from './posts'
import comments from './comments'
import subcomments from './subcomments'

const router = express.Router()

export default (): express.Router => {
    authentication(router)
    users(router)
    posts(router)
    comments(router)
    subcomments(router)

    return router
}