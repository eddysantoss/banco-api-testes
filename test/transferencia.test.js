const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it ('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10,00', async () => {
            //Capturar o token
            const respostalogin = await request(process.env.Base_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                        'username': 'julio.lima',
                        'senha': '123456'
                      })

            const token = respostalogin.body.token
            
            
            const resposta = await request(process.env.Base_URL)
                .post(' /transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                  })

                  expect(resposta.status).to.equal(200);



        })

        it ('Deve retornar sucesso com 201 quando o valor da transferencia for abaixo de R$10,00', async () => {
            const respostalogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                        'username': 'julio.lima',
                        'senha': '123456'
                      })

            const token = respostalogin.body.token
            
            
            const resposta = await request('http://localhost:3000')
                .post(' /transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                  })

                  expect(resposta.status).to.equal(200);
        
        })


    })

})