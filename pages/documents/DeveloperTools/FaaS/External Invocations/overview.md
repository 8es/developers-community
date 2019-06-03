---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-external-invocations-overview.html
indicator: both
---

To give brands the option to call their FaaS functions from outside of LivePerson's platform, we provide an API for External Invocation. With this API they can call their functions externally, secured by OAuth 2.0.

Here is a short OAuth 2.0 introduction video: [link](https://www.youtube.com/watch?v=CPbvxxslDTU)

### Grant Types
OAuth2.0 offers several [grant types](https://oauth.net/2/grant-types/) for different use cases. FaaS supports the following two grant types:

- Client Credentials: This is the preferred way to authorize for machine-to-machine communication. Choose this option if you want to call FaaS functions from an external system such as a cron job (see here for more infomation on [Client Credentials](https://oauth.net/2/grant-types/client-credentials/)).
- Authorization Code: This is a redirect based flow. Use this grant type if you want to call FaaS on behalf a LiveEngeage user such as an Agent or Administrator(see here for more infomation on [Authorization Code](https://oauth.net/2/grant-types/authorization-code/)). 