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
        const adminCheckbox = $("label.customradio input[value=admin]") 
        const userCheckbox = $("label.customradio input[value=user]") 
        const popUpOkButton = $("#okayBtn") 
        const popUpCancelButton = $("#cancelBtn") 
        const formSelect = $("select.form-control")



        
        loginText.setValue("rahulshettyacademy")
        passwordText.setValue("learning")
         
        adminCheckbox.click()     
        userCheckbox.click()     
        popUpCancelButton.click() 

        browser.waitUntil(() => userCheckbox.isSelected() === false,{
            timeout:4000, timeoutMsg:"User radio is selected"
        } )
        userCheckbox.click() 
        popUpOkButton.click()     

        expect(popUpOkButton).not.toBeDisplayed()

        formSelect.selectByAttribute("value","consult")
        loginButton.click() 

    
        navBar.waitForExist()

        expect(browser).toHaveTitleContaining("ProtoCommerce")
    })
})