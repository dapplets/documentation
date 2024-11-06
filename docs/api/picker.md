---
id: api-picker
---

# Picker

## Demos

:::tip

For examples and details on the usage of this React components, visit the feature demo page:

[Picker](/docs/features/feature-picker)

:::

## DappletContextPicker

DappletContextPicker is a component that enables context picking mode, provides latches for specific contexts, and onClick callback functions.

### Basic usecase

You don't need to import the component. It's available in the NEAR Components through the Layout Managers.

```jsx
// prettier-ignore
<DappletContextPicker
  onClick={onClick}
  LatchComponent={LatchComponent}
/>
```

### Props

#### \<DappletContextPicker/\>

| Name                 |                 Type                 | Optional | Description                                                                                                                                                                         |
| :------------------- | :----------------------------------: | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`target`**         |        `Target` or `Target[]`        |    ✔️    | The set of target contexts that will be highlighted and available for selection. By default, all contexts on the page provided by the available adapters will be active for Picker. |
| **`onClick`**        | `(ctx: TransferableContext) => void` |    ✔️    | A callback that will be called when the context is clicked.                                                                                                                         |
| **`LatchComponent`** |        `React.FC<LatchProps>`        |    ✔️    | Adding a Latch component. Contexts with Latch become interactive. `onClick` is called when the Latch is clicked.                                                                    |

## Highlighter

Highlighter is a component that highlights a target element using specified styles.

### Basic usecase

You don't need to import the component. It's available in the NEAR Components through the Layout Managers.

```jsx
// prettier-ignore
<Highlighter
  target={target}
  isFirstTargetOnly={isFirstTargetOnly}
/>
```

### Props

#### \<Highlighter/\>

It takes in properties defined by THighlighterTask, including target, styles, icon, action, and an optional filled state.

| Name                    |         Type          | Optional | Description                                                                                                                                                    |
| :---------------------- | :-------------------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`target`**            |  `InjectableTarget`   |          | The target context to be highlighted                                                                                                                           |
| **`isFirstTargetOnly`** |       `boolean`       |    ✔️    | If `true`, only the first visible context of the specified type on the page will be selected. If the page is scrolled, a new visible context will be selected. |
| **`styles`**            | `React.CSSProperties` |    ✔️    | CSS styles for the highlighting. Can be set: position, backgroundColor, border, borderWidth, borderStyle, borderColor, borderRadius, zIndex, opacity, cursor   |
| **`isFilled`**          |       `boolean`       |    ✔️    | If `true`, a color overlay will be placed on the target context. You can add a click interaction to it using the `action` prop.                                |
| **`icon`**              |    `ReactElement`     |    ✔️    | The image that will be displayed in the center of the filled target context.                                                                                   |
| **`action`**            |     `() => void`      |    ✔️    | A callback that will be called when a filled context is clicked.                                                                                               |

## Common Types

- ### InjectableTarget

  ```ts
  type InjectableTarget = (Target | TransferableContext) & {
  	injectTo?: string
  }
  ```

- ### TransferableContext

  | Name            |              Type               |   Default   | Description                                                                                                                                                                                          |
  | :-------------- | :-----------------------------: | :---------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | **`namespace`** |            `string`             |             | Specifies the namespace to work with. Options: `'engine'`, `'mweb'` or site specific parser config, for example `'bos.dapplets.near/parser/twitter'`. By default, all available namespaces are used. |
  | **`type`**      |            `string`             |             | Specifies the context type in the selected namespace to work with. Is equal to the `contextType` of `Target`.                                                                                        |
  | **`level`**     |         `ContextLevel`          | `'default'` | Options: `'default'`, `'system'`, `'callout'`. Specifies the z-axis position (z-index) relative to the extension's UI components.                                                                    |
  | **`id`**        |       `string` or `null`        |             | Specifies the exact context identifier.                                                                                                                                                              |
  | **`parsed`**    |              `any`              |             | Context payload.                                                                                                                                                                                     |
  | **`parent`**    | `TransferableContext` or `null` |             | Parent context.                                                                                                                                                                                      |
  | **`isVisible`** |            `boolean`            |             | If `true`, only visible contexts will be active.                                                                                                                                                     |

- ### Target

  | Name              |               Type                | Optional | Description                                                                                                                                                                                          |
  | :---------------- | :-------------------------------: | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | **`namespace`**   |             `string`              |          | Specifies the namespace to work with. Options: `'engine'`, `'mweb'` or site specific parser config, for example `'bos.dapplets.near/parser/twitter'`. By default, all available namespaces are used. |
  | **`contextType`** |             `string`              |          | Specifies the context type in the selected namespace to work with. Is equal to the `type` of `TransferableContext`.                                                                                  |
  | **`if`**          | `Record<string, TargetCondition>` |          | Describes a condition that must be met for a target to be used. See [TargetCondition](/docs/api/picker.md#targetcondition)                                                                           |
  | **`isVisible`**   |             `boolean`             |    ✔️    | If `true`, only visible contexts will be active.                                                                                                                                                     |
  | **`limit`**       |             `number`              |    ✔️    | A limit on the number of contexts that can be active at the same time. Defaults to all contexts.                                                                                                     |
  | **`parent`**      |             `Target`              |    ✔️    | Parent context.                                                                                                                                                                                      |

- ### TargetCondition

  | Name           |      Type      | Optional | Description                                   |
  | :------------- | :------------: | :------: | :-------------------------------------------- |
  | **`not`**      |  `ScalarType`  |    ✔️    | Excludes specific contexts by type.           |
  | **`eq`**       |  `ScalarType`  |    ✔️    | Specifies contexts by exact type.             |
  | **`contains`** |    `string`    |    ✔️    | Specifies contexts that contain a substring.  |
  | **`in`**       | `ScalarType[]` |    ✔️    | Specifies contexts by types.                  |
  | **`index`**    |   `boolean`    |    ✔️    | Specifies the context by exact index.         |
  | **`endsWith`** |    `string`    |    ✔️    | Specifies contexts that end with a substring. |

- ### LatchProps

  | Name                    |                Type                 | Description                                                                                                                |
  | :---------------------- | :---------------------------------: | :------------------------------------------------------------------------------------------------------------------------- |
  | **`context`**           |        `TransferableContext`        | The metadata and payload of the selected context. See [TransferableContext](/docs/api/picker.md#transferablecontext)       |
  | **`variant`**           |           `TLatchVariant`           | Options: `'current'` or `'parent'` or `'child'`. Describes the relationship of the current context to the hovered context. |
  | **`contextDimensions`** | `{ width: number; height: number }` | The dimensions of the context.                                                                                             |
