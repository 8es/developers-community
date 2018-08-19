---
title: Agent Status Reason by ID
redirect_from:
  - account-configuration-agent-status-reason-agentstatusreasonid.html
sitesection: Documents
level2: Account Configuration
level3: Agent Status Reason API
level4: Methods
permalink: agent-status-reason-api-methods-agent-status-reason-by-id.html
order: 20
indicator: both
---


### Description

Get one Status reason by ID.

### URI

| Method | URL |
| :-------- | :------ |
| GET | /api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId} |

### Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP site id | Type: String |
|statusReasonId | Account Config object’s unique id. | Type: Positive long number greater than zero|

### Query Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|include_deleted | Whether the API should include deleted items in the response or not | Default: false|

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](guides-authentication-introduction.html) for more details. |

**Request Body**

No body required.

### Response

**Response Headers**

|Header | Description|
|--- | ---|
|ac-revision | Account config object type collection revision|

**Response Body**

```json
{
  "text":"some text",
  "state":"Away",
  "enabled":true,
  "id":725989512,
  "deleted":false
}
```

**Response Codes**

|Code | Description |
|:----|:----|
|200 |OK|
|400 |Bad Request|
|401 |Not Authenticated|
|403 |Not Authorized|
|404 |Data not found|
|500 |Internal server error|
