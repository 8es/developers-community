---
title: Overview
keywords:
level1: Documents
level2: Admin
level3: LOBs API


level-order: 2
order: 9
permalink: overview.html
root-link: true
indicator: both
---
### Introduction

By creating individual Lines of Business (LoBs) within one single LiveEngage account, each with its own campaigns and engagements, 
brands are better able to track campaign success and engagement impact on each area of their business.
Each Line of Business will be set up with unique and siloed campaigns and reports. 
Campaigns will be assigned to a particular LoB, meaning that campaign managers will have access to all campaigns, 
with the ability to filter campaign lists and reports by LoB.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use Cases for Lobs API

* Automatically update parameters of lobs

* Automatically update, edit or delete lobs

* Synch lobs within LiveEngage with your internal HR or staffing systems.
