const serviceMock = { type: null, message: [{ id: 1, name: 'Frango no pote' }] };
const serviceMockFail = { type: 'error', message: 'No Foods!' };

module.exports = {
  serviceMock,
  serviceMockFail,
}