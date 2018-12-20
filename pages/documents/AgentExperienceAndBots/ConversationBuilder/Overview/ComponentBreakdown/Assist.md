---
pagename: Conversation Builder Assist
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Overview
permalink: conversation-builder-overview-assist.html
indicator: both
---

The Assist tool is a helper tool which "listens" to your dialog as you build it, interaction by interaction, and suggests intents, entities, patterns, and more which can be added to each interaction.

### Adding a Domain

When you create your first interaction, the Assist helper tool will automatically pop up on the right hand side of the Conversation Builder. You'll be prompted to add a domain from the list of domains you have set up (to learn more about setting up domains, please see [this link](conversation-builder-overview-intent-builder-overview.html)). If you have not configured a domain yet, you will not be prompted to add one.

Select one of your domains from the list and click on it. From then on, for this dialog, Assist will recommend using intents and entities from this domain, identifying areas where they might be relevant using NLU (in essence, it recognizes keywords that you use in an interaction *and* an intent or entity, offering you to link between the two).

### Assigning an Intent to An Interaction

When you start typing out a user interaction, the Assist will check the message/question you are creating and run it against your domain's list of existing intents. Using the same NLU engine that will later be used by the bot/automation in real time, it will attempt to suggest relevant intents which you might want to associate with the user's question.

Once you choose an intent, the Assist will set it for the user's message and the bot/automation will trigger the dialog or the next interaction when the intent is found in a conversation. For example, if your first message is "Hello, I need to check my order status", the Assist might find a "order_status" intent. Depending on the training questions you associate with the intent (see the link above for more information on how do to that), the bot/automation will trigger not only for that specific sentence but also for something like "Hey! What's my order status?"

### Assigning an Entity and Slots to An Interaction

When you create a bot/automation interaction, such as a multiple choice question, the Assist will listen to the different answers you create for this interaction. It will attempt to find an [entity](conversation-builder-overview-entities-overview.html) which contains these different answers and suggest that you set it for this interaction. If no entity is found, it will prompt you to create one and populate it with the different answers you've configured.

Once you've chosen an entity, the Assist will also prompt you to assign or create a [slot](conversation-builder-overview-conditions.html#slots) for this interaction. This will allow you to store the specific answer which the user will choose from out of the members of the assigned entity.
