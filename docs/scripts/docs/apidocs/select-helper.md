```html
<ui-select-helper><!-- the helper text --></ui-select-helper>
```

#### Props

| Name       | Type            | Default    | Description                                        |
| ---------- | --------------- | ---------- | -------------------------------------------------- |
| `id`       | string          | (required) | Mandatory.                                         |
| `visible`  | boolean         | `false`    | Makes the helper text permanently visible.         |
| `validMsg` | boolean, string | `false`    | Indicates the helper text is a validation message. |

#### Slots

| Name      | Slots | Description                                                         |
| --------- | ----- | ------------------------------------------------------------------- |
| `default` |       | The default slot holds the select helper text and can contain HTML. |
