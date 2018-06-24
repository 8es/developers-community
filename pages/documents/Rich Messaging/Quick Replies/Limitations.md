---
title: Limitations
Keywords:
level1: Documents
level2: Rich Messaging
level3: Quick Replies
order: 30
permalink: rich-messaging-quick-replies-limitations.html
indicator: messaging
---


* Once a max chips per row is set (max 8), the number of rows is calculated automatically (up to 3 rows).
If number of chips exceeds max chips per row times 3, then extra chips will be added to the last row.

* If a consumer decided to type the text of the chip, instead of clicking on it, then no click-operation will be executed (no action or metadata will be sent to the server).
If your bot depends on such data, consider "teaching" the bot to accept typed-replies, and not just clicked-replies.
