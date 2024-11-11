---
id: latch-props
---

# LatchProps

| Name                    |                          Type                           | Description                                                                                                                |
| :---------------------- | :-----------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------- |
| **`context`**           | [`TransferableContext`](/docs/api/transferable-context) | The metadata and payload of the selected context.                                                                          |
| **`variant`**           |                     `TLatchVariant`                     | Options: `'current'` or `'parent'` or `'child'`. Describes the relationship of the current context to the hovered context. |
| **`contextDimensions`** |           `{ width: number; height: number }`           | The dimensions of the context.                                                                                             |
