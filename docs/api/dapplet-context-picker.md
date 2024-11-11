---
id: dapplet-context-picker
---

# DappletContextPicker

DappletContextPicker is a component that enables context picking mode, provides latches for specific contexts, and onClick callback functions.

## Demos

:::tip

For examples and details on the usage of this React components, visit the feature demo page:

[Picker](/docs/features/picker)

:::

## Basic usecase

You don't need to import the component. It's available in the NEAR Components through the Layout Managers.

```jsx
<DappletContextPicker onClick={onClick} LatchComponent={LatchComponent} />
```

## Props

| Name                 |                                    Type                                    | Optional | Description                                                                                                                                                                         |
| :------------------- | :------------------------------------------------------------------------: | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`target`**         |      [`Target`](/docs/api/target) or [`Target`](/docs/api/target)`[]`      |    ✔️    | The set of target contexts that will be highlighted and available for selection. By default, all contexts on the page provided by the available adapters will be active for Picker. |
| **`onClick`**        | `(ctx: `[`TransferableContext`](/docs/api/transferable-context)`) => void` |    ✔️    | A callback that will be called when the context is clicked.                                                                                                                         |
| **`LatchComponent`** |            `React.FC<`[`LatchProps`](/docs/api/latch-props)`>`             |    ✔️    | Adding a Latch component. Contexts with Latch become interactive. `onClick` is called when the Latch is clicked.                                                                    |
