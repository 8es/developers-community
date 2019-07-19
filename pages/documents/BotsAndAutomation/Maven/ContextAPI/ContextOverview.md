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

The Context API is an on-demand repository for metadata about consumers and their conversations.

In any given conversation, Maven AI analyzes and provides extra contextual metadata about the nature of the conversation and consumer. The Context API is a way to retrieve and store this metadata information.

The Context API provides a system of organization that allows you to manage your data. Each brand can have multiple namespaces for different business use cases. Each namespace can have multiple groups of information based on key-value pairs. Key-value pairs can be stored at either the namespace level or the group level.

Define & store custom attributes with static data or CRM integrations via [LivePerson Functions](liveperson-functions-overview.html). Carry over custom context through conversational journey.

In the long-term, the context API will automatically contain data about each consumer useful to both brands and to Maven, and you can receive that data from both the brand and Maven. To ensure the contextual service works seamlessly with the Maven platform, the Context API will expose a defined schema for supported properties. All the CRUD operations for the Context information are supported.

Initially, this API is only for custom data that you set and get.

### Who is the Context API for

If you are already using a Maven AI solution, you may want to use the Context API to retrieve and send values between bots. You may use the Context API to store information related to conversations.

### Example Use Cases

* Passing context and customer routing / escalation path from Watson bots to conversation builder bots. 

* Storing temporary notes from agent widgets when the conversation is hidden - to be retrieved on auto close event via [FaaS trigger](liveperson-functions-development-events-templates.html) or messaging interactions query to get conversation IDs for the namespace 

### Getting Started

1. Get your API Key

    You will need to create and use the API key before using Context Service. Contact Live Person Support to create your API Key. Only 1 API key can be active for any given account ID at any given time.

2. Get your base URL

    You will use the base URL in all API calls.

    * Americas: https://z1.context.liveperson.net

    * EMEA: https://z2.context.liveperson.net

    * APAC: https://z3.context.liveperson.net

3. [Create your namespace](maven-context-api-methods.html#create-a-custom-namespace)
