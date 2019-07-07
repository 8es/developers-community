---
pagename: Messaging Conversations
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Use Cases
permalink: functions-use-cases-messaging-conversations.html
indicator: both
redirect_from:
  - function-as-a-service-use-cases-messaging-conversations.html
---

This guide explains how to enable LivePerson Functions for messaging.

With **Functions for messaging** you are able to invoke `lambdas` from standard messaging events. For example, a new conversation start event could be chosen as the trigger to invoke a pre-created function.

Along with the invocation, the function is sent a payload containing metadata related to the conversation which invoked the function. This payload can then be used in the function for further processing and referencing.

<div class="important"> It is required that your account has the Controller Bot permissions enabled; please contact your account team in order to do this.</div>

### Messaging events for Function Invocation

LiveEngage messaging uses a series of "Conversation State Change Events" which get fired when specific actions or events occur within the conversation. You are able to use theses events to trigger functions within Functions.

The following "Conversation State Change Events" can be used to trigger functions:

#### New Conversation

This event is fired when a consumer initiates a new conversation.

#### TTR (Time to Respond) changed

This event is fired by the consumer or by the agent. This event is fired by the consumer when they mark the conversation as urgent or unmark it as such. This event is fired by the agent when they change the TTR.

#### Participants Change

This event is fired if an agent or a consumer joins or leaves the conversation.

#### Conversation Idle

This event is fired if a consumer or agent did not respond within the configured idle time for the account.

#### Conversation Routing

This event is fired if the conversation is routed to a different skill

#### Messaging Line in Off-Hours

This event is fired if a conversation was *opened* during office-hours, but a new consumer line in the conversation is *written* during off-hours (essentially when a consumer sends an off-hour message).

#### Conversation End

This event is fired when a conversation is closed.

**Note**: If no message is set in the result of the function (which it returns to the invoker), the default automatic message for the account will be triggered.

### Callback commands

You have the option to send callback commands back to the invoker. You can add multiple commands to the response as the functions itself can return an array or a single object.

With the controller bot as the invoker, as is the case for messaging events, you have the option to execute the following callback commands:

* Send a message

* Transfer Conversation to a different Skill

* Close the Conversation

<div class="important">Using callback commands is <b>not</b> mandatory. If you only wish to use the events listed above to trigger functions and nothing else, there's no reason for you to pass callback commands back.</div>

If you add more than one command of a certain type (e.g. 2 messages) **only the first command** of this type will be processed.

Please have a look at [this page](function-as-a-service-developing-with-faas-events-templates.html) for further insight into the available events and their related templates. You can also have a look at the related templates per messaging-event within the LivePerson Functions application itself.

### Step-by-Step implementation guide

#### Step 1 - Create function

Create a new function using one of the messaging templates.

Currently, only one function per template type can be created. If there are multiple types of functionality needed that stem from the same event invocation, these should be coded into the same `lambda`.

![](img/faas-messaging.png)

#### Step 2 - Edit the Function

Adjust the coding from the template according to your needs by modifying the function. On the right side you can see an example of the payload (in the sidebar, which you might need to open):

As mentioned above, the function can return a series of commands back to the invoker. In the template code you can see the current available commands.

Here's an example of a response sent back to the invoker using a few of those commands:

```javascript
let result = [
   {
       type: "systemMessage", // Returns a system message into the conversation
       text: "your message"
   },
   {
       type: "transfer", // Transfers the conversation to a new skill
       skillId: "123456"
   },
   {
       type: "closeConversation" // Closes the conversation
   }
]
callback(null, result);
```

#### Step 4 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

<div class="important">Try to deploy functions with a runtime of less than one second. If the runtime is longer, you may get a bad user experience because of race conditions within the server. For example, if you create a function based on the <b> Participants Change</b> event and an agent joins the conversation, the consumer may see the resulting `systemMessage` <b>after the agent already responded to the consumer themselves</b>.</div>
