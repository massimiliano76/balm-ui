```html
<ui-dialog><!-- the dialog child components --></ui-dialog>
```

> NOTE: `<ui-dialog>` must be including a `<ui-button>`.

#### Props

| Name               | Type    | Default | Description                                                                                                      |
| ------------------ | ------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `open` (`v-model`) | boolean | `false` | Mandatory.                                                                                                       |
| `closable`         | boolean | `true`  | Closes the dialog, when a user actions on the accept or cancel button.                                           |
| `maskClosable`     | boolean | `false` | Closes the dialog, when the dialog backdrop is clicked.                                                          |
| `noBackdrop`       | boolean | `false` | Hides the dialog backdrop.                                                                                       |
| `resetScroll`      | boolean | `false` | Reset scroll bar, when the dialog is closed.                                                                     |
| `scrollable`       | boolean | `false` | Optional. Applied automatically when the dialog has overflowing content to warrant scrolling.                    |
| `stacked`          | boolean | `false` | Optional. Applied automatically when the dialog's action buttons can't fit on a single line and must be stacked. |

#### Slots

| Name      | Slots | Description                                         |
| --------- | ----- | --------------------------------------------------- |
| `default` |       | The default slot holds the dialog child components. |

**Dialog child components:**

- `<ui-dialog-title>`
- `<ui-dialog-content>`
- `<ui-dialog-actions>`

#### Events

| Name      | Type                        | Description                               |
| --------- | --------------------------- | ----------------------------------------- |
| `change`  | `function(open: boolean)`   | Emits when the dialog is changed.         |
| `close`   | `function()`                | Emits when the dialog is closed.          |
| `confirm` | `function(result: boolean)` | Emits when the action buttons is clicked. |
| `accept`  | `function()`                | Emits when the accept button is clicked.  |
| `cancel`  | `function()`                | Emits when the cancel button is clicked.  |

> NOTE: If you are not using `v-model`, you should listen for the dialog using `@change` and update the `open` prop.

```html
// Automatic
<ui-dialog v-model="open"></ui-dialog>

// Manual
<ui-dialog :open="open" @change="$balmUI.onChange('open', $event)"></ui-dialog>
```
