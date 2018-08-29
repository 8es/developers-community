---
pagename: Post Conversation Survey
redirect_from:
  - consumer-int-post-survey.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Messaging Window API
subfoldername: Tutorials

order: 60
permalink: messaging-window-api-tutorials-post-conversation-survey.html

indicator: messaging
---

### Prerequisites
Run the [Conversation Metadata Tutorial](consumer-int-conversation-md.html).

### Step 1 - Find the closed conversation ID and Post Survey

In the end of the [Conversation Metadata Tutorial](consumer-int-conversation-md.html), you closed the conversation and got notification about it. In order to post CSAT survey, take this conversation id and paste it together with the following request:


```json
{"kind":"req","id":"AHDJE","type":"cm.UpdateConversationField","body":{"conversationId":"__CONVERSATION_ID__","conversationField":{"field":"CSATRate","csatRate":5,"csatResolutionConfirmation":true,"status":"FILLED"}}}
```
**Note**: you can use the message builder (<a href="consumer-int-msg-csat-conv.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>) to build the above message. 

{% include links.html %}
