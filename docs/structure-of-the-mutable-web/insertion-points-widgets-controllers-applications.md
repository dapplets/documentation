---
id: insertion-points-widgets-controllers-applications
---

# InsertionPoints, Widgets, Controllers, Applications

The structure of the Mutable Web is divided into several key components that facilitate user modifications and extensions to websites.

### Insertion Points

An **insertion point** is a defined area in a webpage where a **widget** can be applied or a mutation can be executed. Insertion points are crucial for allowing modifications without disrupting the core functionality of the original site.

### Widgets

**Widgets** are modular units of functionality that can be placed into **insertion points** to modify a site's behavior or appearance. These are reusable components that can be shared, forked, and adjusted by the community. Widgets can be as simple as UI elements or as complex as entire application logic.

### Controllers

**Controllers** manage the interactions between **widgets**, **mutations**, and the underlying site. They allow the user to manage which **mutations** are applied at any given time, tracking versions, favorites, and recent mutations.

Controllers also handle how data is processed between different mutations or user sessions, ensuring smooth transitions and updates.

### Applications

**Applications** in the Mutable Web function much like traditional web applications but with the added flexibility of **mutations** and **forks**. They have default configurations stored in **MuWebDB**, the backend that provides the data storage and versioning functionality. Each application can have its **default data area**, where its core settings and configurations are stored.

Applications can pull data from other areas, such as different accounts, and run on custom configurations created by the user or community without requiring approval from the original developer or site owner.
