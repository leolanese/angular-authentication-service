# Reactive Authentication Service using Angular4+
A simple reactive login form using @Output()
I'm using reactive forms because of speed, flexibility and simplicity on unit-test than template-driven forms.

Further infomation:
https://angular.io/guide/reactive-forms


## Description
- The form consists of two fields: an email and a password field. 
- Both are handled by a reactive form created in the component.
- The email address can be preloaded using an input property
- FormBuilder is inside the constructor, and includes the validations
- Instead of register changes adn bind events, I'm going to be using AJS4 ngOnChanges lifecycle hook so when the
email or password get change they will trigger the ngOnChanges (further information: https://angular.io/guide/lifecycle-hooks)
- Using the [formGroup] property will trigger the form handling with the components FormGroup 
- We will listen to form submissions with ngSubmit

## Unit-test
- Isolated tests (Focus component's logic. Component doesn't need to be compiled. Faster tests.)
- Shallow tests (To detect errors inside the template. Component needs to be compiled. Slower test (due to compilation step))

Further information:
https://angular.io/guide/testing#shallow-component-test


