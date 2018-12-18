---
pagename: Intent Builder Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Intent Builder
subfoldername: Component Breakdown
permalink: conversation-builder-intent-intent-builder-overview.html
indicator: both
---

The Conversation Builder Platform's Intent Builder allows you to build a collection of intents grouped by domain. Thus, you can define specific groups of intents for different entry points, such as a support landing page vs. an e-commerce landing page. Once you build at least one domain of intents, you'll be able to use the [Conversation Builder](placeholder.com) to associate these intents with specific user input.

This directs your bot/automation to be more flexible and respond to a wider variety of user input; instead of looking for specific patterns in user input (for example, the pattern "bill"), the bot/automation will use our NLU engine to look for the intent specified and trigger the interaction you configured in response to this intent. Therefore, once you configure your intents with robust **Training Phrases**, expressions like "I have a question about billing", "Looking to check my account" yield the same intent and the same response from the bot/automation.

### Adding a Domain

The first step to using the intent builder is to add a domain by clicking the **ADD DOMAIN** panel on the left side of the Intent Builder. You will then be prompted to choose a name for the domain and select whether you'd like to manually add intents or import a pre-configured list of intents. **We recommend using standard naming conventions when creating domains, to make sure they are easy to sort and find**.

### The Domain View

Once you've added a domain, you will be automatically navigated to the Domain View. On the left hand side, you can find a list of the intents a domain includes, which will originally be empty, since you haven't created any intents yet. On the right hand side you'll find the domain's Settings Toolbar. It includes four buttons:

* The home icon will navigate you back to the first screen of the Intent Builder, which will allow you to view all your created domains or create a new one.

* The plus icon is the default panel of the Domain View. It is the Add Intent panel, where you can create new intents under the domain.

* The debugger icon allows you to enter sample user input to test against your intents; the NLU engine will take your inputted text and see if it can find matches in your intents. It will list these intents and the degree to which they matched with the input text.

* The last icon is the Settings panel. It will allow you to rename the domain, retrieve its ID (under "More Settings" at the bottom), delete the domain and more.

### What is an Intent?

[TODO]

### Adding an Intent

The default panel of the Domain View is the Add Intent panel. It will be the panel opened by default when you enter the Domain View. To add an intent, first use the topmost input area to enter its name.

<div class="important">Using standard naming conventions when creating intents is crucial. A domain can have dozens of intents and being able to easily sort and find intents is the key to making sure your bot/automation runs efficienty and smoothly</div>

Once you've selected a name for your Intent, you should add as many training phrases as possible by using the bottom input area. To add another training phrase after your first one, click on the blue **+** sign to the right of the input area.

#### Training Phrases

[TODO]
