---
id: picker
---

# Picker

**Picker** — a tool that allows users to select a contextual area on a web page in order to perform actions on it or extract useful data. This tool is provided by the platform for application developers, who define how and for what purposes the Picker will be used.

## Picker Example

To try out the Picker in action, you can use the Picker Example application.

How to run **Mutable Web** applications is described [here](/docs/how-to-start).

## Picker mode

In the right sidebar, in the central area among the action buttons, select **Run Picker**. Once clicked, the Picker mode will be activated. By moving the cursor around the screen, you can observe context highlighting. The contexts are defined in parser configs that have already been added to our ecosystem.

![Highlighted contexts](/img/picker/docs-picker-02.png)

## Highlighted contexts

You can see highlights for contexts such as user profiles, post feeds, individual posts, avatars in posts, custom post buttons, and more.

You may also notice highlights on elements of the Mutable Web extension’s sidebar or top panel, as well as on widgets embedded in contexts, such as the **Tipping** application widget.

![Select Tipping button](/img/picker/docs-picker-03.png)

## Interaction with the contexts

If a context is not only highlighted but also filled, with a lightning icon in the center, clicking on it will open a popup with information about this context.

![Informational popup](/img/picker/docs-picker-04.png)

## Latch

If there is a button with plus icon or a double lightning icon next to the highlight, the informational popup will open by clicking on it. We call them **Latch** buttons. This way, interaction with the context itself is not restricted.

![Context action button](/img/picker/docs-picker-05.png)

## Exit Picker mode

To exit Picker mode, click the Close button at the top right of the popup, or click the **Run Picker** button in the sidebar again.

## API

- [`DappletContextPicker`](/docs/api/dapplet-context-picker)
- [`Highlighter`](/docs/api/highlighter)
