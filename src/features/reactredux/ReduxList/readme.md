# ReduxListContainer
The `ReduxListContainer` component displays a list of items kept in redux.
It contains a button and form to add new items to the list.

 This is an example of how to create a 'connected' / 'container' component that interacts with Redux

<!-- example -->
```jsx
<ReduxListContainer />
```

## Properties
None

## Extra details
Container components link our redux data store with our react components.
mapStateToProps allows us to take data from the redux store to display in the components.
When it is passed to connect, it will pass the object down as its props.

When the data modified or created from a component is going be shared acros multiple components
or persist across pages it must be saved to redux.
We do this with the mapDispatchToProps which created a function to be passed as a prop to the
React component which then dispatches and action and the data.

If the data is only ever going to be used inside a single component, and does not need to
persist it should be saved no in redux but in the react component state.
See: https://github.com/reactjs/redux/issues/1287


# ReduxList
The `ReduxList` component displays a list of items, and contains a form input that accepts
a call back to save the input  value.

This component should usually be displayed through the use of ReduxListContainer

<!-- example -->
```jsx
<ReduxList items={['one', 'two']} save={() => {}}/>
```

## Properties

| Name              | Type       | Required   | Default         | Description|
|:-----|:-----|:-----|:-----|:-----|
| `items`        | `array`  | false     |          | List of strings to be displayed |
| `save`       | `func`     | false    |             | A function that recieves the input value |
