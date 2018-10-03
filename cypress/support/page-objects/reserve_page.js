const headerText = 'h3';
const links = 'thead > tr > :nth-child(3)';
var hText = '';

export const reservepage = {
     verify_header_text (from,to) {
       cy.contains(headerText, 'Flights from '+from+' to '+to+':')
     },

     click_to_choose_flight_via_flight_no(flightno)
     {
        cy.get('td').contains(flightno).prev('td').find('input').click()
     }
    }
