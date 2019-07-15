---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Maven
subfoldername: Context API
permalink: maven-context-api-overview.html
indicator: both
---

### What is the Context API

The Context API gives access to inbox contextual attributes (user, conv history, operational context). Define & store custom attributes with static data or CRM integrations via FAAS. Carry over custom context through conversational journey.

This API will act as an on-demand repository for metadata about consumers and their conversations. Long-term, it will contain data about each consumer useful to both brands and to Maven, and can receive that data from both the brand and Maven.
To ensure the contextual service works seamlessly with the Maven platform, the Context API will expose a defined schema for supported properties. All the CRUD operations for the Context information are supported.

Each brand can have multiple namespaces.  Each namespace can have also have several "groups" of information. Each namespace can have several key value pairs of data that can be stored either at the namespace level or at the group level.


### What can you do with the Context API

* Passing context and customer routing / escalation path from Watson bots to conversation builder bots. 

* Storing temporary notes from agent widgets when conversation is hidden - to be retrieved on auto close event via faas trigger or messaging interactions query to get conversation ids for the namespace 


### Who is the Context API for

If you are already using a Maven AI solution, you may want to use the Context API to retrieve and send values between bots. you may use the context API to store information related to conversations.

### Getting Started

1. Get your API Key

    You will need to create and use the API key before using Context Service. Contact Live Person Support to create your API Key. Only 1 API key can be active for any given account id at any given time.

2. Get your base URL

    You will use the base URL in all API calls.

    * https://z1.context.liveperson.net

    * https://z2.context.liveperson.net

    * https://z3.context.liveperson.net

3. [Create your namespace](maven-context-api-methods.html#create-a-custom-namespace)
