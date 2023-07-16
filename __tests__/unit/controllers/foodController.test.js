const chai = require('chai');
const { expect } = chai;
const foodController = require('../../../src/controller/foodController');
const sinon = require('sinon');
const foodService = require('../../../src/services/foodServices');
const sinonChai = require('sinon-chai');
const { serviceMock, serviceMockFail } = require('./mocks/foodController.mock');

chai.use(sinonChai);

const req = {};
const res = {};

describe('Teste unitário da camada contoller', () => {

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => sinon.restore());

  it('Testando findFood com sucesso', async () => {
    sinon.stub(foodService, 'findFoods').resolves(serviceMock);
    await foodController.findFoods(req, res);// chamou a controller mocka a service;

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ message: serviceMock.message });
  });

  it('Testando findFood com erro', async () => {
    sinon.stub(foodService, 'findFoods').resolves(undefined);
    await foodController.findFoods(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'Internal Server Error!' });
  });

  it('Testando findFood com falha', async () => {
    sinon.stub(foodService, 'findFoods').resolves(serviceMockFail);
    await foodController.findFoods(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: serviceMockFail.message });
  })
});