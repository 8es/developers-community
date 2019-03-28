---
pagename: Quick Start
redirect_from:
  - android-quickstart.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android

order: 11
permalink: mobile-app-messaging-sdk-for-android-quick-start.html

---
<br>
The LivePerson SDK provides brands with a secure way to foster connections with their customers and increase app engagement and retention.

Use this Quick Start guide to get you up and running with a project powered by LivePerson. When done, you'll be able to send messages between an Android device and LiveEngage.

You have the option to install the Mobile App Messaging SDK automatically via Gradle or manually copying the SDK files to your project. 

### Prerequisites

- **LiveEngage account** information (account ID and login credentials), messaging enabled, and the mobile app configured. 
  <div class="notice">If you don't know your account information, you can get it from your LivePerson account team.</div>
- [Latest version](https://developer.android.com/studio) of **Android Studio**. 
- [Latest version](https://gradle.org/install/) of **Gradle**.
- Read or are familiar with the **supported operating systems and devices**.  For more information, see the [Systems Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide. 


<div class="important">
For guidance on app configuration and SDK step-by-step usage, see the <a href="https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-appendix-using-liveperson-sdk-android-manual.html">Using LivePerson SDK - Android</a> guide.
</div>

### Step 1: Install the SDK into your project
You can install LivePerson Mobile App Messaging SDK using a couple of different methods:

- [Automatically using Gradle](#option-1-automatically-using-gradle)
- [Manually](#option-2-manually) 

#### Option 1: Automatically using Gradle
You can use Gradle, to scale your projects effortlessly. 

1. In your project, locate and double-click **Gradle Scripts > build.gradle (Module: app)**.
   
   ![Preview](https://raw.githubusercontent.com/LivePersonInc/developers-community/d8d203c35347a47d337033953670af34cc17afae/pages/documents/consumer%20experience/android-sdk/gradleapppic.png)  

2. In the dependencies section, add:
   ```gradle
   dependencies {
     implementation  'com.liveperson.android:lp_messaging_sdk:3.2.1'
   }
   ```
   **Example of the build.gradle (Module: app) file**
   ```gradle 
   apply plugin: 'com.android.application'

   android { 
     compileSdkVersion 26
     defaultConfig {
       applicationId "com.shaym.liveperson.androidsdk"
       minSdkVersion 19
       targetSdkVersion 26
       versionCode 1
       versionName "1.0"
       testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
     }
     buildTypes {
       release {
         minifyEnabled false
         proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
       }
     } 
   }

   dependencies {
     implementation fileTree(dir: 'libs', include: ['*.jar'])
     implementation 'com.android.support:appcompat-v7:26.1.0'
     implementation 'com.android.support.constraint:constraint-layout:1.0.2'
     testImplementation 'junit:junit:4.12'
     androidTestImplementation 'com.android.support.test:runner:1.0.1'
     androidTestImplementation 'com.android.support.test.espresso:espresso-core:3.0.1'
     // LivePerson SDK
     implementation  'com.liveperson.android:lp_messaging_sdk:3.5.0'
   }
   ```
   
#### Option 2: Manually 

1. [Download](https://github.com/LP-Messaging/Android-Messaging-SDK) the latest SDK package.
2. Extract the file to a folder on your computer. The package contains all of the files you need to add to your project.  Also in the package, you get a sample app that demonstrates how to use the SDK. 
3. In your Android Studio project, go to **File > New > Import module**. 
4. Navigate to the folder where you extracted the SDK, select the **lp_messaging_sdk** module, and then click **Finish**. 
5. Add the following to the build.gradle of your app:
   - **compileSdkVersion**
   - **buildToolsVersion**
   <div class="important">
   The version should be at least Version 23.
   </div>
6. Under the **Android** section, add:  
   ```gradle
   repositories {
     flatDir {
       dirs project(':lp_messaging_sdk').file('aars')
     }
   }
   ```  
7. Under the **Dependencies** section, add:  
   ```gradle
   compile project(':lp_messaging_sdk')
   ```  
   **Example of the build.gradle file**
   ```gradle
   apply plugin: 'com.android.application'
   android {
     compileSdkVersion 24
     buildToolsVersion "24.0.3"

     repositories {
       flatDir {
         dirs project(':lp_messaging_sdk').file('aars')
       }
     }

     defaultConfig {
       applicationId "xxx"
       minSdkVersion xx
       targetSdkVersion xx
       versionCode 1
       versionName "1.0"
     }
     buildTypes {
       release {
         minifyEnabled false
         proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
       }
     }
   }

   dependencies {   
     compile project(':lp_messaging_sdk')
   }

   ```

### Step 2: Code integration for basic deployment

1. Add the following permissions to your app’s AndroidManifest.xml file:

   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
   ```

   If you have any of these features enabled, you must add the following to your app's AndroidManifest.xml file:

   * **Vibrate on new incoming msg**

      ```xml
      <uses-permission android:name="android.permission.VIBRATE"/>
      ```

   * **Photo Sharing**

      ```xml
      <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
      ```

   * **Audio Messaging**

      ```xml
      <uses-permission android:name="android.permission.RECORD_AUDIO" />
      <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
      ```

2. Add the following imports to your class imports section:

   ```java {.line-numbers}
   import com.liveperson.api.LivePersonCallback;
   import com.liveperson.infra.InitLivePersonProperties;
   import com.liveperson.infra.callbacks.InitLivePersonCallBack;
   import com.liveperson.messaging.TaskType;
   import com.liveperson.messaging.model.AgentData;
   import com.liveperson.messaging.sdk.api.LivePerson;
   ```

### Step 3: Initialize the Messaging SDK 

Before you can show a conversation, you must initialize the Messaging SDK.  To do that, add the following code to your app's Application class:

   ```java
   String brandID = "YourLivepersonAccountIdString";
   String appID = "your app package name"
    LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, new InitLivePersonCallBack() {
     @Override
     public void onInitSucceed() {
     }

     @Override
     public void onInitFailed(Exception e) {
     }
   }));
   ```
   
   |Element  |Description  |
   |---------|---------|
   |brandID     |Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative.         |
   |appID     |Your app id, used for registering LP pusher service.         |
   |onInitSuccess     |Callback that indicates the init process has finished successfully.         |
   |onInitFailed     |Callback that indicates the init process has failed.         |


   **Example implementation:**


   ```java
   LivePerson.initialize(context, new InitLivePersonProperties(brandID, appID, new  InitLivePersonCallBack() {
     @Override
     public void onInitSucceed() {
       initFragment();
       LivePerson.setUserProfile(appId, firstName, lastName, phone);
     }
     @Override
     public void onInitFailed(Exception e) {
       Toast.makeText(MainActivity.this, "Init Failed", Toast.LENGTH_SHORT).show();
     }
   }));
   ```
   
   <div class="notice">Make sure that the init process, from the onInitSucceed callback, finished successfully.</div>

### Step 4: Show conversation screen
You can use either [Activity mode](#activity-mode) or [Fragment mode](#fragment-mode) to show the conversation screen. 

#### Activity mode
**Activity mode** implements the toolbar that displays the agent name for the conversation. When the agent types, the *'Is Typing’* indicator displays.

   ```java
   LivePerson.showConversation(getActivity(), LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
   ```
   
#### Fragment mode
**Fragment mode** returns the conversation fragment to the caller to place inside a container. The caller is also responsible for initializing the SDK, and if needed, implementing a toolbar or other indicators according to the provided SDK callbacks. 

1. Open a conversation window in a fragment, placing it in a container in your activity, add: 

   ```java
   LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
   ```

   <div class="important">When using fragment mode, you must use the provided SDK callbacks in your app to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.</div>

2. Show CSAT notifications. For example, you can show a different title on the toolbar, or show a button to close CSAT. 

   <div class="important">The container Activity that hosts the fragment must implement ConversationFragmentCallbacks.</div>

   ```java
   public interface ConversationFragmentCallbacks {
     void setFeedBackMode(boolean on, IFeedbackActions actions); 

     // boolean on - Notify whether feedback (csat) screen is visible or dismisses.
     // IFeedbackActions actions - provides set of actions for the feedback screen.
     void onSurveySubmitted(IFeedbackActions actions);
     void setSecureFormMode(boolean on, String formTitle) {}
   }

   // IFeedbackActions actions - provides set of actions for the feedback screen.
   public interface IFeedbackActions {
     void closeFeedBackScreen();

     //close the screen, for example- after submitting the csat. When showing "thank you" screen.

     void skipFeedBackScreen();

     //skip and close the whole feedback process.
   }
   ```

   When visible, **setFeedbackMode** is called with the **true** value.  When not visible (skip/submitted), **setFeedBackMode** is called with the **false** value. 

   Example - how to use **ConversationFragmentCallbacks** (code from the container Activity)

   ```java
   class ContainerActivity extends FragmentActivity implements ConversationFragmentCallbacks {
     @Override
     public void setFeedBackMode(boolean on, final IFeedbackActions actions) {
       toolbar.setTitle("Csat mode: " + ( on ? "on!" : "off!" ));
       toolbar.setNavigationOnClickListener(new View.OnClickListener() {
         @Override
         public void onClick(View v) {
           if (actions != null){
             actions.closeFeedBackScreen();
           }
         }
       });
       }

     @Override
     public void onSurveySubmitted(IFeedbackActions actions) {
       toolbar.setTitle("survey submitted");
     }
   }
   ```

### Step 5: Set the screen orientation.

   **For Activity mode** - override the ConversationActivity definition and set the desired screen orientation in your app's AndroidManifest.xml file:

   ```xml
   <activity
     android:name="com.liveperson.infra.messaging_ui.ConversationActivity"
     android:screenOrientation="your screen orientation"/>
   ```

   **For Fragment mode** - set the desired screen orientation in your container Activity definition in your app's AndroidManifest.xml file. For more details, refer to [android:screenOrientation](https://developer.android.com/guide/topics/manifest/activity-element.html#screen).


### Next Steps

Congratulations!  You're all set.  

You can now do any of the following:
- [Implement and enable push notifications](enable-push.md). Push and local notifications are a key factor that makes the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.
- If you want to use the Monitoring API, you must [initialize the Messaging SDK with Monitoring Params](AdvancedConfigurations/sdk-initialization.md).  Once initialization is completed (<b>onInitSucceed</b>), you can call LivePerson methods.


