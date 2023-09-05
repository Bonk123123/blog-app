import crypto from 'crypto'

const SECRET_TOKEN = process.env.SECRET ? process.env.SECRET : 'ARTURIO'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET_TOKEN).digest('hex')
}