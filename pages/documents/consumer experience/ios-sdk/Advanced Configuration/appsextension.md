---
title: App Extensions
redirect_from:
  - consumer-experience-ios-sdk-app-extensions.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Configuration

order: 9
permalink: mobile-app-messaging-sdk-for-ios-configuration-app-extensions.html

indicator: messaging
---
In order to make sure the SDK uses the iOS keyboard only, and not third party ones, disable app extensions for keyboard as follows:

In your **AppDelegate**, add the method application(_:shouldAllowExtensionPointIdentifier:)
 with the implementation of:

```swift
func application(_ application: UIApplication, shouldAllowExtensionPointIdentifier extensionPointIdentifier: UIApplicationExtensionPointIdentifier) -> Bool {
    return extensionPointIdentifier != UIApplicationExtensionPointIdentifier.keyboard
 }
```