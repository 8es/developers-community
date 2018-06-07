---
title: Overview
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 1
level-order: 8
root-link: true
indicator: both
permalink: connectorapioverview.html
---
### Introduction

The Connector API enables you to build applications that connect common messaging channels (such as Facebook Messenger, LINE, Skype and so on) with LiveEngage. This gives you the ability to build your own connector application which can, as an example, open/close conversations and send messages to LiveEngage on behalf of your consumers.


A connector is a broker between LiveEngage data and a messaging channel's (e.g. Facebook, WhatsApp, LINE, etc.) messages and data. The connector receives messages and events from a messaging platform, transforms them into the LiveEngage language and passes it to the agent via the [Send API](sendapi-send.html). The connector can also open and close conversations and transmit the first message upon creation. The connector can also make sure that the consumer will be notified of agent activity during the conversation, and vice versa, using WebHooks notifications (for example, if the agent is typing, etc.).

**Why do we need the Connector API?**

LiveEngage already provides out of the box connectors to Facebook, Google My Business, Apple Business Chat, LINE, SMS via Twilio with many more in the pipeline. This API can be used by brands looking to connect with any other messaging channel, such as an SMS Gateway of their choice (not via Twilio). The API also allows brands to develop their own customized messaging connector in collaboration with a third party partner.

**What is the Connector API?**

The Connector API consists of two main components:

1. **The Messaging Send API**: Send HTTPS requests based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework. This component of the Connector API handles communication between the Connector and LiveEngage. It has two main calls, create conversation and send message (close conversation is a send message with a closing context in the payload). These calls communicate events from the third party application to LiveEngage.

2. **[WebHooks](webhooks-overview.html){:target="_blank"} Notification Service**: This component sends notifications from LiveEngage based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework to the connector Webhooks HTTPS-endpoints. These notifications communicate any messaging events both from the agent and consumer to the Connector, such as agent/consumer replied, closed conversation, is typing and so on.

Please note: as part of using the Connector API, brands will be required to expose their Webhooks' HTTPS-endpoints. The Webhooks component allows the connector to register for notifications on LivePerson (LP) events. For more information on using Webhooks, please refer to the [Webhooks Overview](webhooks-overview.html){:target="_blank"}.

### Capabilities enabled by the Connector API

#### On the **consumer** side:

* Create Conversation and send SDEs in one step.

* Send Text Messages

* Send Images

* See SENT, READ and RECEIVED indications

* Send Chat State Events (COMPOSING, ACTIVE, INACTIVE etc.)

* Close conversation

* Send CSAT (Customer Satisfaction) & FCR (First Contact Resolution) ratings

#### On the **agent** side:

* Resume a conversation

* Transfer a conversation to a different skill

* Send a text message

* Send structured content

* See SENT, READ and RECEIVED indications

* See indication that the consumer is typing

* Close a conversation

### Use Cases

**There are two primary reasons to utilize the Connector API**:

1. **Brands** - To **create** their own custom connectors. This will enable their consumers to engage with them via many distribution channels while using more than one device, e.g a connector for **WeChat, Twitter, Slack, Snapchat, Viber** etc. Another example would be a connector for an SMS Gateway of their choice (not via Twilio). A connector developed by a brand would normally be hosted on the brand's servers.

2. **Product solutions** - These are connector applications that will be developed by LivePerson. Their functionality is the same as the above use case except that they are developed by LivePerson and not the brand. A connecter developed by LivePerson would normally be hosted on LivePerson servers.

![JavascriptOverview](img/ConnectorAPI2.png)

[comment]: <> (<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>)

### Samples

Refer to the [Connector Sample App](connector-sample-app.html){:target="_blank"}.
