---
title: Best Practices
Keywords:
level1: Documents
level2: Guides
level3: Engagement Attributes
order: 40
permalink: engagment-attributes-bestpractices.html
indicator: both
---

**Sending an SDE multiple times during a session**

Consider the following implementation on a customer page:

| Page | property1 Value | property2 Value | property3 Value |
|----|--------------|--------------|--------------|
| Page A | a1 | a2 | [Not supplied] |
| Page B | b1 | [Not supplied] | b3 |

A visitor has been to page A, then moved to page B.  How will the Engagement attributes be updated? The behavior depends on the Engagement Attribute (EA) type.

| Behavior | Behavior description | Engagement attributes | Example Output |
|----|--------------|--------------|--------------|
| *Update Properties* | Updates existing info, maintaining previous values of attributes that were not supplied in latest update | Personal Info <br> Customer Info <br> Marketing Info <br> Service Activity | Customer Info: <br> property1: b1 <br> property2: a2 <br> property3: b3 |
| *Append New Item* | Appends new item each time EA is sent | Viewed Product <br> Visitor Error <br> Transaction <br> Lead <br> Searched content  | Product 1: <br> property1: a1 <br> property2: a2 <br> Product 2: <br> property1: b1 <br> property3: b3 |
| *Replace Item* | Updates existing info, does not maintain previous values of attributes that were not supplied in latest update | Cart update | Cart: <br> property1: b1 <br> property3: b3 |
