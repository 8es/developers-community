---
title: Configuration
level1:
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 21
indicator: both
permalink: webhooks-configuration.html
---

### WebHooks Capabilities Configuration

A registration of an application to receive WH notifications is achieved by enabling the “webhooks” capability of that application. This is done by adding the “webhooks” json attribute inside the “capabilities” section of the [**App Installation JSON**](AppInstallJSON.html){:target="_blank"}.

Here is an example of such configuration:

```json
{
    "client_name": {string},
    "enabled": {boolean},
    "logo_uri": {string},
    ...
    "capabilities": {
      "webhooks": {
        "ms.MessagingEventNotification.ContentEvent": {
          "endpoint": "https://www.application.endpoint.com/",
          "max_retries": 1
        },
         "ms.MessagingEventNotification.RichContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
         },
         "ms.MessagingEventNotification.ChatStateEvent": {
          "endpoint": "https://www.application.endpoint.com/"
        },
        "cqm.ExConversationChangeNotification": {
          "endpoint": "https://www.application.endpoint.com/",
	       "max_retries": 3
        }
      }
    }
}
```

The “webhooks” json attribute is a map, of which each entry is a single notification registration. Each entry consists of the following:
  * key (string) - the event type
  * value (json) - the attributes of the notification, including:
    * endpoint (mandatory) - the SSL secured HTTP url to which to send the notification.
    * max_retries (optional) - maximum number of retry attempts for a failed notification request (possible values: 0 - 5; default value: 0).  
