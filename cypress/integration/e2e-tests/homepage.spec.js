import { homepage } from '../../support/page-objects/home_page';
import { reservepage } from '../../support/page-objects/reserve_page'
import { purchasepage } from '../../support/page-objects/purchase_page'


describe('Home page test',() => {
    beforeEach(function () {
        cy.visit('/');
    });

    it('Plan a flight search', function () {
        var depature_cityname = 'Boston';
        var destination_cityname = 'New York';
        var expectedPageUrlString = 'reserve.php';
        var flightno = '4346';
        var airlinename='Lufthansa';
        var price = '233.98';
        var fee_tax = '514.76';
        var totalcost = '748.74';
        homepage.submit_flight_search_request(depature_cityname,destination_cityname,true);
        cy.url().should('contains','reserve.php')
        reservepage.verify_header_text(depature_cityname,destination_cityname);
        reservepage.click_to_choose_flight_via_flight_no(flightno);
        cy.url().should('contains','purchase.php');
        purchasepage.verify_header_text(depature_cityname,destination_cityname);
        purchasepage.validate_flight_booking_data(airlinename, flightno, price, fee_tax, totalcost);

    });

  })
