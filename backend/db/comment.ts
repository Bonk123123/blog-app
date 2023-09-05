import mongoose from 'mongoose'
import { SubCommentSchema } from './subcomment'
import { UserSchema } from './users'

export const CommentSchema = new mongoose.Schema({
    user: { type: UserSchema, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
    subcomments: { type: [SubCommentSchema], default: [] }
})


export const CommentModel = mongoose.model('comment', CommentSchema)

//export const getCommentsPost = () => CommentModel.find()
//export const getCommentPostById = (id: string) => CommentModel.findById({ id })
//export const createCommentPost = (values: Record<string, any>) => new CommentModel(values).save().then(comment => comment.toObject())
//export const deleteCommentPostById = (id: string) => CommentModel.findOneAndDelete({ _id: id })