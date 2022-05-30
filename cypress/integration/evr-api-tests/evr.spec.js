import { bodyValue } from './common.js';
import { updateBodyValue } from './common.js';

const writeFile = './cypress/fixtures/example.json'

describe('Api testing worldentities', () => {

    //Create and write to file
    it('POST worldentities item', () => {
        cy.request({
            method: 'POST',
            url: '/entities/', 
            body : bodyValue})
        .as('entitiesRequest'); 
        cy.get('@entitiesRequest').then(entities => {
            expect(entities.status).to.eq(201);
            cy.wrap(entities.body).should('deep.include', bodyValue);
            cy.writeFile(writeFile, entities.body);
        });
    });

    //Fetch and compare old body from file
    it('GET fetches worldentities items ', () => {
        cy.request(`/entities/${bodyValue.id}`)
        .its('body')
        .then((body) => {
            cy.fixture('example.json').should('deep.equal', body)
        })
    });

    //update and DO NOT write to file
    it('PUT worldentities item', () => {
        cy.request('PUT', `/entities/${bodyValue.id}`, updateBodyValue
        ).as('entitiesRequest');
        cy.get('@entitiesRequest').then(entities => {
            expect(entities.status).to.eq(200);
        });
    });

    //read from old file, shoudl NOT be equal
    it('GET fetches worldentities items ', () => {
        cy.request(`/entities/${bodyValue.id}`)
        .its('body')
        .then((body) => {
            const q = body.name;
        })
        .then((body) => {
            cy.fixture('example.json').should('not.deep.equal', body)
        })
    });
 });