---
title: Get AppJWT
level1:
level2: Consumer Experience
level3: Connector API
level4: Authorization
order: 4
indicator: both
permalink: Create_AppJWT.html
search: include
---

### Retrieve your domain

1. **Retrieve your domain**. Use the[LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* sentinel

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Authentication with AppJWT

Before sending any request with the Send API you must obtain an **AppJWT** authentication token using the brand’s **App Installation id** and **Secret** which you acquired as described on the [Getting Started](connectorapi-getting-started.html){:target="_blank"} chapter.

The **AppJWT** is an access token obtained from **Sentinel** which is LivePerson Application Identity Broker. The **AppJWT** allows the client (i.e connector) to access LiveEngage platform.

An AppJWT can be obtained with the following HTTPS request:


| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/sentinel/api/account/{accountid}/app/token?v=1.0&grant_type=client_credentials&client_id={**Installation id**}&client_secret={**Secret**} |


**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |
| domain | Sentinel Hostname | string |

**Query Parameter**

| Name  | Description | Type/Value | Example |
| :--- | :--- | :--- | --- |
| v | The API version | numeric | 1.0 |
| grant_type | authorization grant according OAuth 2.0 | string | client_credentials |
| client_id | **App Installation id** provided after application registration | string | 75588e18-0213-4e33-8174-883acac7e3c4 |
| client_secret | **Secret** provided after application registration | string | kgvbkk7glku72jgtmpi6l4a872 |



**Request Headers**

| Header | Description |
| :--- | :--- |
| Content-Type | application/x-www-form-urlencoded |


### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | acces_token is recieved |


**Response Example**

{% raw %}
```json
{
  "access_token": "eyJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM", "token_type": "Bearer"
}
```
{% endraw %}
