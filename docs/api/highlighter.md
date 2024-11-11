---
id: highlighter
---

# Highlighter

Highlighter is a component that highlights a target element using specified styles.

The [DappletContextPicker](/docs/api/dapplet-context-picker) feature uses this component under the hood to highlight the contexts that are available for selection.

## Demos

:::tip

For examples and details on the usage of this React components, visit the feature demo page:

[Picker](/docs/features/picker)

:::

## Basic usecase

You don't need to import the component. It's available in the NEAR Components through the Layout Managers.

```jsx
<Highlighter target={target} isFirstTargetOnly={isFirstTargetOnly} />
```

## Props

It takes in properties defined by THighlighterTask, including target, styles, icon, action, and an optional filled state.

| Name                    |                       Type                        | Optional | Description                                                                                                                                                    |
| :---------------------- | :-----------------------------------------------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`target`**            | [`InjectableTarget`](/docs/api/injectable-target) |          | The target context to be highlighted                                                                                                                           |
| **`isFirstTargetOnly`** |                     `boolean`                     |    ✔️    | If `true`, only the first visible context of the specified type on the page will be selected. If the page is scrolled, a new visible context will be selected. |
| **`styles`**            |               `React.CSSProperties`               |    ✔️    | CSS styles for the highlighting. Can be set: position, backgroundColor, border, borderWidth, borderStyle, borderColor, borderRadius, zIndex, opacity, cursor   |
| **`isFilled`**          |                     `boolean`                     |    ✔️    | If `true`, a color overlay will be placed on the target context. You can add a click interaction to it using the `action` prop.                                |
| **`icon`**              |                  `ReactElement`                   |    ✔️    | The image that will be displayed in the center of the filled target context.                                                                                   |
| **`action`**            |                   `() => void`                    |    ✔️    | A callback that will be called when a filled context is clicked.                                                                                               |
