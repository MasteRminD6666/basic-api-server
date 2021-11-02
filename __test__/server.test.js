'use strict';


const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('my  testing unit',() => {
  it('is there a Home route :✈️😍', async() => {
    const response  = await request.get('/')
    expect(response.status).toEqual(200)
  })

  it('is there a 404  hadling  :😕', async() => {
    const response  = await request.get('/invaildURL')
    expect(response.status).toEqual(404)
  })

})