'usr strict'

const keytokenModel = require("../models/keytoken.model")

class KeyTokenService {
    static createKeyToken = async ({shopId, publicKey}) => {
        try {
            const  publicKeyString = publicKey.toString()
            const tokens = await keytokenModel.create({
                shop: shopId,
                publicKey: publicKeyString
            })

            return tokens ? tokens.publicKey : null
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService