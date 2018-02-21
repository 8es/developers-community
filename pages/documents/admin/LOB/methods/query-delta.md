---
title: Lobs Query Delta
keywords:
level1: Documents
level2: Admin
level3: LOBs API
level4: Methods


order: 90
permalink: administration-lobs-query-delta.html

indicator: both
---

This API queries changes in LoBs data.

### Request

| Method | URL |
 |:-------- | :----- |
 |POST  |https://{domain}/api/account/configuration/le-users/lobs/query |

**Request Headers**

 |Header | Description |
|:---------|  :------------ |
|Authorization|  Contains token string to allow request authentication and authorization. |

**Request Body**

There are 2 types of query:

- Delta (type 0): Returns the active revision for a site.
- All changes (type 1): Returns a range of revision data.

Delta:

{
  "type": 0,
  "parameters": [
    {
      "site": "le77658829",
      "revision": 0
    }
  ]
}

All changes:

    {
        "type":1,
        "parameters":[
            {
              "site": "le77658829",
              "from": 20,
              "to": 23
             }
        ]
    }

**Query Parameters**

 |Parameter     |Description      |    Type / Value | Required |
 |:----------- | :-------------     |  :------------- | :--- |
 | v |            API version number |  Double. Default Value: 1.0 | Required |
 |select | Dynamic selection of the response fields  YOGA 'gdata' dialect. Non-existing  field: no error, blank in response. Supported fields: any in response body.  |Optional  |

### Response

**Response Body For Delta Query:**

    {
       {
    "appDataList": [
        {
            "appName": "le-users",
            "accountList": {
                "accountList": [
                    {
                        "siteId": "le77658829",
                        "itemsCollection": {
                            "revision": 1,
                            "items": [
                                {
                                    "id": 2398413012,
                                    "name": "test"
                                }
                            ]
                        }
                    }
                ]
            },
            "appApiVersion": 1
        }
    ]
}
    }

**Response Body for All Changes Query:**

    [
    {
        "revisionsCollection": [
            {
                "revision": 1,
                "items": [
                    {
                        "id": 2398413012,
                        "name": "test"
                    }
                ],
                "revisionDate": "2017-10-26 18:29:22"
            }
        ],
        "siteId": "le77658829"
    }
]
