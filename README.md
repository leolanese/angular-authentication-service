# Angular Reactive Authentication Service

> A simple reactive login form using @Output()
I'm using "Reactive Forms" because of speed, flexibility and simplicity on unit-test rather than "Template-driven forms".

Further infomation:<br>
https://angular.io/guide/reactive-forms


## Description
- The form consists of two fields: an 'email' and a 'password' field. 
- Both are handled by a reactive form created in the component.
- The email address can be preloaded using an input property
- FormBuilder is inside the constructor, and includes the validations. Further information: https://angular.io/api/forms/FormBuilder
- Instead of register changes adn bind events, I'm going to be using AJS4 ngOnChanges lifecycle hook so when the
email or password get change they will trigger the ngOnChanges (further information: https://angular.io/guide/lifecycle-hooks)
- Using the [formGroup] property will trigger the form handling with the components FormGroup 
- We will listen to form submissions with ngSubmit

## Unit-test
- Isolated tests (Focus component's logic. Component doesn't need to be compiled. Faster tests.)
- Shallow tests (To detect errors inside the template. Component needs to be compiled. Slower test (due to compilation step) but test more parts)
- Integration Tests (Simil to Shallow test. Also needs navigation for all the elements)

Further information:<br>
https://angular.io/guide/testing#shallow-component-test

---
### :100: <i>Thanks!</i>

> { I'm `Leo Lanese`,<br>
   'Building Inspiring Responsive `Reactive Solutions`',<br>
   '`London, UK`' }<br>

##### :radio_button: Twitter: <a href="https://twitter.com/LeoLaneseltd" target="_blank">@LeoLaneseltd</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com
