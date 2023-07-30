/// <reference types="cypress" />

/// JSON fixture file can be loaded directly using
const requiredExample = require('../fixtures/example')

context('Files', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/files')
  })

  beforeEach(() => {
    // load example.json fixture file and store
    // in the test context object
    cy.fixture('example.json').as('example')
  })

  it('cy.fixture() - load a fixture', () => {
    // https://on.cypress.io/fixture

    // Instead of writing a response inline you can
    cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })

  it('cy.fixture() or require - load a fixture', function () {
    // we are inside the "function () { ... }"
    expect(this.example, 'fixture in the test context')
      .to.deep.equal(requiredExample)

    // or use "cy.wrap" and "should('deep.equal', ...)" assertion
    cy.wrap(this.example)
      .should('deep.equal', requiredExample)
  })

  it('cy.readFile() - read file contents', () => {
    // https://on.cypress.io/readfile

    // You can read a file and yield its contents
    cy.readFile('cypress.json').then((json) => {
      expect(json).to.be.an('object')
    })
  })

  it('cy.writeFile() - write to a file', () => {
    // https://on.cypress.io/writefile

    // You can write to a file
    cy.request('https://jsonplaceholder.cypress.io/users')
      .then((response) => {
        cy.writeFile('cypress/fixtures/users.json', response.body)
      })

    cy.fixture('users').should((users) => {
      expect(users[0].name).to.exist
    })

    // JavaScript arrays and objects are stringified
    cy.writeFile('cypress/fixtures/profile.json', {
      id: 8739,
      name: 'Jane',
      email: 'jane@example.com',
    })

    cy.fixture('profile').should((profile) => {
      expect(profile.name).to.eq('Jane')
    })
  })
})
