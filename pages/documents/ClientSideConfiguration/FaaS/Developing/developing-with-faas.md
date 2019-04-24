---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Developing with FaaS
permalink: function-as-a-service-developing-with-faas-overview.html
indicator: both
---

After successfully creating a `lambda` (using the [Getting Started guide](function-as-a-service-getting-started.html)) you will find yourself in the Editor, the heart of the FaaS UI. Here you can develop the function itself. The Editor is based on the [Monaco Editor](https://microsoft.github.io/monaco-editor/index.html) (which is the code editor that powers VS Code) and provides you with a similar experience.

**Note:** When choosing a template function linked to events, you can only develop a function with an unused event, that is an event not already bound to a different function. If you need to use an invocation event that is already in use by a templated function, we recommend to edit that template and your needed functionality to it, leveraging the same event.

![](img/faas-editor.png)

### Code Completion / Context Menu

While typing, the editor will offer you suggestions based on types, if inferable. You can also utilize this feature when using `require` to import dependencies to your `lambda`. Requiring `lp-faas-toolbelt`, for example, will give you type suggestions for the FaaS Toolbelt. This works for all dependencies which are listed in the “environment” section of the Editor sidebar (see below for more information).

By right-clicking inside the editor area, you're able to open the context menu, which provides you access to additional functionality, the most notable being the **Format Document** feature, which will reformat your code.

### Editor Sidebar

By pressing the marked button you are able to hide or show the sidebar. This sidebar offers you access to two tabs (Settings and Payload, see below for more information). On smaller screens it will be hidden by default. On larger screens, it is shown by default.

![](img/faas-sidebar.png)

#### Settings Tab

The Settings Tab shows you general information, including the date of the last change made to the function, but also things like **Event** (which shows the event to which the function is bound) and **Description** (which shows the function description). Furthermore, it provides an up to date list of the available dependencies and the versions. You can click on the Info Icon to see the official documentation for each dependency over at `npm`.

In the bottom section you can manage the environment variables. As mentioned [here](function-as-a-service-getting-started.html#before-getting-started), we have a set of reserved environment variables. The UI will inform you if you attempt to use them.

#### Payload Tab

The Payload Tab shows the example payload, which highlights the structure of the event-specific payload sent to the function. If the payload is larger than the view window, it will be collapsed automatically. It is also generally possible to collapse and expand the payload manually.

**Please be aware** that the payload is read-only, you are not able to modify it. We have put it there to help you in the development process by understanding what you can use/make reference to as part of the function code.

### Environment Variables

Using the relevant button from the Settings tab, you are able to add new Environment variables. Clicking the button will open a dialogue window where you can provide a name and a value for your new variable. As mentioned above, we have a set of reserved environment variables. The UI will inform you if you attempt to use them.

You can access the variable during runtime by using `process.env['YOUR_ENV']`. **Please be aware** that the value will be available in form of a string. If the value is a number, you will have to parse it prior to using it. By using the trash icon, you can delete unwanted variables.

**Developer discretion is advised**, please be sure not to use confidential data such as credentials or secrets in the environment variables as these are saved and available in text form to anyone with access to the account. FaaS has a secret storage facility that can be leveraged for this purpose. Click [here](FaaS.XXXX.html) for further details on using Vault Secret Storage with FaaS.

### Next steps

After you've developed your function, you'll need to deploy to the LivePerson infrastructure in order for it to run. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to do so.
