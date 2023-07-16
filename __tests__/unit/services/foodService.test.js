const { expect } = require('chai');
const serviceFood = require('../../../src/services/foodServices');
const { Food } = require('../../../src/database/models');
const sinon = require('sinon');
const { serviceMockSucess, serviceMockFail } = require('./mocks/foodService.mock');

describe('Testando a camada serviceFood', () => {
  afterEach(() => sinon.restore());

  it('Testando findFoods com sucesso', async () => {
    sinon.stub(Food, 'findAll').resolves(serviceMockSucess);
    const { type, message } = await serviceFood.findFoods();

    expect(type).to.eq(null);
    expect(message).to.deep.eq([{ id: 2, name: 'Frango' }]);
  });

  it('Testando findFoods se não receber comida', async () => {
    sinon.stub(Food, 'findAll').resolves(serviceMockFail);
    const { type, message } = await serviceFood.findFoods();

    expect(type).to.eq('error');
    expect(message).to.eq('No Foods!');
  });
});