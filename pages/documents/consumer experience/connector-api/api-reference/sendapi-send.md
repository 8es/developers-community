---
title: SEND
level1:
level2: Consumer Experience
level3: Connector API
level4: API Reference
order: 12
indicator: both
permalink: sendapi-send.html
search: exclude
---

The SEND method allows you to send a JSON payload.

### Request URI

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |


**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |

**Query Parameter**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| v | The API version | numeric |  

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Body**

| Description | Content-Type |
| :--- | :--- |
| The JSON Payload | application/json |

**Notes**:

For the JSON payload, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html) with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html) to get an example of the accepted payloads. This payload would normally have the _ms.PublishEvent_ type or the _cm.UpdateConversationField_ type.

**Example Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ContentEvent",
         "contentType":"text/plain",
         "message":"Hi from Send Message only - Send a line"
      }
   }
}
```

**Elements in the payload**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| conversationId | Mandatory field for sending a message | string |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | OK |


**Entity Example**

HTTP Status Code 200

```json
{
    "reqId": "1",
    "code": "OK",
    "body": {
        "sequence": 0
    }
}
```
