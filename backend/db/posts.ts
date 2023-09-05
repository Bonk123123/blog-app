import mongoose from 'mongoose'
import { CommentSchema } from './comment'
import { UserSchema } from './users'

const PostSchema = new mongoose.Schema({
    user: { type: UserSchema, required: true },
    postname: { type: String, required: true },
    image: { type: String, default: '' },
    date: { type: String, required: true },
    content: { type: [String], default: [] },
    comments: { type: [CommentSchema] }
})

export const PostModel = mongoose.model('Post', PostSchema)

export const getPosts = () => PostModel.find()
export const getPostById = (id: string) => PostModel.findById({ id })
export const createPost = (values: Record<string, any>) => new PostModel(values).save().then(post => post.toObject())
export const deletePostById = (id: string) => PostModel.findOneAndDelete({ _id: id })
export const updatePostById = (id: string, values: Record<string, any>) => PostModel.findByIdAndUpdate(id, values)