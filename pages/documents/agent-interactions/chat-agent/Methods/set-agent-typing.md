---
title: Set Agent’s Typing Status
redirect_from:
  - agent-set-agent-typing.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 180
permalink: chat-agent-api-methods-set-agents-typing-status.html

indicator: chat
---

This method sets the agent's typing status.

### Request

| Method | URL |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/agentTyping?v=1&NC=true|
**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization| Bearer {bearer-from-login} |
| X-HTTP-Method-Override | PUT |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

| Name | Description | Type/Value | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| agentTyping | Indicates if the agent is currently typing a response. | string | Required | Default values: "typing", "not-typing", "unknown" |

**Response Codes**

| Code | Response |
| :--- | :--- |
| 201 | Created |

Response example for JSON:

    {
    "agentTyping" : "typing"
    }
