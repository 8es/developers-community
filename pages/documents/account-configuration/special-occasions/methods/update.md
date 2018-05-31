---
title: Update
Keywords:
level1:
level2: Account Configuration
level3: Special Occasions API
level4: Methods

order: 20
permalink: account-configuration-special-occasions-update.html

indicator: messaging
---

Update existing special occasions.

### Request

| Method | URL |
| :-------- | :------ |
| PUT  |/api/account/{accountId}/configuration/ac-common/specialoccasion |



**Request Body**

```json

[
  {
    "id": 2837048012,
    "deleted": false,
    "name": "special occasion 2",
    "description": "Description for special occasion 1",
    "isDefault": false,
    "events": [
      {
        "meta": {
          "working": true,
          "name": "user1"
        },
        "start": {
          "dateTime": "2017-03-27T06:00:00",
          "timeZone": "Europe/Zurich"
        },
        "end": {
          "dateTime": "2018-03-27T13:00:00",
          "timeZone": "Europe/Zurich"
        },
        "recurrence": [

        ]
      }
    ]
  }
]
```

**Entity structure**

For details on the entity structure, please see the appendix [link](https://lpgithub.dev.lprnd.net/product-marketing/developers-community/blob/workdays-documentation/pages/documents/account-configuration/special-occasions/appendix.md)

**'isDefault' entity state**

The `isDefault` field determines whether a special occasions object is the default for the entire account. Only one object can be set as the default for each account. **Note**: if you see more than one special occasions object as default, LivePerson validation will set the previous default value to false on the server side.



**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |

**Request Headers**

 |Header | Description| Notes |
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 if-match|Contains special occasion's current revision number

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 304  | Not Modified          |
| 400  | Bad Request           |
| 401  | Not Authorized        |
| 403  | Forbidden             |
| 404  | Data Not Found        |
| 409  | Conflict              |
| 500  | Internal Server Error |

**Response Headers**

 |Header|  Description|
 |:-------|   :-----  |
 |ac-revision|  Account config object type collection revision.|  

 **Response example**

```json
{
  "id": 2852546012,
  "deleted": false,
  "name": "Workdays 1111222",
  "description": "Description for workdays 1",
  "isDefault": false,
  "events": [
      {
          "start": {
              "dateTime": "2018-03-27T06:00:00",
              "timeZone": "Europe/Zurich"
          },
          "end": {
              "dateTime": "2018-03-27T13:00:00",
              "timeZone": "Europe/Zurich"
          },
          "recurrence": [
              "RRULE:FREQ=WEEKLY;BYDAY=SU"
          ]
      },
      {
          "start": {
              "dateTime": "2018-03-27T15:00:00",
              "timeZone": "Europe/Zurich"
          },
          "end": {
              "dateTime": "2018-03-27T18:00:00",
              "timeZone": "Europe/Zurich"
          },
          "recurrence": [
              "RRULE:FREQ=WEEKLY;BYDAY=SU"
          ]
      }
  ]
}
```
