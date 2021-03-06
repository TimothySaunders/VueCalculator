// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })

  it('should update the display with the result of the previous operation', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    //should display number just clicked at this stage
    cy.get('.display').should('contain', '2');
    cy.get('#operator_subtract').click();
    //should display resut of previous operation at this stage
    cy.get('.display').should('contain', '4');
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1')
  })

  it('should give expected result for negative numbers as output', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-6')
  })

  it('should give expected result for decimal number as output', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.25')
  })

  it('should give expected result for very large number as input&output', () => {
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '777777777777777')
  })

  it('should give specific error "DivideByZero Error" when trying to divide by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'DivideByZero Error')
  })


})

