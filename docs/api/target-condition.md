---
id: target-condition
---

# TargetCondition

| Name           |      Type      | Optional | Description                                   |
| :------------- | :------------: | :------: | :-------------------------------------------- |
| **`not`**      |  `ScalarType`  |    ✔️    | Excludes specific contexts by type.           |
| **`eq`**       |  `ScalarType`  |    ✔️    | Specifies contexts by exact type.             |
| **`contains`** |    `string`    |    ✔️    | Specifies contexts that contain a substring.  |
| **`in`**       | `ScalarType[]` |    ✔️    | Specifies contexts by types.                  |
| **`index`**    |   `boolean`    |    ✔️    | Specifies the context by exact index.         |
| **`endsWith`** |    `string`    |    ✔️    | Specifies contexts that end with a substring. |
