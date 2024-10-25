---
id: examples-of-mutation-configurations
---

# Mutation Schema

The **mutation** schema is designed to enhance accessibility to intelligence across various platforms. This document provides an overview of the schema configuration, including its metadata, target applications, and contextual conditions.

## Overview

The mutation schema allows for the integration of intelligent features into multiple websites, providing users with enriched content and functionalities.

### Metadata

```json
{
  "metadata": {
    "name": "Multiversity",
    "description": "Discover Accessible Intelligence",
    "image": {
      "ipfs_cid": "bafkreicluble6uaofpunfz7kyetzenvsahu6aecqjjyv5odmwk3wz3lbcu"
    }
  },
  "$apps": ["${REPL_ACCOUNT}/app/Multiversity"],
  "$targets": [
    {
      "namespace": "engine",
      "contextType": "website",
      "if": {
        "id": {
          "in": [
            "twitter.com",
            "x.com",
            "github.com",
            "linkedin.com",
            "www.linkedin.com",
            "localhost"
          ]
        }
      }
    }
  ]
}
```

The schema includes the following metadata:

- **name** : _Multiversity_
- **description** : _Discover Accessible Intelligence_
- **image** : A visual representation of the application, stored on IPFS.
  - **ipfs_cid** : bafkreicluble6uaofpunfz7kyetzenvsahu6aecqjjyv5odmwk3wz3lbcu.

### Applications

The schema specifies the applications that utilize the mutation:

- **$apps**:
  - `${REPL_ACCOUNT}/app/Multiversity`

### Target Conditions

The schema outlines the conditions under which the mutation will be applied:

- **$targets**:
  - **namespace**: `engine`
  - **contextType**: `website`
  - **if**: The mutation will be applied if the current context matches any of the following conditions:
    - **id**: The current website's domain must be one of the following:
      - `twitter.com`
      - `x.com`
      - `github.com`
      - `linkedin.com`
      - `www.linkedin.com`
      - `localhost`

### Purpose

This mutation schema is intended to provide intelligent features that enhance user experience on supported platforms. By integrating the app into these contexts, users can access additional resources and insights tailored to the platform they are visiting.

## Conclusion

The mutation schema is a crucial component for making intelligent resources accessible across various online platforms. With its defined targets and conditions, it ensures that users have a seamless experience when interacting with intelligent content.

For further information, please refer to the relevant application documentation or reach out to the support team.
