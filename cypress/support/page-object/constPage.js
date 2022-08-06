class constPage {
   
get text() {
   return cy.get('input[name="sm-form-name"]');
}

get email() {
   return cy.get('input[name="sm-form-email"]');

}

get check(){
   return cy.get('[type="checkbox"]');
}

get loginNewsletter(){
   return cy.get('[class="btn"]')
   

}

newsLetter(){
   this.loginNewsletter.click();
}


clickChekbox(){
   this.check.check();

}


clickText() {
     this.text.type("dadad dadad");

   }



emailText() {
   this.email.type("glupek@wp.pl");


}





}





export default new constPage();