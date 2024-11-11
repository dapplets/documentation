---
id: transferable-context
---

# TransferableContext

| Name            |              Type               |   Default   | Description                                                                                                                                                                                          |
| :-------------- | :-----------------------------: | :---------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`namespace`** |            `string`             |             | Specifies the namespace to work with. Options: `'engine'`, `'mweb'` or site specific parser config, for example `'bos.dapplets.near/parser/twitter'`. By default, all available namespaces are used. |
| **`type`**      |            `string`             |             | Specifies the context type in the selected namespace to work with. Is equal to the `contextType` of `Target`.                                                                                        |
| **`level`**     |         `ContextLevel`          | `'default'` | Options: `'default'`, `'system'`, `'callout'`. Specifies the z-axis position (z-index) relative to the extension's UI components.                                                                    |
| **`id`**        |       `string` or `null`        |             | Specifies the exact context identifier.                                                                                                                                                              |
| **`parsed`**    |              `any`              |             | Context payload.                                                                                                                                                                                     |
| **`parent`**    | `TransferableContext` or `null` |             | Parent context.                                                                                                                                                                                      |
| **`isVisible`** |            `boolean`            |             | If `true`, only visible contexts will be active.                                                                                                                                                     |
