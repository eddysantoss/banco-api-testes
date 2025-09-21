const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha) => {
    const bodyLogin = {...postLogin}
    const respostalogin = await request(process.env.Base_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)

            return respostalogin.body.token
            
}

module.exports = {
    obterToken
}