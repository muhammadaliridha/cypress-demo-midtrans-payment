describe('payment midtrans',()=>{
    beforeEach('visit link',()=>{
        cy.viewport(1280, 720)
        cy.visit('https://demo.midtrans.com/')
    })

    it('payment successfull',()=>{
        cy.intercept('POST','https://demo.midtrans.com/charge').as('chargeAPI')
        cy.get('.buy').click()
        cy.get('.cart-checkout').click()

        //use iframe plugin to switch to iframe
        cy.frameLoaded('#snap-midtrans').should('be.visible')
        //cy.iframe('#snap-midtrans').contains('Virtual account').click()

        //because the cypress runner failed to get the requested element in the iframe, it uses the API
        cy.wait('@chargeAPI').then((paymentXHR)=>{
            const paymentToken = paymentXHR.response.body.token
            cy.log('token nya '+ paymentToken)

            cy.request({
                method : 'POST',
                url :'https://app.sandbox.midtrans.com/snap/v2/transactions/'+paymentToken+'/charge',
                body : {
                    'payment_type' : 'bca_va'
                }
            }).then((vaXHR)=>{
                const vaNumber = vaXHR.body.bca_va_number
                cy.log('va number nya : '+ vaNumber)

                //move to new tab to make payment to simulator sandbox midtrans
                cy.window().then((win)=>{
                    win.open('https://simulator.sandbox.midtrans.com/bca/va/index')
                    win.location.href = 'https://simulator.sandbox.midtrans.com/bca/va/index'
                })

                cy.get('#inputMerchantId').type(vaNumber)
                cy.get('[type="submit"]').click()
                cy.get('[type="submit"]').click()
                cy.get('.success').should('contain.text','successful')
    
                cy.window().then((win)=>{
                    win.location.href='https://demo.midtrans.com/'
                })
            })
        })
    })
})