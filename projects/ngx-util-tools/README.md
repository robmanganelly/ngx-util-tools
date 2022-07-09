# NgxUtilTools

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Features:

### Pipes

* `fragment`: This pipe allows you to restrict a string in a field, to avoid text overflow. It takes a range value to indicate how many characters will be allowed in the result. If the range length is less than the actual value length, the pipe appends '...' to the fragment.

  ```html
  <span>{{username | fragment 5}}</span>  <!--usern...-->
  <span>{{user | fragment 5}}</span>  <!--user-->
  <span>{{user | fragment a}}</span>  <!--username  the wrong value 'a' is ignored-->
  <span>{{user | fragment }}</span>  <!--username  the undefined value  is ignored-->
  <span>{{user | fragment -5}}</span>  <!--Error. the pipe does not support negative numbers-->


  ``` 
