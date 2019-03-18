---
pagename: Installation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Apple Business Chat SDK
permalink: apple-business-chat-sdk-installation.html
indicator: messaging
---

### SDK Requirements

- Xcode 9.3 and up
- Minimum deployment target iOS 11.3
- Swift 4.2 and up
- An iMessage App / Extension target

### Apple and LivePerson Configuration
 
1. Make sure you have an Apple Business Chat business ID.
2. Contact your LivePerson account representative to enable this SDK on the backend server. 

### SDK Installation in XCode

See the [SDK code on GitHub](https://github.com/LivePersonInc/lpabcsdk).

1. Copy the `LPABCSDK.framework` to your XCode project, make sure it is included in the **Embedded Binaries** section, under the **project settings/General** tab for the iMessageApp Target (and any other implementing target).

2. In project settings, navigate to the Build Phases tab, and click the + button to paste the following:

    `${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPABCSDK.framework/LPABCSDKStrippingScript.sh`

    This script loops through the frameworks embedded in the application and removes unused architectures.

3. For each implementing target, make sure to enable **App groups** in the capabilities section in XCODE.

4. In the `info.plist` file of each implementing target, create a dictionary with the key `LPABC_PARAMS` and add a key-value pair of `lpabc_appgroup : <your_app_group_id>` 

    * Your app group id should be the same across all implementing targets.

5. Add `import LPABCSDK` to the relevant class files and [initialize the SDK](apple-business-chat-sdk-implementation.html#initializing-the-sdk).

6. In the iMessage app/extension's  `MessagesViewController` class,  please override these following two methods:

    - `override func didBecomeActive(with conversation: MSConversation)`	 
    - `override func didReceive(_ message: MSMessage, conversation: MSConversation)`

    In the implementation of these methods, add the following code: `lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)`

    Example:

    ```swift
    import LPABCSDK

    class MessagesViewController : MSMessagesViewController {

        override func didBecomeActive(with conversation: MSConversation) {
            lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)
        }

        override func didReceive(_ message: MSMessage, conversation: MSConversation) {
            lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)
        }

    }
    ```

    This will enable the SDK to send SDEs ([Engagement Attributes](engagement-attributes-types-of-engagement-attributes.html)) to LiveEngage.