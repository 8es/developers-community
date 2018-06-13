---
title: Complex Layout
Keywords:
level1: Documents
level2: Rich Messaging
level3: Structured Content

level-order: 2
order: 10
permalink: rich-messaging-structured-content-complex-layout.html
root-link: true
indicator: both
---

Complex layouts have a different JSON structure - the basic elements which make up the layout are contained in another hierarchy which specifies their ordering.
This adds the option to send Structured Content templates with more friendly structure, including more elements and actions.

Each layout can include other basic elements or different layouts.

**Supported Layouts**

* **Vertical:** the block layout allows you to present a set of items vertically.

* **Horizontal:** the block layout allows you to present a set of items horizontally.

### Vertical

Layout that allows you to present a set of items (elements/layouts) vertically.

**Example**

```json
{
	"type": "vertical",
	"elements": [{
	}]
}
```

##### **Fields**

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be vertical | Enum | Y |  |
| elements | Array of Elements/Layouts | Elements/Layouts | Y | 256 elements |

### Horizontal

Layout that allows you to present a set of items (elements/layouts) horizontally.

**Example**

```json
{
	"type": "horizontal",
	"elements": [{

	}]
}
```

##### **Fields**

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be horizontal | Enum | Y |  |
| elements | Array of Elements/Layouts | Elements/Layouts | Y | 256 elements |
