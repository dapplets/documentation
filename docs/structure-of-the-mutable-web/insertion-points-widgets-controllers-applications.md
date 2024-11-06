---
id: insertion-points-widgets-controllers-applications
---

# InsertionPoints, Widgets, Controllers, Applications

The structure of the Mutable Web is divided into several key components that facilitate user modifications and extensions to websites.

### Insertion Points

An insertion point is a defined area in a webpage where a widget can be applied or a mutation can be executed. Insertion points are crucial for allowing modifications without disrupting the core functionality of the original site.

### Widgets

Widgets are modular units of functionality that can be placed into insertion points to modify a site's behavior or appearance. These are reusable components that can be shared, forked, and adjusted by the community. Widgets can be as simple as UI elements or as complex as entire application logic.

The `WidgetProps` interface serves as a contract for the properties and methods that a widget must implement to interact effectively with the BOS component and the platform. This documentation outlines the structure and functionality of the `WidgetProps` interface.

```typescript
interface WidgetProps {
  context: TransferableContext;
  link?: {
    id: UserLinkId; // Static link ID can also be here
    authorId: string;
  };
  notify: (modalProps: ModalProps) => void;
  query: (target: Target) => TransferableContext | null;
  linkDb: {
    get: (
      ctx: TransferableContext,
      accountIds?: string[] | string,
      indexRules?: LinkIndexRules
    ) => Promise<LinkedDataByAccountDto>;
    set: (
      ctx: TransferableContext,
      dataByAccount: LinkedDataByAccountDto,
      indexRules: LinkIndexRules
    ) => Promise<void>;
  };
  commitDocument: (
    appDocId: DocumentId,
    appDocMeta: DocumentMetadata,
    ctx: TransferableContext,
    dataByAccount: LinkedDataByAccountDto
  ) => Promise<void>;
  getDocument: () => Promise<DocumentDto | null>;
}
```

Properties

1. context: TransferableContext

Represents the current context in which the widget is operating. It is an instance of TransferableContext, allowing the widget to access relevant data and functionality within its operational scope.

2. link:

An optional object containing link information.

- id: A static link ID, represented as UserLinkId.
- authorId: The ID of the author associated with the link.

3. notify:

A function used to trigger notifications or modals within the platform. It takes modalProps as a parameter, which contains properties for the modal to be displayed.

4. query:

A function that allows the widget to perform queries against the specified target. It returns a TransferableContext or null if the query fails.

5. linkDb:

   An object containing methods for interacting with the link database.

   • get:
   • Parameters:
   • ctx: TransferableContext: The current context.
   • accountIds?: string[] | string: An optional parameter to specify account IDs.
   • indexRules?: LinkIndexRules: An optional parameter for indexing rules.
   • Returns: A promise that resolves to LinkedDataByAccountDto, containing linked data by account.
   • set:
   • Parameters:
   • ctx: TransferableContext: The current context.
   • dataByAccount: LinkedDataByAccountDto: The data to be set.
   • indexRules: LinkIndexRules: The indexing rules to apply.
   • Returns: A promise that resolves when the data has been set.

6. commitDocument:

   A function to commit a document to the platform.

   • Parameters:
   • appDocId: DocumentId: The ID of the document to commit.
   • appDocMeta: DocumentMetadata: Metadata associated with the document.
   • ctx: TransferableContext: The current context.
   • dataByAccount: LinkedDataByAccountDto: The linked data to associate with the document.
   • Returns: A promise that resolves when the document has been committed.

7. getDocument:

   A function that retrieves the current document associated with the widget. It returns a promise that resolves to a DocumentDto or null if no document is found.

Conclusion

The WidgetProps interface plays a crucial role in facilitating the interaction between the BOS component and the platform. By defining a clear structure for the properties and methods, it ensures that widgets can efficiently manage context, links, notifications, and document interactions.

For further information or examples of usage, please refer to the relevant sections in the documentation or contact the development team.

### Controllers

Controllers manage the interactions between widgets, mutations, and the underlying site. They allow the user to manage which mutations are applied at any given time, tracking versions, favorites, and recent mutations.

Controllers also handle how data is processed between different mutations or user sessions, ensuring smooth transitions and updates.

### Applications

Applications in the Mutable Web function much like traditional web applications but with the added flexibility of mutations and forks. They have default configurations stored in **MuWebDB**, the backend that provides the data storage and versioning functionality. Each application can have its default data area, where its core settings and configurations are stored.

Applications can pull data from other areas, such as different accounts, and run on custom configurations created by the user or community without requiring approval from the original developer or site owner.
