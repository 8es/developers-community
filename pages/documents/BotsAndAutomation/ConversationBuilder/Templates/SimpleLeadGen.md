---
pagename: Simple Lead Gen
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-templates-simple-lead-gen.html
indicator: both
---

The Simple Lead Gen template is designed to capture contact information from a customer and send the results to an email address.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_simple_lead_image_0.png">

### Included Items

#### **Dialogs**

* Welcome

 * The Welcome dialog greets the user and then navigates to the first interaction in the LeadGen dialog. You should customize the greeting with your appropriate brand message.

* Lead Gen

 * This is the main dialog for collecting the user’s contact information.

 * By default this dialog collects (and attempts to validate) the user’s name, email address and phone number. There is also an interaction to collect a description of their interest.

 * Feel free to modify the language used in the lead gen interactions to suit your brand.

* Fallback

 * Will display when the user enters an utterance that is not recognized.

* EscalateLiveAgent

 * This will perform a transfer to a particular LiveEngage skill.

#### **Integrations**

* Agent_Transfer

 * As you would expect, this will perform a transfer to a LiveEngage skill.

 * You will need to configure the skill name, id and transfer message in the Global Functions.

* Send_Email

 * This integration will send an email to the ownerEmail address supplied which contains all of the collected fields from the LeadGen dialog.

 * You will need to configure your email address, subject and other information in the Global Functions.

### Configuration Needed

To customize this template, you will need to do the following.

#### **General Dialog Customization**

As noted previously, you will want to review each of the dialogs, starting with Welcome and Lead Gen, and customize the verbiage used to greet your customer and request their details.

This is done simply by editing the text copy of the interactions and hitting Enter or using the menu to Save.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_simple_lead_image_1.png">

#### **Lead Gen Dialog **

The name, email and phone number steps of the LeadGen dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

For email address and phone number capture, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

  // Max count of fail user inputs 

  setVariable('maxEmailInvalidAttempts', 2);

  setVariable('maxPhoneInvalidAttempts', 2);

If you want to remove some of the lead gen capture interactions (eg: phone number), you will need to be sure to review the **Next Step** navigation so that the previous interaction will go to the next interaction in the dialog. 

#### **Global Functions**

As mentioned previously, there are some variables that must be configured to get the most out of this template. Click on the "Global Functions" button to access all the Global functions & variables to be configured.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_simple_lead_image_2.png">

**Email Integration**

The Send to Email integration is enabled by default. If you would like to use this, modify the following values.

<table>
 <tr>
 <td>Variable Name</td>
 <td>Description</td>
 </tr>
 <tr>
 <td>ownerEmail</td>
 <td>Email to send information collected by bot</td>
 </tr>
 <tr>
 <td>replyEmail</td>
 <td>Reply To email address, displayed to the user in their email program</td>
 </tr>
 <tr>
 <td>emailSubject</td>
 <td>Email subject </td>
 </tr>
 <tr>
 <td>emailText</td>
 <td>Initial email text, instead of "Lead Gen Form Results" value </td>
 </tr>
</table>


**Agent Escalation**

If the user requests an agent or if they reach the max invalid attempts on email or phone, they will be escalated to a Liveperson Agent.

<table>
 <tr>
 <td>Variable Name</td>
 <td>Description</td>
 </tr>
 <tr>
 <td>escalationBotMessage</td>
 <td>What the bot should say prior to hand off </td>
 </tr>
 <tr>
 <td>botAgentSkillId</td>
 <td>The skill id you will transfer to</td>
 </tr>
 <tr>
 <td>botAgentSkillName</td>
 <td>The skill name you will transfer to</td>
 </tr>
</table>


