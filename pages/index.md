---
title: Getting Started
permalink: index.html
---

### Welcome to LivePerson Developers!

If you find any issue with the documentation, please don't hesitate to [visit the site's GitHub repository](hub.com/LivePersonInc/developers-community) and let us know!

If you're looking for support with any of the documents or APIs on the site, please don't hesitate to contact our Dev Support team directly.

Below, you will find general information on getting started with LivePerson's API documentation. However, if you're looking for a guide on how to get started with specific aspects of our APIs, here are some popular subjects and their guides:

<div class="gettingstartedwrapper">
  <div class="gettingstartedrow">
<a class="gettingstartedlink" href="getting-started-with-liveengage-apis-getting-started-with-authentication.html">
<div class="gettingstartedbox">
    <div class="gettingstartedtitle">Authentication</div>
    <div class="gettingstartedsummary">Learn how to authenticate with LivePerson APIs by using bearers, tokens and our login services!</div>
  </div>
  </a>
<a class="gettingstartedlink" href="getting-started-with-liveengage-apis-getting-started-with-data-apis.html">
<div class="gettingstartedbox">
    <div class="gettingstartedtitle">Data APIs</div>
    <div class="gettingstartedsummary">Programmatically report on your contact center operations using our robust Data APIs!</div>
  </div>
  </a>
  </div>
  <div class="gettingstartedrow">
<a class="gettingstartedlink" href="getting-started-with-liveengage-apis-getting-started-with-engagement-attributes.html">
<div class="gettingstartedbox">
    <div class="gettingstartedtitle">Engagement Attributes</div>
    <div class="gettingstartedsummary">Enrich your chat and messaging interactions with additional information on your consumers!</div>
  </div>
  </a>
<a class="gettingstartedlink" href="getting-started-with-liveengage-apis-getting-started-with-authentication.html">
<div class="gettingstartedbox">
    <div class="gettingstartedtitle">Major Flows</div>
    <div class="gettingstartedsummary">Learn how to use several APIs in parallel to create applications and answer complex use cases!</div>
  </div>
</a>
  </div>
</div>


### Before You Get Started - Considerations and Requirements

Because this site includes a host of diverse documents, encompassing the considerations and the requirements for all of them in this document is challenging. Therefore, each document has its own overview, where specific considerations for using the API/SDK are listed. However, there are a few considerations and requirements which are true for all resources on this sit and we'll cover them here for quick reference.

* **Account requirements** - many of the APIs documented on this site configure and manipulate LiveEngage features or capabilities. Therefore, in order to use these APIs, you need to first make sure your account is configured to access those features. A good example would be using the Agent Messaging SDK to connect a bot as an agent to LiveEngage; if your account is not enabled to support bot users, you won't be able to use this SDK. **The best way to check if certain features are enabled for your account or not is to directly contact your account team or LivePerson Support**. Doing this before you start developing will save you more work and frustration down the line.

* **If you do not currently have a LivePerson account or you're looking for a different one to work on, you can simply create a Developer's Account by clicking here. Please note that in order to get all the relevant features enabled for this account, you'll need to contact your account management team or LivePerson Support.**

* **Development languages** - most of our APIs and SDKs require your developers to be fluent in JavaScript (and its iterations, like NodeJS). Since we use a REST model, fluency in the JSON is also highly recommended (although most JSON payloads tend to be simple, there are exceptions to this rule, like with Structured Content). Our Mobile App Messaging SDKs have both an iOS and an Android version, which require knowledge of Swift and Java, respectively. General knowledge of HTTP calls and responses, REST APIs, server to server communication and web applications is also highly recommended. For our Data APIs, retrieving the information is only the first step and data analysis/research skills are highly recommended.

