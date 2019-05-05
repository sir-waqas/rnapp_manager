1. Init rnapp_manager app
2. Setup git and push the code
3. npm install --save react-redux redux firebase
4. npm audit fix //in case of any warnings
5. Create src/App.js //Boiler Plate with Redux imports and Provider
6. Create reducers/index.js //Dummy reducer for App.js to provide to Provider createStore function
7. Create a firebase project on firebase console
8. Enable auth login with user id and password
9. Copy the init script and paste it in your App (The root component) in it's component will mount method
10. Create a LoginForm.js just like before
11. Use existing components to make a login form using Input, CustomButton etc controls just like before :)

12. Create the EmailInput event Handler
13. Create a new action creater in actions/index.js
14. Wireup the action creater with the email input component //Half done
15. Create reducers/AuthReducer.js and wire it up in reducers/index.js
16. Create actions/types.js in order to use named variables rather than direct stings in the string types
17. Get it imported in the actions/index.js
18. Get it imported in the reducers/AuthReducer.js as well
19. Make sure you return a new object instead of updating using the param ref as they both reference the same object and therefore nothing will be triggered as a change rather reutnr {...state, email:action.payload}
20. Let's do it again mapStateToProps in LoginForm.js and wire it with connect
21. Also set the value of the input control to use this.props.email as it is all wired up

22. Do the 12 to 21 steps for password field as well
