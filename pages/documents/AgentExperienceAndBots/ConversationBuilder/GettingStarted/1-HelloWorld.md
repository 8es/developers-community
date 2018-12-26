---
pagename: Hello Conversation Builder
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-hello-conversation-builder.html
indicator: both
---

### Welcome Dialog

After logging in to the Conversation Builder Platform, click on Conversation Builder to get started. Click on New Automation to create a new bot/automation.

<img src="img/ConvoBuilder/conversationbuilderintro.png" style="width:700px">

<!--<img src="img/ConvoBuilder/newAutomation.png" style="width:500px">-->

Set up a new bot/automation with the following settings:

<img src="img/ConvoBuilder/createBot.png" style="width:600px">

After creating the Hello World bot/automation, you will be brought into the Conversation Builder. A bot/automation consists of one or many dialogs. A [dialog](conversation-builder-overview-component-breakdown.html#the-dialog-workspace) is a set of [interactions](conversation-builder-overview-interactions.html) (user input prompts, responses, and integrations which make up a conversation).

When you first open the Hello World bot/automation, you will see two interactions in a Welcome dialog.

<img src="img/ConvoBuilder/dialogMainScreen.png" style="width:700px">

In the [Interactions Toolbar](conversation-builder-overview-component-breakdown.html#the-interactions-toolbar) on the lefthand side, you will see a [User Says interaction](conversation-builder-overview-interactions.html), and many different types of bot/automation interactions.

<!--<img src="img/ConvoBuilder/interactionsToolbar.png" style="width:300px">-->

Click on the first User Says interaction in your Dialog Workspace (center area) and provide a sample phrase that might trigger the dialog by typing in "Hello!" Click on the next bot/automation Statement Text interaction and fill that with "Hello World!" in reply.

<img src="img/ConvoBuilder/helloRenames.png" style="width:400px">

In the [Settings Toolbar](conversation-builder-overview-component-breakdown.html#the-settings-toolbar) on the righthand side, click on the Messaging Client to test your bot/automation.

<img src="img/ConvoBuilder/messagingClientIcon.png" style="width:400px">

Type in "reset" to reset the bot/automation session. Then try to type in "hello" or "hi". Your bot/automation should respond with "Hello World!". It can recognize both "hello" and "hi" because it comes with a pre-set [pattern match](conversation-builder-overview-conditions.html#pattern-matching). We'll address how to edit and create pattern matching in the next step of this tutorial.

### Goodbye Dialog

There is already a Welcome dialog. To create a "Goodbye" dialog, click the **+** on the bottom of the Dialog View.

<img src="img/ConvoBuilder/createNewDialog.png" style="width:500px">

<img src="img/ConvoBuilder/nameYourDialog.png" style="width:300px">

From the Interaction Toolbar on the left, select the User Says interaction. Name this "Goodbye".

<!--<img src="img/ConvoBuilder/userSaysGoodbyeInteraction.png" style="width:500px">-->

When you first add an interaction to your Dialog Workspace, you will see the Interaction Details menu in the Settings Toolbar.

<img src="img/ConvoBuilder/interactionSettings.png" style="width:500px">

Click on Settings and notice the Patterns field. Utilizing patterns is the simplest way to match User input in a dialog.

Add the following patterns:

* `goodbye`

* `bye`

Now add a bot/automation response to trigger when this user input is recognized. Select Bot > Statements > Text from the Interactions Toolbar. Make the text say "Goodbye!".

<img src="img/ConvoBuilder/goodbyeDialogWorkspace.png" style="width:300px">

In the Settings Toolbar on the righthand side, click on the Messaging Client to test all of your dialogs together.

<!--<img src="img/ConvoBuilder/messagingClientIcon.png" style="width:500px">-->

Type in "reset" to reset the bot/automation session. Type in "hello" and the bot should respond with the Welcome dialog. Type in "goodbye" or "bye" and the bot should respond with your new Goodbye dialog.

### Fallback Dialog

If you try to type in something other that "hi", "hello", or "goodbye", the bot will reply with default fallback text. To customize the fallback text, create a new dialog and name it "What?"

<img src="img/ConvoBuilder/fallbackDialogName.png" style="width:300px">

Add only one Bot Statement Text interaction to your Dialog Workspace. Make this text say "I only say 'Hello World' and 'Goodbye'".

Click on the Messaging Client in the Settings Toolbar again to test out the new fallback dialog.

<img src="img/ConvoBuilder/helloWorldFullTest.png" style="width:400px">

### Advanced Pattern Matching

Patterns are exact and precise. Right now, the Welcome and Goodbye dialogs only match the exact words that are in the pattern fields. For example, say "hello, how are you?" in the Messaging Client test area. You will notice that the Welcome dialog does not work because it only matches "hello" exactly.

#### Improved Goodbye Dialog

Click on the Goodbye Dialog. Click on the first User Says interaction and go to the Interaction Details to see the patterns that you entered before.

Instead of `goodbye` and `bye`, change this to `*goodbye*` and `*bye*`.

An asterisk is a wildcard that matches on any number of any characters. This is so a user can type "okay goodbye" or "bye, bot".

Save your pattern changes and test them out in the Messaging Client.

#### Improved Welcome Dialog

Move to the Welcome dialog and look at the Interaction Details. Notice that there are multiple built in pattern matches that are included by default. Add some asterisk symbols after "hi" and "hello", etc.

For something more advanced, add a time of day greeting pattern.

Enter `good (morning|afternoon|evening)*`. This pattern will match on "good morning", "good afternoon", or even "good evening, bot!".

Save your pattern changes and test them out in the Messaging Client.

<div class="important">This concludes your first bot/automation created with the Conversation Builder. Next, you will learn about Intents.</div>