* **Authentication** - some of our APIs require authentication before using them. This is done via either of two methods: authentication via login (using your regular account credentials) or authentication via an API key (created and retrieved via the LiveEngage UI). Before you start work with our APIs, it's best to make sure you have valid credentials for your account (note that the permission levels for the user you'll use to login are the same permissions your user has in LiveEngage) and a relevant API key. To learn more about the login method, please [see this guide](https://developers.liveperson.com/login-getting-started.html). To learn more about retrieving API keys, [use this guide](https://developers.liveperson.com/guides-gettingstarted.html). For more in-depth information and additional authentication methods, please see the full Authentication Getting Started segment.


### Common Use Cases and Where You Should Get Started

Below you'll find a full description of each section of the documentation. This overview will help you better understand what our documentation and APIs can help you do on top of the LiveEngage Open Platform. However, if you already have a project in mind and would simply like to start building, we've included a list of common use cases and documents that are a good entry point to start from. If you can't find the project you had in mind, please read the full description of the different sections below or reach out to Dev Support for more guidance!

* **Integrating LiveEngage with your Native App** - simply refer to our Mobile App Messaging SDKs, [for iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-overview.html) or [for Android](https://developers.liveperson.com/android-overview.html). These include everything you need to know in order to integrate LiveEngage with mobile applications.

* **Customizing LiveEngage Reporting or Creating New Reports** - this use case would involve working with our Data APIs, specifically our [Data Access API](https://developers.liveperson.com/data-data-access-overview.html). It would also require developing some sort of UI if you'd like to display these reports. For more information, you can also refer to our [Custom Dashboard solution document](https://developers.liveperson.com/products-data-custom-dashboard-overview.html).

* **Building or Integrating a New Workspace Widget** - LiveEngage gives you the ability to add third party service widgets into the agent workspace for quick reference. For example, you could add your CRM to the agent workspace, allowing your agents to submit or update leads right from LiveEngage. To achieve this, please refer to the [Agent Workspace Widget SDK](https://developers.liveperson.com/agent-workspace-sdk-overview.html).

* **Looking for more use cases?** Check out the Major Flows document, a part of this Getting Started guide, for more detailed  examples of how to use our APIs to build on top of our Open Platform.

### Using the Site to Find the Right Document

If you don't have a specific use case in mind, simply browse the site to find out more about our API capabilities and features. The LivePerson Developers site is comprised of the following sections:

* **Guides** - this section includes general guides to using our APIs and SDKs. These work across all of our APIs, except where otherwise mentioned. In this section you can find documents on topics like Authentication, how to retrieve API keys, using Engagement Attributes and more.

* **Consumer Experience** - this section includes documentation pertaining to features which impact, manipulate or influence the consumer experience (i.e. the interface with which a consumer starts an interaction with your brand). It includes useful documentation regarding our Mobile App Messaging SDK (used to integrate messaging right into your native application), the Messaging Window API (used to customize and create messaging windows) and the Connector API (used to build connector applications which integrate LiveEngage to  many third-party messaging platforms).

* **Agent Interactions** - this section includes documentation pertaining to agent behavior, workspace and features. Important documents include the Messaging Agent SDK (which enables bots as agents and handles sending messages to and from those bots), the Chat Agent API (which allows you to control how chat messages get sent to and from your agents) and the Agent Workspace Widget SDK (which allows you to create and integrate custom widgets into the LiveEngage agent workspace).

* **Data** - this section includes documentation pertaining to LivePerson's data storage, analysis and reporting capabilities. These documents allow you to poll LivePerson servers yourself, retrieving various data types yourselves for use in your own reporting tools. Main documents include the Data Access API (which allows you access to your account's data across all segments), the Messaging Operations API (which retrieves useful information at the contact center level, allowing agent managers to make their call centers more efficient) and the Engagement History API (which focuses on retrieving messaging interaction history and transcripts).

* **Real Time Interactions** - this section includes documentation pertaining to events which are fired or information that is passed during a conversation. These documents include the Engagement Window Widget SDK (which allows you to integrate third party web services to the engagement window, extending its functionality), the Engagement Attributes API (which allows you to pass and receive engagement attributes which provide further information on a visitor) and the Visit Information API (which allows you to retrieve information about the visitor in real time).

* **Account Configuration** - this section includes documentation pertaining to APIs which allow you to configure your LiveEngage account via REST calls. This allows you to perform bulk actions with greater ease on your account or configure it programmatically, according to rules which you determine. These documents include the Predefined Content API (which allows you to retrieve, create and compare predefined content on your account), the Automatic Messages API (which allows you to retrieve, create and compare automatic messages on your account) and the Agent Status Reason API (which allows you to retrieve, create and compare status reasons on your account).

* **Admin** - this section includes documentation pertaining to APIs which allow you to configure various administration features on your account, such as creating new skills, agent groups and more. Much like the Account Configuration documents, this allows you to perform bulk actions with greater ease on your account or configure it programmatically, according to rules which you determine. These documents include the Skills API (which allows you to retrieve, create and compare skills on your account), the Users API (which allows you to retrieve, create and compare users on your account) and the Profiles API (which allows you to retrieve, create and compare profiles on your account).

### How to Read LivePerson Documents

While there is some variety across LivePerson's documents, we try to stick to an overall standardized format. Therefore, it should be relatively easy to find the information you need inside each document. Let's break down how each structure is constructed:

1) Overview. Every document starts with an overview of the API it documents. This overview contains either a textual description of what the API does or the authentication methods supported by the API (see above for more details). The overview will then contain use cases for the API, more information on working with the API if necessary (like extra installation steps, other APIs which support it and so forth).

2) Getting Started. This is only included in some APIs, where further configuration or installation steps are required (for example, the Connector API and the Monitor API which require an app installation process). Where this section doesn't exist, it means there is no further installation needed and you can start working with the API once you've authenticated.

3) Methods. These are the actual API calls from which the API is comprised. Each method is broken down in the following way:

  * A textual description of the method and what it does along with any special considerations to using it.

  * **The request**. This will include the HTTP method and the URL to which it should be sent.

    * The request headers. Various HTTP headers that have to be passed along with the request.

    * Request body. What is the payload (usually JSON) that needs to be passed with this request? Includes an example of such a body.

  * **The response**. What should you expect to get back from the request?

    * Elements in the response. This will break down the response example and explain each key and its values.

    * Response codes. What are the different codes sent back with this response and what do they represent?

4) Any additional information about the API. This field changes between each API. Some of our APIs require understanding of different LiveEngage services (like the Connector API) or even third party software. In those cases, you'll find additional folders. Sometimes, these will appear before Methods, if they're required for the methods to work, but they will usually appear afterwards.

5) Appendix. The appendix will include any special requirements or notes necessary to working with the API like security certificates, advanced features and more.

**Note**: our recommendation is to start reading each document from its overview in order to first familiarize yourself with what it does and how it works. Then, moving on to the Methods section is the next logical step. The methods comprise the important parts of the API and cover all its functionality. Even if you're not a developer, reviewing this section will give you a more comprehensive and in depth idea of what can be achieved with the API.
