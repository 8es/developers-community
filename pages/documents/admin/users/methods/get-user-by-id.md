---
title: Get User by ID
keywords:
level1: Documents
level2: Admin
level3: Users API
level4: Methods


order: 20
permalink: administration-get-user-by-id.html

indicator: both
---

This API retrieves a single user (by ID) for a specific account.

### Request

 |Method|      URL  |
 |:--------  |:---  |
 |GET|  /api/account/{accountId}/configuration/le-users/users/{userId}  |

**Request Headers**

 |Header|         Description  |
 |:------ |       :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

**Request Body**
 
[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter|  Description  |Type/Value |
 |:------|    :--------|    :--------|
 |accountId|  LP site ID|   String ^[a-zA-Z0-9_]{1,20}$|
 |userId|     User Id|      Positive long number greater than zero |
 
 **Query Parameters**
  
  | Name            | Description                                                                  | Type    | Notes                                          |
  |-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
  | select          | Response field filter expression .                           | string  | Example values: id, name. Default value: id,pid,deleted,loginName  |
  


### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 404  | Data Not Found        |
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. | 

**Response Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
