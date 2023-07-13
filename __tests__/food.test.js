const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../src/App');
const { Food } = require('../src/database/models')

chai.use(chaiHttp);

const fooodMock = [
  { dataValues: { id: 1, name: "Pizza" } },
  { dataValues: { id: 2, name: "Hamburguer" } },
  { dataValues: { id: 3, name: "Hot dog" } },
  { dataValues: { id: 4, name: "Chocolate" } },
  { dataValues: { id: 5, name: "Sorvete" } }
]

const foodEmpty = [];
const foodRespDiference = {};

describe('Testando a API de comidas.', () => {// usando somente mocha
  afterEach(() => sinon.restore());

  it('Testando se a rota GET /food retorna um array de comidas.', async () => {// usando somente mocha
    sinon.stub(Food, 'findAll').resolves(fooodMock);

    const { body, status } = await chai.request(app).get('/food');// chaiHttp(chai.request)
    
    expect(status).to.eq(200);
    expect(body.message).to.deep.eq(fooodMock.map(({ dataValues }) => dataValues));
    // expect(true).to.eq(true);//usando chai
  });

  it('Testando se a rota GET /food retorna uma mensagem de erro caso não tenha comidas.', async () => {
    sinon.stub(Food, 'findAll').resolves(foodEmpty);

    const { status, body } = await chai.request(app).get('/food');

    expect(status).to.eq(404);
    expect(body.message).to.eq('No Foods!');
  });

  it('Testando se a rota GET /food retorna uma mensagem de erro caso o retorno do banco não seja um array.', async () => {
    sinon.stub(Food, 'findAll').resolves(foodRespDiference);

    const { status, body } = await chai.request(app).get('/food');

    expect(status).to.eq(500);
    expect(body.message).to.eq('Internal Server Error!');
  });
})