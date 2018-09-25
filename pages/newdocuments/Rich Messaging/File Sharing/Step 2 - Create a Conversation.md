---
pagename: Create a Conversation
redirect_from:
  - rich-messaging-file-sharing-2.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: File Sharing
order: 30
permalink: file-sharing-step-create-a-conversation.html
indicator: both
---

You will need to have an active conversation, along with its `converationId`, where the files will be shared. Below, creating a conversation is summarized but please follow the [Messaging Window API](consumer-int-overview.html) documentation if you need any more information. Make sure you have an active conversation and a `conversationId` at hand by the end of this step.

#### Using bash

Open a connection to the messaging service.

```sh
	wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Then, ask to create a new conversation:

```json
	{"kind":"req","id":1,"type":"cm.ConsumerRequestConversation"}
```

In response, you will get a `conversationId` that will be used in the next steps.
