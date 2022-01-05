describe('utilisateur connecte, commande differentes', () => {   


    it ('commande 19h00 Emporter', () => {
        cy.visit('https://demo.aldemia.fr/')
        cy.wait(1000)
        cy.get('#menu-toggle').click()
        cy.get('#menu-item-28912 > a').click() 
        cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
        .should('have.value', 'cedaldemia@yopmail.com')
        cy.get('#rpress_user_pass').type('Dominique1987')
        cy.get('#rpress_login_submit').click()
        cy.get('#menu-toggle > .menu-label').click()
        cy.get('#menu-item-28852 > a').click()
        cy.get('#rpress_purchase_28945').click()
        cy.get('#nav-pickup-tab').click()
        cy.get('#rpress-pickup-hours').select('19:00')
        cy.get('#rpress-pickup-hours').should('have.value', '19:00')
        cy.get('.btn').click()
        //Feuilletés poulet bacon
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        //Pizza au poulet epice
        cy.get('#rpress_purchase_28948').click()
        cy.get('#bacon').check({force: true})
        cy.get('.center').click()
        //9 nuggets de poulet
        cy.get('#rpress_purchase_28963').click()
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        cy.get('.rpress_checkout > a').click()
        cy.get('#rpress-purchase-button').click()
        //numero de commande #31179
        //Montant total 29euros
        cy.wait(1000)
        cy.get('#menu-toggle').click()
        cy.get('#menu-item-28852 > a').click()    
    })
    
    it('commande 19h00 Livraison', () => {
    
        cy.get('#rpress_purchase_28960').click()
        cy.get('#rpress-delivery-hours').select('19:00')
        cy.get('#rpress-delivery-hours').should('have.value', '19:00')
        cy.get('.btn').click()
        cy.get('#pepites-de-chocolat').click({force: true})
        cy.get('.qtyplus').click()
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        //sandwich au thon
        cy.get('#rpress_purchase_28955').click()
        cy.get('.qtyplus').click()
        cy.get('.qtyplus').click()
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        cy.get('.rpress_checkout > a').click()
        cy.get('#rpress-purchase-button').click({force: true})
        cy.get('.rp-col-md-4 > .rpress_checkout_register_login').click()
        cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
        .should('have.value', 'cedaldemia@yopmail.com')
        cy.get('#rpress_user_pass').type('Dominique1987')
        cy.get('#rpress-user-login-submit > .rpress-submit').click()
        cy.get('#rpress_checkout_order_details > :nth-child(2) > #rpress-street-address').type('10 chemin des boutaraines')
        cy.get('#rpress-city').type('villiers sur marne')
        cy.get('#rpress-postcode').type('94350')
        cy.get('#rpress-purchase-button').click({force: true})
        cy.wait(1000)
        cy.get('#menu-toggle').click()
        cy.get('#menu-item-28852 > a').click()
    })
    
    it('commande 20h00 Livraison', () => {
        //milshake fraise
        cy.get('#rpress_purchase_28935').click()
        cy.get('#rpress-delivery-hours').select('20:00')
        cy.get('#rpress-delivery-hours').should('have.value', '20:00')
        cy.get('.btn').click()
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        //milshake choco
        cy.get('#rpress_purchase_28926').click()
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        cy.get('.rpress_checkout > a').click()
        cy.get('.rp-col-md-4 > .rpress_checkout_register_login').click()
        cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
        .should('have.value', 'cedaldemia@yopmail.com')
        cy.get('#rpress_user_pass').type('Dominique1987')
        cy.get('#rpress-user-login-submit > .rpress-submit').click()
        cy.get('#rpress_checkout_order_details > :nth-child(2) > #rpress-street-address').type('10 chemin des boutaraines')
        cy.get('#rpress-city').type('villiers sur marne')
        cy.get('#rpress-postcode').type('94350')
        cy.get('#rpress-purchase-button').click({force: true})
        cy.wait(1000)
        cy.get('#menu-toggle').click()
        cy.get('#menu-item-28852 > a').click()
    
        })
    it('commande 19h30 livraisson', () => {
            //poulet kerala
            cy.get('#rpress_purchase_28966').click()
            cy.get('#rpress-delivery-hours').select('19:30')
            cy.get('#rpress-delivery-hours').should('have.value', '19:30')
            cy.get('.btn').click()
            cy.get('.qtyplus').click()
            cy.get('.qtyplus').click()
            cy.get('.qtyplus').click()
            cy.get('.qtyplus').click()
            cy.get('.center').click()
            cy.get('.rpress_checkout > a').click()
            cy.get('.rp-col-md-4 > .rpress_checkout_register_login').click()
            cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
            .should('have.value', 'cedaldemia@yopmail.com')
            cy.get('#rpress_user_pass').type('Dominique1987')
            cy.get('#rpress-user-login-submit .rpress-submit').click()
            cy.get('#rpress_checkout_order_details > :nth-child(2) > #rpress-street-address').type('10 chemin des boutaraines')
            cy.get('#rpress-city').type('villiers sur marne')
            cy.get('#rpress-postcode').type('94350')
            cy.get('#rpress-purchase-button').click({force: true})
            cy.wait(1000)
            cy.get('#menu-toggle').click()
            cy.get('#menu-item-28852 > a').click()
    
        }) 
    it('commande 19h30 Emporter', () => {
        //Milshake tagalong
        cy.get('#rpress_purchase_28938').click()
        cy.get('#nav-pickup-tab')
        cy.get('#rpress-delivery-hours').select('19:30')
        cy.get('#rpress-delivery-hours').should('have.value', '19:30')
        cy.get('.btn').click()
        cy.get('#double-pepites-de-chocolat').click({force: true})
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        cy.get('.rpress_checkout > a').click()
        cy.get('.rp-col-md-4 > .rpress_checkout_register_login').click()
        cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
        .should('have.value', 'cedaldemia@yopmail.com')
        cy.get('#rpress_user_pass').type('Dominique1987')
        cy.get('#rpress-user-login-submit > .rpress-submit').click()
        cy.get('#rpress_checkout_order_details > :nth-child(2) > #rpress-street-address').type('10 chemin des boutaraines')
        cy.get('#rpress-city').type('villiers sur marne')
        cy.get('#rpress-postcode').type('94350')
        cy.get('#rpress-purchase-button').click()
       // cy.get('#rpress-purchase-button').click({force: true})
        cy.wait(1000)
        cy.get('#menu-toggle').click()
        cy.get('#menu-item-28852 > a').click()
        })
    
    it('commande n1 20h30 Emporter', () => {
        //sandwich jambon
        cy.get('#rpress_purchase_28952').click()
        cy.get('#nav-pickup-tab').click()
        cy.get('#rpress-pickup-hours').select('20:30')
        cy.get('#rpress-pickup-hours').should('have.value', '20:30')
        cy.get('.btn').click()
        cy.get('#fromage').check({force: true})
        cy.get('#noix-de-macadamia-au-chocolat-blanc').click({force: true})
        cy.get('.qtyplus').click()
        cy.get('.qtyplus').click()
        cy.get('.qtyplus').click()
        cy.get('.center').click()
        cy.get('.rpress_checkout > a').click()
        cy.get('.rp-col-md-4 > .rpress_checkout_register_login').click()
        cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
        .should('have.value', 'cedaldemia@yopmail.com')
        cy.get('#rpress_user_pass').type('Dominique1987')
        cy.get('#rpress-user-login-submit > .rpress-submit').click()
        cy.wait(4000)
        cy.get('#card_address').type('10 chemin des boutaraines')
        cy.get('#card_city').type('villiers sur marne')
        cy.get('#card_city').type('94350')
        cy.get('#rpress-purchase-button').click()
       // cy.get('#rpress-purchase-button').click({force: true})
        cy.wait(1000)
        cy.get('#menu-toggle').click()
        cy.get('#menu-item-28852 > a').click()
        })
    
    it ('commande n2 20h30 Emporter', () => {
      //Milshake tagalong
        cy.get('#rpress_purchase_28938').click()
        cy.get('#nav-pickup-tab').click()
        cy.get('#rpress-pickup-hours').select('20:30')
        cy.get('#rpress-pickup-hours').should('have.value', '20:30')
        cy.get('.btn')
        cy.get('.qtyplus').click({force: true})
        cy.get('.center').click({force: true})
        cy.get('.rpress_checkout > a').click()
        cy.get('.rp-col-md-4 > .rpress_checkout_register_login').click()
        cy.get('#rpress_user_login').type('cedaldemia@yopmail.com')
        .should('have.value', 'cedaldemia@yopmail.com')
        cy.get('#rpress_user_pass').type('Dominique1987')
        cy.get('#rpress-user-login-submit > .rpress-submit').click()
        cy.wait(1000)
        cy.get('#card_address').type('10 chemin des boutaraines')
        cy.get('#card_city').type('villiers sur marne')
        cy.get('#card_zip').type('94350')
        cy.get('#rpress-purchase-button').click()
        cy.wait(4000)
        
        
       })
    /*it("lecture du fichier",()=>{
            cy.fixture("Injection_QAFOOD.csv").then(contenue=>{ 
            let benoit = contenue.split('\r\n').map((ligne)=>{
                    return ligne.split(";")
                })
                for (let index = 1; index < benoit.length-1; index++) {
                    const ligne = benoit[index];
                    
                   cy.contains(ligne [0]).click()
                    ligne[6]="le montant depuis la page "+index
                   ligne[7]="le montant depuis la page "+index
               


                     cy.log(ligne)

                }*/



            })
        
