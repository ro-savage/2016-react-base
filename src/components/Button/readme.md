# Button
The `Button` component displays a nicely formatted button.
It accepts either a 'text' prop or a child element, and a function to fire onClick

<!-- example -->
```jsx
<Button text="MyButton" onClick={() => {}} />

<Button onClick={() => {}}>
  MyButton
</Button>
```

## Properties

| Name              | Type       | Required   | Default         | Description|
|:-----|:-----|:-----|:-----|:-----|
| `text`        | `string`  | false     |          | Text to be displayed |
| child element       | `element` / `string`      | false    |             | child element.
Preferable a string or int |
| `onClick`       | `func`      | true    |             | A function to fire when the button is
clicked |


## Extra details

This component also styles the button
