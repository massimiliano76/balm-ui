```html
<ui-form-field>
  <ui-radio></ui-radio>
  <label>Radio</label>
</ui-form-field>
```

#### Props

| Name                | Type           | Default | Description                                                                   |
| ------------------- | -------------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number | `null`  | Mandatory.                                                                    |
| `id`                | string         | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `name`              | string         | `null`  | The _name_ attribute of the `<input>`.                                        |
| `value`             | string, number | `null`  | The _value_ attribute of the `<input>`.                                       |
| `disabled`          | boolean        | `false` | Styles the radio button as a disabled radio button.                           |
| `attrs`             | object         | `null`  | Other attributes for `<input>`.                                               |

#### Events

| Name     | Type                              | Description                             |
| -------- | --------------------------------- | --------------------------------------- |
| `change` | `function(model: string\|number)` | Emits when the radio button is changed. |

> NOTE: If you are not using `v-model`, you should listen for the radio using `@change` and update the `model` prop.

```html
// Automatic
<ui-radio v-model="value"></ui-radio>

// Manual
<ui-radio :model="value" @change="$balmUI.onChange('value', $event)"></ui-radio>
```
