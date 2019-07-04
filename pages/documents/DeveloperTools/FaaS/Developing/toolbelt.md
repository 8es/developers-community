---
pagename: Toolbelt
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Developing with FaaS
permalink: function-as-a-service-developing-with-faas-toolbelt.html
indicator: both
---

As mentioned in the [Getting Started document](function-as-a-service-getting-started.html), we offer you access to our `lp-faas-toolbelt` Node.js module, which is a language-specific utility library for lambdas.

Currently, the Toolbelt offers the following methods:

| Method | Description |
| :------- | :----- |
| Toolbelt.SFClient() | Returns a Salesforce Client, that is configured to work with the FaaS Proxy. |
| Toolbelt.HTTPClient() | Returns a HTTP Client, that is configured to work with the FaaS Proxy. |
| Toolbelt.SecretClient() | Returns an Secret Storage Client, that is configured to work with the FaaS Secret Storage. |
| Toolbelt.SMTPClient(config) | Returns an SMTP Client instance, which is configured using the provided config. |

Here are usage example, which are taken out of the official templates:

### Salesforce Client:

Salesforce Client that is based on [jsforce](https://www.npmjs.com/package/jsforce) for connecting LivePerson Functions to any Salesforce system.

```javascript
const { Toolbelt } = require('lp-faas-toolbelt');
const sfClient = Toolbelt.SFClient(); // for API docs look @ hhtps://jsforce.github.io/

//This will establish a connection with SF. And leverage Access Token / Refresh Token to login
const con = sfClient.connectToSalesforce({
	loginUrl: "https://test.salesforce.com",
	accessToken: "PROVIDE_YOUR_ACCESS_TOKEN", //Obtain it from Secret Store
	refreshToken: "PROVIDE_YOUR_REFRESH_TOKEN" // Obtain it from Secret Store
});

con.query(query, function(err, queryResult) {

});
```

### HTTP Client:

HTTP Client that is based on [request-promise](https://www.npmjs.com/package/request-promise) for opening external HTTP connections.

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
//Obtain an HTTPClient instance from the Toolbelt
const httpClient = Toolbelt.HTTPClient(); // For API Docs look @ https:/www.npmjs.com/package/request-promise

const URL = "https://www.liveperson.com/";

httpClient(URL, {
	method: "GET", //HTTP VERB
	headers: {}, //Your headers
	simple: false, //IF true => Status Code != 2xx & 3xx will throw
	resolveWithFullResponse: true //IF true => Includes Status Code, Headers etc.
})
.then(response ==> {
	...
})
```

### Secret Storage Client:

Storage Client that is able to read & update secret values. The following methods exist:

**SecretClient.readSecret**

Searches the secret that belongs to the provided key. Will raise an error if there is no secret for the provided key.

| Parameter | Description |
| :------- | :----- |
| key | Name of the secret |

| Returns | Description |
| :------- | :----- |
| secretEntry | Promise which resolves to an Object with properties `key` & `value` |

**SecretClient.updateSecret**

Updates the secret with the provided update entry.

| Parameter | Description |
| :------- | :----- |
| secretEntry |  Object with properties `key` & `value` |

| Returns | Description |
| :------- | :----- |
| secretEntry | Promise which resolves to the created Secret with properties `key` & `value` |

**Sample Usage**

```javascript
// import FaaS Toolbelt
const { Toolbelt } = require('lp-faas-toolbelt');
// obtain SecretClient from Toolbelt
const secretClient = Toolbelt.SecretClient();
// this is how you can access your stored secret
secretClient.readSecret('my_Secret-Key')
.then(mySecret => {
  // Fetching the secret value
  const value = mySecret.value
  // you can also update your secret e.g. if you received a new OAuth2 token
  mySecret.value = 'nEw.oaUtH2-tOKeN!!11!';
  return secretClient.updateSecret(mySecret)
})
.then(_ => {
  callback(null, { message: 'Successfully updated secret' });
})
.catch(err => {
  console.error(`Failed during secret operation with ${err.message}`)
  callback(err, null);
});
```

### SMTP Client:

SMTP Client allows the sending of emails via the SMTP Protocol. It is configured during instance creation. The Client is based on [nodemailer](https://github.com/nodemailer/nodemailer) and shares its interface.

<div class="important">The client will use a unique connection for every email sent. It will close each connection after sending.</div>


**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");
  // Create Instance based on providec config
  const client = Toolbelt.SMTPClient({
    host: "your-host",
    port: "1337",
    secure: true, // Use SSL for conection true/false
    auth: {
      user: "user",
      pass: "pass"
    }
  });
  // Validate provided config
  client.verify().then(isValid => {
    /** if isValid === true, then connection could be established */
  });
  // Send email
  client.send({
    sender: "Sender@mail.org",
    to: "receiver@mailier.org",
    bcc: "hidden@mail.org",
    subject: "Awesome Email !",
    text: "You can also send directly a html body by passing it as html."
  })
  .then(response => //TODO: react on the response)
  .catch(err => //TODO: React to error);
```
