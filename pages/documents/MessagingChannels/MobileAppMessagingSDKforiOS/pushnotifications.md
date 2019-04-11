---
pagename: Notifications
redirect_from:
  - consumer-experience-ios-sdk-pushnotifications.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS

order: 15
permalink: mobile-app-messaging-sdk-for-ios-notifications.html

indicator: messaging
---

Push and local notifications are a key factor that make the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

_**Note: In order to enable push notifications, you must also configure them within the LiveEngage UI.  See instructions.**_

1. Passes the user info of a remote push notification to the SDK:

   ```swift
   public func handlePush(userInfo: [NSObject : AnyObject])
   ```


2. Registers the device token on LPMesssagingSDK instance:

   ```swift
   func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil, authenticationParams: LPAuthenticationParams? = nil)
   ```

   _**Note: this method passes the Device Token to the SDK, the actual registration occurs only after showConversation method is called.**_


3. Adds custom behavior if LivePerson Push Notification was touched

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)
   ```


4. Hides/shows the In-App Push Notification

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool
   ```


5. Overrides LPMessagingSDK - In-App Push Notification

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView
   ```

6. Adds Custom Tap Behavior to LPMessagingSDK - In-App Notification

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(notificationTapped notification: LPNotification)
   ```

   _**Note: This method is override when using a Custom View for the In-App Notification (LPMessagingSDKNotification(customLocalPushNotificationView)**_

   <div class="important">
   The proprietary SDK notification is only for display purposes, interacting with it will launch the Application, but won't navigate to the Conversation Window/ViewController, for a fully interactive notification host app needs to provide the implementation.
   </div>

### Configuring Push Notifications

Follow the instructions below to set up your certificate and key file to enable push notifications.

_**Note: Before you begin the setup, you must ensure your LiveEngage account is configured and connected to the SDK.**_

1. Enter your LiveEngage account through this [Login URL](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~).

	You will need the following info from your LivePerson account team:

	* LiveEngage account number

	* User ID (must be an administrator user)

	* Password

2. Within LiveEngage, navigate to **Campaigns**, and click **Data Sources**.

   ![campaigns](img/campaigns.png)


3. Select **Manage** under **Mobile App management**.

   ![app](img/mobieAppManagement.png)


4. Click **Add new** to associate your app with the LiveEngage account.

   ![keymanagement](img/keymanagement.png)


5. Select your platform as iOS, enter your app’s name, and then click **Create app**. Then, upload your app certificate and key file in the appropriate locations. For more information on your app certificate, refer to the [Creating a Certificate Signing Request file](OSCertificate/createcertificate.md) topic.

   <div class="important">
   If you are using a development certificate you should uncheck the Production checkbox and add DEV postfix to the Mobile app name.For example, if your app Bundle ID is AppId, your mobile app name should be <b>"AppId-Dev"</b>. If you are using a production certificate you should leave the production checkbox checked and insert to the Mobile App name your App Bundle ID as it is.
   </div>

   **Note: there is a 50 character limit for your Bundle ID**

   ![newapp](img/newapp.png)


6. Click **Close** to complete the process.
