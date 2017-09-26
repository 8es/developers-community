---
title: Create profile
keywords:
level1: Documents
level2: Admin
level3: Profiles API
level4: Methods


order: 30
permalink: administration-create-profile.html

indicator: both
---

This API creates a list of profiles for a specific account.

### Request

| Method |  URL  |
| :--------  | :----- |
|POST  |      /api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

 |Header | Description |
 |:----- | :---------- |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |  Description |   Type / Value  |
| :----------   | :------------ | :------------ |
| accountId  |    LP site ID  |  String ^[a-zA-Z0-9_]{1,20}$ |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
