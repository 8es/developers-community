---
title: Conversations
level1: Documents
level2: Consumer Experience
level3: Consumer Messaging history API
level4: Methods
order: 10
permalink: data-messaging-history-consumer-conversations-metadata.html
indicator: messaging
---

This method retrieves the content of specific conversation as message events list.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST   | `https://<domain>/messaging_history/api/account/{accountID}/conversations/conversation/content/search?offset=0&limit=50`

**URL Parameters**

Name   | Description                                                          | Type/Value | Required | Notes
:----- | :------------------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
offset | The offset specifies from which record to retrieve the conversation. | numeric    | Required | Default is 0\. Example: Of 100 records, the first 20 have already been retrieved. Thus, in the next request will be specified with offset 21.
limit  | Max amount of conversations to be received in the response.          | numeric    | Required | Default is 50\. Max value is 100\. The remaining conversations can be obtained using pagination (using offset, in a subsequent request).
sort   | Sort the results in a predefined order.                              | string     | Required | Example: start:desc will order conversations by descending value of the start time. Valid values include: start, end. Order:[asc/desc]

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

Name        | Description                        | Type/Value | Required | Notes
:---------- | :----------------------------------| :----------| :------- | :----
dialogId    | ID of the conversation to search.. | String.    | Required | 


Filters examples:

Name                | Description
:------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
dialogId            | {"dialogId":"4a6ce154-a086-4bfb-8ab2-2658fd88157a"}

### Response

**Elements in the Response**

_messageEvent record_

Name                 | Description                                                       | Type/Value
:------------------- | :---------------------------------------------------------------- | :---------
sequence             | The event sequence within the conversation.                       | Int        |
originatorId         | The id of the participant who wrote the message.                  | String     |
serverTimestamp      | Event time stamp.                                                 | long       |
event                | Contains message event data.                                     | container  |

_messageEvent ContentEvent (text/plain)

Name                 | Description                | Type/Value | Notes
:------------------- | :--------------------------| :--------- |--------------------------------------------- :------------------------------------------------------------------------------------------------------------
type                 | The type of the message.   | string     |
contentType          | The type of the contnet.   | string     | Valid values: "text/plain"
message              | The message text.          | string     | 


_messageEvent ContentEvent (HostedFile)

Name                 | Description                | Type/Value | Notes
:------------------- | :--------------------------| :--------- |--------------------------------------------- :------------------------------------------------------------------------------------------------------------
type                 | The type of the message.   | string     |
contentType          | The type of the contnet.   | string     | Valid values: "HostedFile"
message              | The message text.          | string     | Valid values: "CONSUMER"


_messageEvent AcceptStatusEvent

Name                 | Description                                 | Type/Value | Notes
:------------------- | :-------------------------------------------| :--------- | :------------------------------------------------------------------------------------------------------------
type                 | The type of the message.                    | string     |
status               | The role pf the participant .               | string     | Valid values: "CONSUMER", 
sequenceList         | The type of the message.                    | string     |

**JSON Example**

```
{
    "_responseMetadata": {
        "count": 1,
        "self": {
            "rel": "self",
            "href": "http://qtvr-wto133:8080/messaging_history/api/account/le69322492/conversations/consumer/metadata/search?limit=50&offset=0&sort=start:desc"
        },
        "shardsStatusResult": {
            "partialResult": true
        }
    },
    "conversationHistoryMetadataRecords": [
        {
            "convId": "2ba1f774-0455-4759-9e5c-42d9b67db3f1",
            "participants": [
                {
                    "id": "d74812871d96945af08f77b95b16b39cc2f29438bbe48b0109e2719575787332",
                    "role": "CONSUMER"
                },
                {
                    "id": "eea399b9-fed0-5cb0-8d38-00e3bc50d79b",
                    "role": "ASSIGNED_AGENT"
                }
            ],
            "state": "CLOSE",
            "startTs": 1501047777465,
            "endTs": 1501047800467,
            "csat": {
                "csatRate": 3,
                "csatResolutionConfirmation": false,
                "status": "FILLED"
            }
        }
    ]
}
```
