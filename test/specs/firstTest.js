describe('Ecommerce application', ()=> {
    it('Login Page Title', ()=> {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
    })
})