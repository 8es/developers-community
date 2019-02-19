---
pagename: 4 - Connect to LiveEngage
redirect_from: conversation-builder-tutorials-getting-started-part-4.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Tutorials
permalink: conversation-builder-tutorials-4-connect-to-liveengage.html
indicator: both
---

Now we will walk through how to link your automation to LiveEngage, ending with an integration that transfers to a human.

### Step 10: Configure LiveEngage

To connect an automation to LiveEngage, we first need leave the Conversation Builder platform to configure a LiveEngage Agent. 

#### Setup a New LiveEngage Account:

If you DO NOT have a LiveEngage account set up, please work with your Liveperson team before continuing further.

In order to connect your bot to LiveEngage, we will need to create a Bot User and the necessary skills we’d like our bot to route to.

#### Create the Skills

[Login to your LiveEngage account](https://authentication.liveperson.net/login.html) and create a new skill. This will be the default skill connected to the bot.

Go to Users -> Skills and create a new skill for the Routing Bot called "Bot".

<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_0.png">

Create at least one other skill called "Human" to route to now. If you make others, be sure to name them appropriately for your intents (eg: billing, account, offers, etc).

In this tutorial, the bot will live in the Bot skill and we will later implement a transfer to the Human skill.

Click on the Bot and Human skills you just created and copy down the skill IDs from the URLs. This will be important later. The skill ID will be the number at the end of the URL: https://z1.le.liveperson.net/a/accountNumber/#um!skills/**skillID**

<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_1.png">

#### Create LiveEngage Agents

In addition to the skills, you also need User Agents as well. One for the bot and one for the agent that will be receiving the inbound transfers (for human escalation).

In LiveEngage, go to Users and create the bot user.

Make sure that the User Type is set to Bot and fill out the Login name, Email, Nickname and Name fields. If you do not see the User Type field, contact your LivePerson representative to enable this for you.

<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_2.png">

For the login method, choose API key and choose **Generate API Key** as the new keys will be filled in automatically. **Copy this information down as you will need it shortly.** If you do not see the API Key option, contact your LivePerson representative to enable this for you.
<!--<img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_3.png">-->

Assign the bot user as an Agent, set the Max number of live chats to Unlimited, add the default Bot skill and click Save. **Do NOT add the other skills.**

<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_4.png">

Create a new human agent and assign it to the Human skill, or assign yourself to the Human skill and make sure that you can take chats as an agent.

#### Assign Bot Skill to an Engagement

We will test this connection with a standard web chat engagement.

Create a campaign and engagement that routes to the new Bot skill. Tap Publish when done.

<img style="width:400px" src="img/ConvoBuilder/helloworld/confLE_5.png">

<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_6.png">

### Step 11: Connect Automation to LiveEngage

Go back to Conversation Builder to link your automation to the bot user you just created.

#### Set up an Enterprise Integration

Click on the gear icon and and choose Enterprise Integrations.
<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_7.png">

Click Add Enterprise Integration. Select LivePerson from the drop down menu, enter a Company Name, and click **Save**.

Click Add Agent.

Fill out the agent information for the bot user you created.  

1. Select Chat as the Conversation Type

2. Add your LE account number

3. Enter the login name for the bot user

4. For the Role, select Assigned Agent

5. Choose OAuth for the Authentication Type, and fill in the 4 keys that were generated for the bot user from [Create a Bot User](#heading=h.4txh4ov0sw39).  

Click **Save** once everything is entered.

<img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_12.png">

#### Deploy the Bot Agent

To finally connect your Bot User Agent with your LiveEngage account, you need to deploy your Bot Agent. To deploy to the Demo server environment (for testing), just hit the green play button to start.

To deploy to Production, you will need Operations role access.

<img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_13.png">

1. From the drop down menu, select Operations. If you do not see the Operations module, contact your Administrator to provide access or to assist you with this.

2. In the Operations module, find your bot agent. The filter defaults to bots in the "Production" environment. Switch it to “All”.
    <img style="width:800px" src="img/ConvoBuilder/helloworld/confLE_14.png">

3. Tap on the menu (three dots) to the left of your bot’s name and select Deploy Agent.
    <img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_15.png">

4. For an official client bot, select Production.
    <img style="width:700px" src="img/ConvoBuilder/helloworld/confLE_16.png">

5. Tap on the menu again and select Start Agent.
    <img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_17.png">

6. Reload your browser or wait a few moments and your bot agent should now show as online and connected.
    <img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_18.png">


### Step 12: Transfer from Bot to Human

Let's now set up an Integration to transfer the user to a human agent in LiveEngage. This is called an Escalation.

From the Conversation Builder, navigate back to the Integrations area.

Click the **+** icon in the bottom-left corner to create a new API with the following parameters. 

* **Integration Name**: Escalation

* **Response Data Variable Name**: Escalation

* **Method**: POST

* **URL**: 

  1. For US: https://platformservice.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  2. For EU: https://platformservice-eu.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  3. For APAC: https://platformservice-ap.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

* **Request Headers**:

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
    </thead><tbody>
    <tr>
      <td>Authorization</td>
      <td>YOUR PERMANENT API ACCESS KEY<br>
        This is found under your user account settings here:<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/apiaccess.png"><br>
        Then tap on the API tab and copy the API Access Key<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/permapikey.png">
      </td>
    </tr>
    </tbody>
  </table>


* **Post Body**:

  ```json
  {
  "userPlatformId" : "{$chatBotUserPlatformId}",
  "chatBotId": "{$chatBotId}",
  "message": "{$botContext.transferMessage}",
  "conversationId": "{$botContext.convId}",
    "agentSkillName": "<<ENTER SKILL NAME HERE>>",
    "agentSkillId": "<<ENTER SKILL ID HERE>>"
  }
  ```
	

**Save** the API settings.

The `agentSkillName` and `agentSkillID` should be set to the Human skill that you created at the beginning of this tutorial.

<img style="width:750px" src="img/ConvoBuilder/helloworld/createescalationapi.png">

Now we can return to the Dialog editor by tapping on Dialogs on the top of the workspace.

<!--<img style="width:300px" src="img/ConvoBuilder/helloworld/image_20.png">-->

To handle the flow for the Agent Handoff we need to create a new regular dialog and call it "Agent Handoff" or similar.

In the User Says interaction, type "I want to speak to an agent". In the Interaction Details > Settings we can create a pattern with alternates for keywords like `*(agent|representative|help|human)*`.

Next, we need to add our Integration interaction and select "Escalation" from the drop down. 

<img style="width:750px" src="img/ConvoBuilder/helloworld/image_345.png">

For this next part, we will need to leverage some JavaScript code to set some variables. While selected on the Integration interaction, tap on the CODE tab in the interaction details and then tap on the **+** icon next to Pre-Process Code. This will launch a JavaScript code window. 

<!--<img style="width:300px" src="img/ConvoBuilder/helloworld/selectescalation.png">-->

In order to guarantee that we provide an outgoing message to the user prior to handoff, we supply a message as part of the API called the transferMessage. The problem is, since we’re previewing in HTML (not a LiveEngage client), the escalation to LiveEngage won’t get called, so we need to provide a message to us for testing purposes. We can do this by adding the following JavaScript:

```javascript
var channel = botContext.getChannel();
var msg = "Hold on while I transfer you to an agent.";

if(channel == "web"){
  botContext.sendMessage(msg);
}else{
  botContext.setBotVariable('transferMessage',msg,true,false);
}
```

When you set the "transferMessage" bot variable, you are filling the `{$botContext.transferMessage}` slot that the integration sends for you.

See [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) learn about all of the available functions.

<img style="width:750px" src="img/ConvoBuilder/helloworld/preprocesscode.png">

#### Testing the Connection

If you are using Chat you can use [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]), adding your account number to the URL.  If you are using Messaging for Web, use [this test page](https://bigbag-retail-demo.herokuapp.com).

1. Be sure you are online as a Human agent in LiveEngage.

2. Click the Live Chat button on the test page.

3. Enter a message and hit Send.
    <img style="width:200px" src="img/ConvoBuilder/helloworld/userwindow1.png">
    <img style="width:200px" src="img/ConvoBuilder/helloworld/userwindow2.png">

4. Try to to trigger the transfer dialog that you just created and confirm the right skill on LiveEngage.

5. The conversation should be transferred to you as long as you assigned your test agent credentials with the appropriate skill.

6. As an agent, when you accept the inbound transfer, you should see something like this in your LiveEngage dashboard.

<img style="width:750px" src="img/ConvoBuilder/helloworld/confLE_19.png">