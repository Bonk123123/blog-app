import mongoose from 'mongoose'

export const SubCommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, default: '' },
    date: { type: String, required: true },
    content: { type: String, required: true },
})

export const SubCommentModel = mongoose.model('subcomment', SubCommentSchema)

//export const getSubComments = () => SubCommentModel.find()
//export const getSubCommentById = (id: string) => SubCommentModel.findById({ id })
//export const createSubComment = (values: Record<string, any>) => new SubCommentModel(values).save().then(subcomment => subcomment.toObject())
//export const deleteSubCommentById = (id: string) => SubCommentModel.findOneAndDelete({ _id: id })