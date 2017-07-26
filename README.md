# reactive-authentication-service-AJS4
A simple reactive login form using @Output()
I'm using reactive forms because of flexibility and simplicity on unit-test than template-driven forms.

Further infomation:
https://angular.io/guide/reactive-forms


## Description
- The form consists of two fields: an email and a password field. 
- Both are handled by a reactive form created in the component.
- The email address can be preloaded using an input property
- FormBuilder is inside the constructor, and includes the validations
- Instead of register changes adn bind events, I'm going to be using AJS4 ngOnChanges lifecycle hook so when the
email or password get change they will trigger the ngOnChanges.
- The setValue it will 



