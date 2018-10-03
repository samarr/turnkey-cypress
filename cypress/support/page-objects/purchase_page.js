const headerText = 'h2';
const iternaryinfo = 'body > :nth-child(2)';

export const purchasepage = {
     verify_header_text (from,to) {
       cy.contains(headerText, 'Your flight from '+from+' to '+to+' has been reserved.')
     },

     validate_flight_booking_data(airline, flightno, price, fee_tax, total_cost)
     {
       cy.contains('Airline: '+airline);
       cy.contains('Flight Number: '+flightno);
       cy.contains('Price: '+price);
       cy.contains('Arbitrary Fees and Taxes: '+fee_tax);
       cy.contains('Total Cost: '+total_cost);
     }
    }
