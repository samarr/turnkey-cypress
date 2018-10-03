const departurecity = '[name="fromPort"]';
const destinationcity = '[name="toPort"]';
const submitBtn = '[type="Submit"]';


export const homepage = {
    select_departure_city (city) {
        console.log(city);
        cy.get(departurecity).select(city);
    },

    select_destination_city (city) {
        cy.get(destinationcity).select(city);
    },

    click_on_submit_btn(){
        cy.get(submitBtn).click();
    },
    submit_flight_search_request(depcity,destcity,bsubmit)
    {
      this.select_departure_city(depcity);
      this.select_destination_city(destcity);

      if(bsubmit==true)
      {
        this.click_on_submit_btn();
      }
    }

}
