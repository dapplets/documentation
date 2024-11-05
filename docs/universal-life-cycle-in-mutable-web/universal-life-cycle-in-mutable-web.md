---
id: universal-life-cycle-in-mutable-web
---

# Universal LifeCycle in Mutable Web

In Mutable Web, every interaction with applications, mutations, and objects follows a consistent workflow, which can be broken down into the following key stages:

- **LocalChange**: Initial change occurs locally (e.g., creating, editing).
- **Publish**: The change can be published either as a fork or an update.
- **Pull Request**: The user can propose changes to the original author through a pull request.

## Semantic Context

Mutable Web introduces a structure where each object, whether it's a mutation or a document, has its lifecycle that involves local edits and potential publication.

The process follows a common pattern for all applications, mutations, or objects:

```plaintext
LocalChange => Publish (as Fork, as Update) => Pull Request
```

## Key Stages of the Lifecycle

### 1. LocalChange

When a user interacts with an object, a local change is made. These changes are isolated to the user’s local environment until they decide to publish. Some important concepts during this stage:

- **Multiple Edits**: A user can make multiple edits locally before deciding to publish.
- **Fork**: If the object belongs to another author, the first step is to fork the original object.
- **Visibility**: Objects can have visibility set to `private`, `devel`, or `public`.

#### Visibility Modes

- **Private**: The object is only visible by ID and does not appear in search results or public lists.
- **Devel**: The object is visible only in developer mode, ensuring it’s available for development purposes but not fully public.
- **Public**: The object is fully visible and searchable by others.

### 2. Publish (as Fork or Update)

Once local changes are complete, the user can publish the object. This stage may vary depending on the ownership and origin of the object:

- **Fork**: If the object originated from another author, the user must fork it. This ensures the original remains intact while the new version (fork) branches off.
- **Update**: If the user owns the original object, they can publish changes as an update, which creates a new version of the object without forking.

The Publish button is context-sensitive, meaning it will change its function depending on whether the object is a fork or an update.

- A checkbox labeled **“notify origin”** allows the user to notify the original author if desired.

#### Example of Forking

- **Forking a Foreign Mutation**: The user forks another author’s mutation, makes changes, and publishes it under their name.
- **Forking Your Own Mutation**: The user can fork their mutation for branching out new versions (e.g., for testing versus production).

#### Creating a Mutation from Scratch

A user can create a new mutation without forking from an existing one. In this case, the mutation will start with a null ID and will generate an ID once published.

### 3. Pull Request

When changes are made to objects that originated from other users, the Mutable Web system allows the creation of a Pull Request. Instead of being a separate operation, it is integrated into the Publish action.

- The user can notify the original author by selecting the **“notify origin”** checkbox during the publishing process. This serves as the modern equivalent of a pull request, allowing the original author to review and incorporate changes.

## Special Cases in the LifeCycle

### Editing Your Own Mutation Without an Origin

When editing a mutation with no origin (no fork from another mutation), the changes are treated as updates. There is no need to create a local copy, and the ID remains the same as the original.

### Editing a Mutation with an Origin (Foreign Author)

If a mutation is based on another author’s work (forked mutation), changes are still local until published. However, the origin metadata is preserved, and a **Publish as Fork** operation is required to keep the forked history intact.

### Publishing a Fork

When publishing a fork, Mutable Web ensures that the original mutation is not altered. The new fork has its own unique ID and can be edited, published, and even forked by others in turn.

### Fork and Edit Lifecycle

Each mutation can follow a different path depending on its origin:

1. *Forking Someone Else’s Mutation*:

2. *Forking Your Own Mutation*:

3. *Creating a Mutation from Scratch*:

4. *Editing Your Own Mutation (No Origin)*:

5. *Editing Your Own Mutation (With Origin)*:

By following these workflows, Mutable Web maintains a streamlined process for creating, editing, and managing mutations, ensuring both flexibility and control for developers and users alike.
