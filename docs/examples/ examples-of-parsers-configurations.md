---
id: examples-of-parsers-configurations
---

# Parser Configuration

The parser configuration is designed to facilitate the parsing and management of content across various websites. This document provides an overview of the parser type, target conditions, and contextual structures.

## Overview

The parser is structured to work seamlessly within specified websites, ensuring that the relevant components and functionalities are integrated based on contextual conditions.

```json
{
  "parserType": "bos",
  "$targets": [
    {
      "namespace": "engine",
      "contextType": "website",
      "if": {
        "id": {
          "eq": "localhost"
        }
      }
    },
    {
      "namespace": "engine",
      "contextType": "website",
      "if": {
        "id": {
          "eq": "social.dapplets.org"
        }
      }
    },
    {
      "namespace": "engine",
      "contextType": "website",
      "if": {
        "id": {
          "eq": "127.0.0.1"
        }
      }
    },
    {
      "namespace": "engine",
      "contextType": "website",
      "if": {
        "id": {
          "contains": ["social.testnet.dapplets.org"]
        }
      }
    }
  ],
  "$contexts": {
    "timeline": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/MergedIndexFeed",
      "props": {
        "id": "string('timeline')"
      },
      "children": ["post"]
    },
    "post": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post",
      "props": {
        "id": "{{props.accountId}}/{{props.blockHeight}}",
        "authorUsername": "{{props.accountId}}"
      },
      "insertionPoints": {
        "root": {
          "bosLayoutManager": "${REPL_ACCOUNT}/widget/ContextActionsGroup",
          "insertionType": "begin"
        },
        "southPanel": {
          "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post.ShareButton",
          "insertionType": "after"
        },
        "avatar": {
          "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post",
          "insertionType": "begin"
        },
        "afterText": {
          "bosLayoutManager": "${REPL_ACCOUNT}/widget/VerticalLayoutManager",
          "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post.Content",
          "insertionType": "after"
        }
      },
      "children": ["commentButton", "repostButton", "likeButton", "shareButton"]
    },
    "commentButton": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/N.CommentButton",
      "props": {
        "id": "string('commentButton')"
      }
    },
    "repostButton": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/N.RepostButton",
      "props": {
        "id": "string('repostButton')"
      }
    },
    "likeButton": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/N.LikeButton",
      "props": {
        "id": "string('likeButton')"
      }
    },
    "shareButton": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post.ShareButton",
      "props": {
        "id": "string('shareButton')"
      }
    },
    "profile": {
      "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/ProfileLarge",
      "props": {
        "id": "{{props.accountId}}",
        "accountId": "{{props.accountId}}",
        "name": "{{props.profile.name}}",
        "tagline": "{{props.profile.tagline}}",
        "description": "{{props.profile.description}}",
        "website": "{{props.profile.website}}"
      },
      "insertionPoints": {
        "avatar": {
          "component": "${REPL_NEAR_SOCIAL_OWNER}/widget/ProfileImage",
          "insertionType": "begin"
        }
      }
    }
  }
}
```

### Parser Type

- **parserType**:
  - `bos`

### Target Conditions

The parser defines several conditions under which it will be applied:

- **$targets**:
  - **namespace**: `engine`
  - **contextType**: `website`
  - **if**: The parser will be activated if the current context matches any of the following conditions:
    - **id**:
      - Equals `localhost`
      - Equals `social.dapplets.org`
      - Equals `127.0.0.1`
      - Contains `social.testnet.dapplets.org`

### Context Structures

The configuration also defines various contexts and their corresponding components and properties:

- **$contexts**:

  - **timeline**:

    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/MergedIndexFeed`
    - **props**:
      - `id`: `"string('timeline')"`
    - **children**: `["post"]`

  - **post**:

    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post`
    - **props**:
      - `id`: `{{props.accountId}}/{{props.blockHeight}}`
      - `authorUsername`: `{{props.accountId}}`
    - **insertionPoints**:
      - **root**:
        - **bosLayoutManager**: `${REPL_ACCOUNT}/widget/ContextActionsGroup`
        - **insertionType**: `begin`
      - **southPanel**:
        - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post.ShareButton`
        - **insertionType**: `after`
      - **avatar**:
        - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post`
        - **insertionType**: `begin`
      - **afterText**:
        - **bosLayoutManager**: `${REPL_ACCOUNT}/widget/VerticalLayoutManager`
        - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post.Content`
        - **insertionType**: `after`
    - **children**: `["commentButton", "repostButton", "likeButton", "shareButton"]`

  - **commentButton**:

    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/N.CommentButton`
    - **props**:
      - `id`: `"string('commentButton')"`

  - **repostButton**:

    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/N.RepostButton`
    - **props**:
      - `id`: `"string('repostButton')"`

  - **likeButton**:

    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/N.LikeButton`
    - **props**:
      - `id`: `"string('likeButton')"`

  - **shareButton**:

    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/MainPage.N.Post.ShareButton`
    - **props**:
      - `id`: `"string('shareButton')"`

  - **profile**:
    - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/ProfileLarge`
    - **props**:
      - `id`: `{{props.accountId}}`
      - `accountId`: `{{props.accountId}}`
      - `name`: `{{props.profile.name}}`
      - `tagline`: `{{props.profile.tagline}}`
      - `description`: `{{props.profile.description}}`
      - `website`: `{{props.profile.website}}`
    - **insertionPoints**:
      - **avatar**:
        - **component**: `${REPL_NEAR_SOCIAL_OWNER}/widget/ProfileImage`
        - **insertionType**: `begin`

## Conclusion

This parser configuration for provides a robust framework for managing content across various specified websites. By leveraging the defined targets and context structures, it ensures seamless integration and functionality tailored to each context.

For more information, please consult the application documentation or contact the support team.
