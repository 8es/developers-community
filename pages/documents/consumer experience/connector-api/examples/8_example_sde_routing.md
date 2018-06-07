---
title: Create Conversation and Set User Profile
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 67
indicator: both
permalink: sdes-routing-example.html

---

The Connector API provides the ability to set the user engagement attributes (SDEs) upon the creation of a new conversation. This can be used to:

  * Set the consumer profile for the agent

  * To target/route the conversation to a specific skill as it was configured via internal LivePerson configuration (Houston) - i.e. routing rules.

See below a few examples of how to do so.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

**Note**

* We advise against using this method for conversation targeting/routing. The best practice is to setup a campaign for messaging on your account and send the Campaign Info when creating a conversation. See example [here](cmp-routing-example.html){:target="_blank"}.

* The supported SDEs for sending are the [Customer Info](https://developers.liveperson.com/engagment-attributes-types.html#customer-info){:target="_blank"} and [Personal Info](https://developers.liveperson.com/engagment-attributes-types.html#personal-info){:target="_blank"} SDEs.

**EXAMPLES**

[Create & Send ctype/gender Example](sdes_routing_example.html#sdes_routing_example.html#create-new-conversation-and-send-ctypegender)

[Create & Send companyBranch Example](sdes_routing_example.html#create-new-conversation-and-send-ctypegender)

### Create new conversation and send companyBranch

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Example Request Body - JSON Payload**

```json
[  
   {  
      "kind":"req",
      "id":"2,",
      "type":"userprofile.SetUserProfile",
      "body":{
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "companyBranch":"ACME"
                  }
               },
               {  
                  "type":"personal",
                  "personal":{  
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"CUSTOM",
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```

### Create new conversation and send ctype/gender

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Example Request Body - JSON Payload**

```json
[  
   {  
      "kind":"req",
      "id":"2,",
      "type":"userprofile.SetUserProfile",
      "body":{
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "ctype":"vip"
                  }
               },
               {  
                  "type":"personal",
                  "personal":{  
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```
