# List
The `List` component displays a nicely formatted list.
It accepts either an `array` of strings or a child element of `<li>` elements.

<!-- example -->
```jsx
<List items={['item 1', 'item 2']} />

<List>
  <li><CustomComponent /></li>
  <li><CustomComponent /></li>
</List>
```

## Properties

| Name              | Type       | Required   | Default         | Description|
|:-----|:-----|:-----|:-----|:-----|
| `items`        | `array` of `strings`  | false     |          | Items to be displayed |
| child element       | `element`      | false    |             | elements already in li format |
