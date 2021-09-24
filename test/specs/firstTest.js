describe('Ecommerce application', ()=> {
    it('Login Fail Page Title', ()=> {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
     
        const loginText = $("input[id=username]")
        const passwordText = $("#password")
        const loginButton = $("#signInBtn")
        const errorAlert = $(".alert-danger")
        
        loginText.setValue("rahulshettyacademy")
        passwordText.setValue("rahulshettyacademy")
        loginButton.click()
        // browser.waitUntil(() => loginButton.getAttribute('value') === 'Sign In',{
        //     timeout:4000, timeoutMsg:"Error message did not appear"
        // } )

        browser.waitUntil(() => errorAlert.isDisplayed(),{
            timeout:4000, timeoutMsg:"Error message did not appear"
        } )
        console.log(errorAlert.getText() + " is the Text")
        expect(errorAlert).toHaveTextContaining("Incorrect username/password")
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    })

    it('Login Success Page Title', ()=> {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
     
        const loginText = $("input[id=username]")
        const passwordText = $("#password")
        const loginButton = $("#signInBtn")
        const navBar = $("div#navbarResponsive") 

        
        loginText.setValue("rahulshettyacademy")
        passwordText.setValue("learning")
        loginButton.click()       

        browser.waitUntil(() => navBar.isDisplayed(),{
            timeout:10000, timeoutMsg:"NAVBAR"
        } )
        expect(browser).toHaveTitleContaining("ProtoCommerce")
    })
})