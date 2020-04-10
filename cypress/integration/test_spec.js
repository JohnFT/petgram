/* global describe, it, expect, cy */

// eslint-disable-next-line prefer-arrow-callback
describe('Petgram', function () {
  // eslint-disable-next-line prefer-arrow-callback
  it('app funciona', function () {
    cy.visit('/')
  })
  // eslint-disable-next-line prefer-arrow-callback
  it('hay pet', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  // eslint-disable-next-line prefer-arrow-callback
  it('si podemps navegar', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })
})
