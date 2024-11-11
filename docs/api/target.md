---
id: target
---

# Target

| Name              |                                Type                                 | Optional | Description                                                                                                                                                                                          |
| :---------------- | :-----------------------------------------------------------------: | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`namespace`**   |                              `string`                               |          | Specifies the namespace to work with. Options: `'engine'`, `'mweb'` or site specific parser config, for example `'bos.dapplets.near/parser/twitter'`. By default, all available namespaces are used. |
| **`contextType`** |                              `string`                               |          | Specifies the context type in the selected namespace to work with. Is equal to the `type` of [`TransferableContext`](/docs/api/transferable-context).                                                |
| **`if`**          | `Record<string, `[`TargetCondition`](/docs/api/target-condition)`>` |          | Describes a condition that must be met for a target to be used.                                                                                                                                      |
| **`isVisible`**   |                              `boolean`                              |    ✔️    | If `true`, only visible contexts will be active.                                                                                                                                                     |
| **`limit`**       |                              `number`                               |    ✔️    | A limit on the number of contexts that can be active at the same time. Defaults to all contexts.                                                                                                     |
| **`parent`**      |                              `Target`                               |    ✔️    | Parent context.                                                                                                                                                                                      |
