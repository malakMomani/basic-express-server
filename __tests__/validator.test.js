'use strict';

const validator = require("../src/middleware/validator");
const server = require('../src/server.js');

const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Testing validator', () => {
    it('handles not name provided', async() => {
        let response = await serverRequest.get('/person');
        expect(response.status).toEqual(500);
    });
    it('handles empty query', async() => {
        let response = await serverRequest.get('/person?name=');
        expect(response.status).toEqual(500);
    });
    it('handle person with query route', async() => {
        let response = await serverRequest.get('/person?name=malak');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("{\"name\":\"malak\"}");
    });
});

// //I wanted to validate the next function alone 
// describe('Validator middleware', () => {
//     let validatorSpy;
//     let req = {},
//         res = {},
//         next = jest.fn();

//     beforeEach(() => {
//         validatorSpy = jest.spyOn(server, 'next').mockImplementation();
//         console.log((validatorSpy));
//     });

//     afterEach(() => {
//         validatorSpy.mockRestore();
//     });

//     it('Validate the query', () => {
//         validator(req, res, next);
//         expect(validatorSpy).toHaveBeenCalledWith('Invalid Name input');

//     });
// });