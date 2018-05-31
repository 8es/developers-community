---
title: Create a new conversation
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 60
indicator: both
permalink: create-conversation-example.html

---

This example illustrates how to create a conversation using the CONVERSATION API endpoint.

To get an example of the accepted payloads used in this API's methods, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html){:target="_blank"} with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html){:target="_blank"}.

This API endpoint expects a set of JSON payloads, each representing a different type of request to LiveEngage messaging service. The order of the payloads is important in order to create a new conversation. First, the payload with the `type` _userprofile.SetUserProfile_ appears, second the payload with the `type` _cm.ConsumerRequestConversation_ appears.

### Create a new conversation

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**JSON payload**

{% raw %}
```json
[
  {
		"kind": "req",
		"id": "1,",
		"type": "userprofile.SetUserProfile",
		"body": {
			"authenticatedData": {
				"lp_sdes": [{
						"type": "ctmrinfo",
						"info": {
							"socialId": "1234567890",
							"ctype": "vip"
						}
					},
					{
						"type": "personal",
						"personal": {
							"firstname": "John",
							"lastname": "Doe",
							"gender": "MALE"
						}
					}
				]
			}
		}
	},
	{
		"kind": "req",
		"id": "2,",
		"type": "cm.ConsumerRequestConversation",
		"body": {
			"ttrDefName": "NORMAL",
			"channelType": "MESSAGING",
			"brandId": "{accountid}"
		}
	}
]
```
{% endraw %}

Please refer [here](sendapi-create.html){:target="_blank"} to get details about the payload and its attributes.
