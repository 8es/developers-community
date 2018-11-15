---
pagename: Overview
Keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Apple Business Chat Authentication
permalink: apple-business-chat-authentication-overview.html
indicator: messaging
---

### Overview

The Apple Business Chat messaging channel now allows you to authenticate consumers (only from iOS 12 onwards) using an OAuth 2.0 provider.

* LiveEngage will support agent/bot generation of the new Authentication Interactive Message using the Structured Content framework and configuration (similar to list and time picker)
* Agent/bot will know if consumer supports the new Authentication Message via an engagement attribute, in order to determine if the consumer is qualified to receive the authentication message before sending it (a new SDE will be exposed with the Authentication supportability).
* Consumer will receive the Authentication Interactive Message and will be able to tap to authenticate on the brand’s Authentication service URL
* Agents and bots on LiveEngage will get real-time updates upon a consumer’s response
* Upon successful or failed authentication, LiveEngage will support passing the authentication status and token back to LiveEngage [Conversational Metadata](https://developers.liveperson.com/messaging-agent-sdk-conversation-metadata-guide.html) (via the agent SDK) to allow the brand to perform validation on the authentication information.

<img class="zoomimg" style="width:800px" src="img/apple_auth.png" alt="apple business chat authentication flow">

### Setup

Use your private OAuth service and supply the service details in your Apple management area (register.apple.com). 

The details include:  

* Authentication endpoint URL
* Token URL
* Client Identifier

#### Instructions on how to create a free OAuth2 service using [auth0](https://auth0.com/)

1. Create a [auth0 account](https://auth0.com/)
2. Create a new Application Machine to Machine
3. Put [https://auth.businesschat.apple.com](https://auth.businesschat.apple.com) in Allowed Callback Urls
4. Put [https://auth.businesschat.apple.com](https://auth.businesschat.apple.com) in Allowed Origins & Allowed Web Origins
5. On the same screen, go to the bottom and select advanced settings -> Endpoints
6. Copy Auth URL, Token Url, Client Secret (It is at the top) and put it in your register.apple.com portal
7. Once Apple approves the new auth details, use the Structured Content to trigger the Bubble.

### Sending an Apple Authentication Request to a Consumer

Similar to [Apple structured content templates](structured-content-apple-business-chat-templates-introduction.html), you will send two template payloads (Metadata and Body) for the Apple Auth request to the consumer.

Different from Apple structured content templates, the **body** template will only define how the Apple Auth bubble is displayed in the LiveEngage agent workspace. The **metadata** template will define how the bubble is displayed in the consumer's Messages thread.

#### Request Metadata

**BusinessChatMessage - receivedMessage and replyMessage bubbles**

The Business Chat Message holds the received and reply message, which defines how the Authentication Interactive Message bubbles layout will be displayed when the message is received on the consumer’s device and a an authentication is submitted by the consumer.

**ConnectorAuthenticationRequest**

The authentication request holds the request identifier, which allows the brand to identify the authentication request and map the OAuth token in the response to the request originator.

Please use the structured content metadata JSON with the relevant fields, as presented in the example JSON below.

##### Metadata Template Example:

```json
[  
  {  
    "type":"BusinessChatMessage",
    "receivedMessage":{  
      "title":"Sign In to LivePerson",
      "subtitle":"Thank you",
 "imageURL":"https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",
      "style":"small"
    },
    "replyMessage":{  
      "title":"You Signed in",
      "subtitle":"Thank you",
"imageURL":"https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",
      "style":"small"
    }
  },
  {  
    "type":"ConnectorAuthenticationRequest",
    "requestIdentifier":"insert the request UUID here"
  }
]
```

##### Metadata Object Properties

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>BusinessChatMessage</td>
    <td>Represents the Business Chat bubbles view objects  </td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>ConnectorAuthenticationRequest</td>
    <td>Represents a Business Chat authentication request </td>
    <td>Object</td>
    <td>N</td>
  </tr>
  </tbody>
</table>


###### Connector Authentication Request Object Properties

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>requestIdentifier</td>
    <td>identify the authentication request and map the to the request originator.</td>
    <td>string</td>
    <td>N</td>
  </tr>
  </tbody>
</table>


###### Received Message Object Properties  

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>Style</td>
    <td>The Style of the authentication interactive message reply bubble. Can be set to icon, small or large. Defaults to icon</td>
    <td>Enum - icon, small, large
</td>
    <td>N</td>
  </tr>
  <tr>
    <td>title</td>
    <td>The title of the bubble </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>Subtitle to be displayed under title</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>imageURL</td>
    <td>Image to be placed in the authentication interactive message received bubble layout</td>
    <td>String</td>
    <td>N</td>
  </tr>
  </tbody>
</table>


###### Reply Message Object Properties  

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>style</td>
    <td>The Style of the authentication interactive message reply bubble. Can be set to icon, small or large. Defaults to icon</td>
    <td>Enum - icon, small, large
</td>
    <td>N</td>
  </tr>
  <tr>
    <td>title</td>
    <td>The title of the bubble </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>Subtitle to be displayed under title</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>imageURL</td>
    <td>Image to be placed in the authentication interactive message reply message bubble layout</td>
    <td>String</td>
    <td>N</td>
  </tr>
  </tbody>
</table>

#### Request Body

The request body defines how the Apple Auth bubble looks in the LiveEngage Agent Workspace and not how the bubble looks on the consumer device. This Apple Auth structured content template in the Agent Workspace is for conversational context, transcript and historic records, as well as ease of use for agents.

See the [introduction to templates](structured-content-introduction-to-structured-content.html#templates) for information on a basic template that you can send.

##### Body Template Example

A very simple, basic structured content template for Apple Auth would be just an image and text in a horizontal arrangement.

```json
{
  "type": "horizontal",
  "elements": [
    // image and text elements here
  ]
}
```

### Recieving an Apple Authentication Response from a Consumer

After the consumer submits their Apple Auth details in the form, the Apple Auth response is delivered to LiveEngage using [Conversational Metadata](messaging-agent-sdk-conversation-metadata-guide.html).

Conversational Metadata provides a way for developers to pass metadata or context information to a bot using the Messaging Agent SDK.

#### Response Metadata

Authentication response metadata is context information about the consumer authentication response status. This information should be used to allow the bot to validate the authentication status of the consumer, as well as to enable the bot to report the auth response token back to the brand’s OAuth service in order to validate user identity.

##### Example Conversational Metadata response:

###### Success example response:

```json
{  
  "type":"ConnectorAuthenticationResponse",
  "status":true,
  "token":"Token String"
}
```

###### Failure example response:

```json
{  
  "type":"ConnectorAuthenticationResponse",
  "status":false,
  "errors":[  
    {  
      "message":"applicable apple error codes"
    }
  ]
}
```

###### `"type": "ConnectorAuthenticationResponse"` Object Properties


<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>Status</td>
    <td>Status of the consumer authentication - can be only true (successful) or false (failed) </td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>token</td>
    <td>Token string - will be available only when authentication was successful </td>
    <td>String</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Type of authentication error as received from Apple - will be available only when authentication failed </td>
    <td>Array</td>
  </tr>
  </tbody>
</table>



### Guidelines

* The agent or bot will know if the consumer supports the Authentication capability via the "role" SDE:
    * If consumer device supports authentication, value will be: "Apple Authentication supported"
    * If consumer device does not support authentication, value will be: "Apple Authentication not supported"
    * Please note: If the consumers updates the iOS version from 11 to 12 when still in an active conversation in LiveEngage, the conversation will not be updated with the consumer’s new capability - to solve this, the conversation should be closed and opened again in LiveEngage.
* Received and reply bubble experience:
    * If brand is using received bubble with style "icon", “small”, “large” -
        * Received bubble experience - If image was added, the image in the received bubble will not be presented in the push preview message. Once the brand will tap to view bubble in the conversation thread, the image will be presented. The size of the received bubble will be defaulted to "icon"
        * Reply bubble experience -  Image will always be defaulted to the "received" bubble image (if configured), if no image was added to the received bubble, no image will be presented in the reply bubble. The size of the reply bubble will be defaulted to “icon”.
        * If authentication fails, the Reply bubble text and subtitle configured will be overridden by apple to the following text "Authentication failed"
* Image URLs must be whitelisted in LiveEngage - Images added in the RecievedMessage and ReplyMessage must be whitelisted in the structured content image whitelisting area. Please contact you LP representative to whitelist images.

### Limitations

* In the current version of Authentication Interactive Message support, only a bot in LiveEngage (using the Agent SDK) will be able to receive the authentication response (using the Conversation Metadata). Human Agent is currently not exposed to these events. Adding UI indication in LiveEngage Workspace is planned for Q4, 2018
* Currently any Business Chat conversation are appearing as authenticated conversation in LiveEngage (once the consumer authenticates using the interactive message the conversation status of will stay the same) - Changing the Business Chat conversation status to unauthenticated is planned for Q1, 2018.  

