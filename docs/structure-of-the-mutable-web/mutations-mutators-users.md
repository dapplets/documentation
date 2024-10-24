---
id: mutations-mutators-users
---

# Mutations, Mutators, Users

In the Mutable Web, various actors and actions enable the flexibility and control that define the system. Below is a breakdown of the roles and operations that drive this ecosystem.

### Mutations

A **mutation** is a unit of change applied to a website. Each mutation is identified by a unique content ID and can be shared with others in the community. Mutations are version-controlled and can be **forked**—allowing users to modify the functionality and propose new features.

- **Fork**: A user can **fork** a mutation, modify it, and propose their changes to the owner via a **Pull Request**.
- **Commit**: A mutation is saved and becomes part of the current version.
- **Pull Request**: After modifying a mutation, a user can propose the changes to the owner. The owner can accept or reject these changes, applying them to the core mutation.

Each mutation is stored in **MuWebDB**, where it is versioned and tagged for future use. This allows multiple versions of the same mutation to exist, offering flexibility for different sub-communities using the same application or site.

### Mutators

**Mutators** are users or developers who create and modify mutations. They can **fork**, **modify**, and **propose changes** to a website or application using mutations.

A **fork** contains a link to the original mutation, allowing for easy tracking of changes and versions. Mutators have the ability to work on their version of the mutation independently of the original owner, sharing their version with the community.

The backend, **MuWebDB**, supports versioning and tagging. Each fork has its own version number, which is numeric, and a **tag** that can resolve to a specific version (e.g., `HEAD`, which refers to the latest version).

### Users

Users play a critical role in the Mutable Web ecosystem by selecting, applying, and interacting with mutations. A user may:

- Select a mutation as their **favorite** for a particular site.
- Apply a mutation, making it the **current mutation**.
- **Remove mutations** from their recent list, without affecting the current active mutation.
- **Switch** between different mutations for the same site.

Users interact with mutations by pulling new functionality into their browser, forking existing ones, and, if they choose, proposing changes via **Pull Requests**.
