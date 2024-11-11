---
id: latch-props
---

# LatchProps

| Name                    |                Type                 | Description                                                                                                                |
| :---------------------- | :---------------------------------: | :------------------------------------------------------------------------------------------------------------------------- |
| **`context`**           |        `TransferableContext`        | The metadata and payload of the selected context. See [TransferableContext](/docs/api/picker.md#transferablecontext)       |
| **`variant`**           |           `TLatchVariant`           | Options: `'current'` or `'parent'` or `'child'`. Describes the relationship of the current context to the hovered context. |
| **`contextDimensions`** | `{ width: number; height: number }` | The dimensions of the context.                                                                                             |
