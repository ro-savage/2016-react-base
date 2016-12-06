# ReactList
The `ReactList` component displays a list of items that can be added to.
All data is kept in local state and therefore disappears when you change page.

This component is used as an example of keeping state directly in a component.

<!-- example -->
```jsx
<ReactList />
```

## Properties
*Contains no props*

## Extra details
### STATE IN REACT
The ReactList Component is an example of keeping state within a component itself,
as opposed to Redux.
State should be kept in the component itself when it will only ever be local, some examples of
this would be:
 -> A open/close accordion, the accordion is the only thing that needs to know if its open or not
 -> A form field, a form field only needs to knows it own value/sate until the value is saved.
 -> Dropdown being open or closed

 Updating React Component state is much faster than updating redux state.

 Read more: https://github.com/reactjs/redux/issues/1287
 Dan Abramov: 'The rule of thumb is: do whatever is less awkward.'

