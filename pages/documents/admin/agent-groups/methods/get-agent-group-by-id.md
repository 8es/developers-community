---
title: Get Agent Groups by ID
redirect_from:
  - administration-get-agent-groups-by-id.html
keywords:
sitesection: Documents
level2: Admin
level3: Agent Groups API
level4: Methods


order: 20
permalink: agent-groups-api-methods-get-agent-groups-by-id.html

indicator: both
---

This API retrieves a single agent group (by ID) for a specific account.

### Request

 |Method | URL |
| :-------- | :----- |
 |GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/agentGroups/{agentGroupId} |

**Request Headers**

| Header | Description |
| :-------- | :------------ |
| Authorization | Contains token string to allow request authentication and authorization. |

**Path Parameters**

 |Parameter | Description | Type / Value |
| :----------- | :------------- | :------------- |
|accountId | LP site ID | String  |
 |agentgroupId | Agent group ID | Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-agent-groups-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
