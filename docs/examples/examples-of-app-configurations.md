---
id: examples-of-app-configurations
---

# App Configuration Examples

This section provides examples for configuring various apps using JSON configurations. Each example demonstrates how to set up an app in different contexts: **Onboarding**, **Document App Example**, **Link DB Example**, **Web Guide**, and **Callouts** for Web Guide and Onboarding.

---

## 1. Onboarding Example

This example describes the configuration of an onboarding app for multiple platforms, such as GitHub and LinkedIn, X.

```json
{
  "metadata": {
    "name": "Onboarding",
    "description": "Onboarding for the mutation",
    "image": {
      "ipfs_cid": "bafkreih235nlz4vricl2h5s3ti7fmwsrkqerrqhspcan7z2vzhh5ebjk7y"
    }
  },
  "$targets": [
    {
      "namespace": "${REPL_ACCOUNT}/parser/github-onboarding",
      "contextType": "body",
      "if": { "id": { "not": null, "index": true } },
      "injectTo": "end",
      "injectOnce": true,
      "componentId": "${REPL_ACCOUNT}/widget/Onboarding.Main"
    },
    {
      "namespace": "${REPL_ACCOUNT}/parser/linkedin-onboarding",
      "contextType": "body",
      "if": { "id": { "not": null, "index": true } },
      "injectTo": "end",
      "injectOnce": true,
      "componentId": "${REPL_ACCOUNT}/widget/Onboarding.Main"
    }
  ]
}
```

### Explanation

    -	metadata: Describes the onboarding app, including its name, description, and image.
    -	$targets: Defines where the app will be used:
    -	namespace specifies the platform (e.g., GitHub or LinkedIn).
    -	contextType specifies that the widget will be injected into the body of the page.
    -	injectTo and injectOnce control the injection of the component at the end of the element only once.
    -	componentId specifies the main component that will display the content.

2. Document App Example

A simple example of configuring an app for document handling.

```json
{
  "metadata": {
    "name": "Document App Example"
  },
  "controller": "${REPL_ACCOUNT}/widget/DocumentExample.Main",
  "$targets": [
    {
      "namespace": "${REPL_ACCOUNT}/parser/twitter",
      "contextType": "root"
    }
  ],
  "$permissions": {
    "documents": true
  }
}
```

Explanation

    -	controller: The main component that controls the app’s functionality.
    -	$targets: Specifies that the app will be injected into the root of Twitter.
    -	$permissions: Grants permission to work with documents.

3. Link DB Example

This example shows the configuration of an app for storing and retrieving data linked to specific context (e.g., a Twitter post).

```json
{
  "metadata": {
    "name": "Link DB Example",
    "description": "Store and retrieve context-linked data in the Link DB"
  },
  "$targets": [
    {
      "namespace": "${REPL_ACCOUNT}/parser/twitter",
      "contextType": "post",
      "if": { "id": { "not": null } },
      "injectTo": "southPanel",
      "componentId": "${REPL_ACCOUNT}/widget/LinkDbExample.Main",
      "static": true
    }
  ]
}
```

Explanation

    -	metadata: Includes the name and description, explaining that the app stores and retrieves data.
    -	$targets: Specifies that the app will display within a Twitter post.
    -	injectTo defines that the component will be placed in the south panel.
    -	static indicates that the component is static and does not change dynamically.

4. Web Guide Example

A web guide example that can be displayed on any website.

```json
{
  "metadata": {
    "name": "Web Guide",
    "image": {
      "ipfs_cid": "bafkreihwu5plfrt7ndwsodrnjsjlkqbx3lqfua7sbfpcdfagz5kjpwj55y"
    }
  },
  "controller": "${REPL_ACCOUNT}/widget/WebGuide.Main",
  "$targets": [
    {
      "namespace": "engine",
      "contextType": "website"
    }
  ],
  "$parsers": "any",
  "$permissions": {
    "documents": true
  }
}
```

Explanation

    -	controller: The main component responsible for the web guide’s functionality.
    -	$targets: Specifies that the web guide will be injected on any website.
    -	$parsers: Indicates that it can work with any type of data.
    -	$permissions: Allows access to documents, necessary for the web guide’s functionality.

5. Test Callouts Example (for Web Guide and Onboarding)

This example shows callouts for the onboarding and web guide apps. Callouts appear after the text in a Twitter post.

```json
{
  "metadata": {
    "name": "Test Callouts"
  },
  "$targets": [
    {
      "namespace": "${REPL_ACCOUNT}/parser/twitter",
      "contextType": "post",
      "if": { "id": { "not": null, "index": true } },
      "injectTo": "afterText",
      "componentId": "${REPL_ACCOUNT}/widget/Onboarding.Callout"
    }
  ]
}
```

### Explanation

    -	$targets: Configured so that the callout component is added to a Twitter post if an id exists.
    -	injectTo defines that the callout will appear immediately after the text.
    -	componentId specifies the main component for displaying the callout.

These examples provide guidance on configuring various types of apps for demonstrate how to manage components across different platforms and contexts.
