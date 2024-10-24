---
id: mutable-web-is-a-semantic-based
---

# Mutable Web: A Semantic-Based Web

## State of the Art

Currently, almost any social-network-based project has an entity with **complete ownership control** over the community. This ownership manifests in various forms:

- **UX/UI Ownership**: Only the owner defines the website’s appearance and functionality.
- **Domain Ownership**: Only the owner controls the domain to access the website.
- **User Data Ownership**: Only the owner possesses the full user data and analytics.
- **Rules and Policy Ownership**: Only the owner defines the policy for the community.
- **Hosting Ownership**: Only the owner can host the community.

Sometimes, this ownership is interfered with by a third party, like the **state**. Even if the owner delegates partial control to the community, the ownership remains centralized. **Decentralization efforts** tend to address only specific aspects, leaving much of the problem unresolved. For instance, decentralizing source code ownership can allow website cloning, but it doesn't enable hosting or community control.

## What is the Problem

The current ownership structure allows the owner to **extract value** from the community for themselves or a powerful third party, even when the community creates most of the value.

This system has significant drawbacks:

- The owner can **monopolize feature development**, disregarding community needs.
- The owner can enforce **censorship** and **excessive value extraction**, hurting the community.
- Ownership can be **lost, confiscated**, or **punished** by a powerful external entity.

A **fairer distribution** of control and benefits should favor the community rather than a singular owner.

## What is the Solution

We started by addressing the problem at the **UX/UI level**, as the **browser** is entirely under the user's control. The website can only display content in the user's browser with the user's consent.

Typically, a user's browser shows the website exactly as the owner defines it. However, we propose that the user be able to apply a **"Site Mutation"** to the original website.

### What is a Site Mutation?

A **Site Mutation** consists of additional functionality (called **Mutations**) that can be developed independently. These **Mutations** can be shared within the community, unlike standard browser extensions, which are often for individual use.

Every Mutation consists of **reusable Widgets**, allowing developers to create **Forked Mutations**, where they can add, replace, or enhance functionality. These Forked Mutations can then be proposed to the community, giving them **control** over the website’s look and feel.

Each Site Mutation has a unique **Content ID** that allows it to be shared. Users who apply the same Site Mutation will experience the same version of the website and share the same functionality.

### Decentralization of Website Control

- Communities can assign **symbolic tags** to Mutation IDs, following a similar approach to the **git scheme**.
- The community could even host the mutated website on a **separate domain**, reducing dependency on the original owner's domain.

## What is the Impact?

Even though the original website may be owned, the community can use a **mutated version** instead of the original. Multiple versions of the website can coexist, shared among different sub-communities.

This model reduces the owner's excessive control over the community. The community can **fork away** from the owner’s version if the owner misbehaves. As a result, the original owner becomes just one of many **service providers** for the community.

In this **Mutable Web**, any developer who creates a Mutation owns their version, but just like the website owner, they cannot gain excessive control over the community. Mutations can be **forked**, allowing the community to adopt a fork if they disagree with the Mutation owner.

### Community-Driven Development

The community can:

- **Vote** on which Site Mutation becomes the main one.
- **Pull changes** rather than having the owner push updates to them.
- **Stick to previous versions** if the owner enforces unwanted changes.
- **Fork away** if the owner breaks things or behaves unethically.

Users can choose which **version tag** to follow: the "official," the "community," or a specific one. The version with the most usage becomes the **default**.

## Conclusion

**μWeb**—the **Mutable Web**—is a new, user-centric web model where the user is king, and the owner becomes one of many service providers.
