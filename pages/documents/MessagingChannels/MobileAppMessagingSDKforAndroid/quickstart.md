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



### Prerequisites

- **LiveEngage account** information (account ID and login credentials), messaging enabled, and the mobile app configured. 
  <div class="notice">If you don't know your account information, you can get it from your LivePerson account team.</div>
- [Latest version](https://developer.android.com/studio) of **Android Studio**. 
- [Latest version](https://gradle.org/install/) of **Gradle**.
- Read or are familiar with the **supported operating systems and devices**.  For more information, see the [Systems Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide. 


### Step 1: Install the Messaging SDK into your project
You can install LivePerson Mobile App Messaging SDK using a couple of different methods:

- [Automatically using Gradle](#option-1-automatically-using-gradle)
- [Manually coping SDK files to your project](#option-2-manually) 

#### Option 1: Automatically using Gradle
You can use Gradle, an automation tool, to scale your projects effortlessly. 

1. In your project, locate and double-click **Gradle Scripts > build.gradle (Module: app)**.
   
   ![Preview](https://raw.githubusercontent.com/LivePersonInc/developers-community/d8d203c35347a47d337033953670af34cc17afae/pages/documents/consumer%20experience/android-sdk/gradleapppic.png)  

2. In the dependencies section, add:
   ```gradle
   dependencies {
     implementation  'com.liveperson.android:lp_messaging_sdk:3.7'
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

5. In your build.gradle of your app, make sure that the following is at least version **23**:

   ```gradle
   android {
      compileSdkVersion 23
      buildToolsVersion "23.0.0"

   }   
   ```

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

### Step 2: Integrate code for basic deployment

1. Add the following permissions to your app’s AndroidManifest.xml file:

   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
   ```

2. Add the following imports to your class imports section:

   ```java 
   import com.liveperson.api.LivePersonCallback;
   import com.liveperson.infra.InitLivePersonProperties;
   import com.liveperson.infra.callbacks.InitLivePersonCallBack;
   import com.liveperson.messaging.TaskType;
   import com.liveperson.messaging.model.AgentData;
   import com.liveperson.messaging.sdk.api.LivePerson;
   ```

### Step 3: Initialize the Messaging SDK 

Before you can show a conversation, you must initialize the Messaging SDK.  

1. **Set your app ID and view controller.** Provide your `APP_ID` as a string your application's class.
   
   ```java
   private static final String APP_ID = "com.mybrand.app";

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main);
   }
   ```

2. **Initialize your application and show the conversation.**  Here, your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the conversation view. 
   1. Select your chose of authentication using either **CodeFlow**, **ImplicitFlow**, **UnauthFlow**, or **SignupFlow** for initializing the SDK instance. For details, see [Authentication](mobile-app-messaging-sdk-for-android-authentication.html).
   2. Provide your LivePerson account number as a string in the `brandID` constant. 
   3. Depending on the authentication method you chose, you must provide your `authCode`, `jwt`, or `appInstallID`.  If you chose **SignupFlow**, you only need to provide the `brandID`.  We have provided examples to use to help you get started. 

   <div class="important">The demo account that we have provided has basic features available for demonstrating the Conversational Commerce experience in the LiveEngage console.</div>


   - **CodeFlow (authenticated)**
     ```java
     public void startCodeFlow(View v) {
         String brandID = "62219232";
         final String authCode = "k16336";
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
                 lpAuthenticationParams.setAuthKey(authCode);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```
   - **ImplicitFlow (authenticated)**
   
     ```java
     public void startImplicitFlow(View v) {
         String brandID = "42391995";
         final String jwt = "eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJoZWxsbyIsICAiaXNzIjogImh0dHBzOi8vTFAtQXV0aC5jb20iLCAgImV4cCI6MTU1Mzc5NDAyMSwgICJpYXQiOjE1NTM3OTM0MjF9.GP0iCe1k3aQbWHp-FYKhpfK-MZqktQ8pByTTF5lAHTelCyDAxhgHyMIq5J9mJnSoIdTlUbmscRHpy2MCop-AlYx5Sz66y1aX38AD8Rat1k_SnbPNbvbEysomb_SjxZ3uleN_OCzrSqGJrLXP6yIN2UiuuvKM62i-e-aQVIWzIXWMxjgmH9n_ZUOkgq_0jY3Me8r78dKsitc-jvzGzbasv81u40fR-7Y-ViOZliFOLjVBl2VWCbgcrGerLUyWVJQW69Hn3TlvvVpSVZk-IUU8hpYorcItIb-XNV2mOVkuZmzlGo7a1nIhJCCWzP5qaQvCCecSHTTHbcROwwE7dk6vKg";
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
                 lpAuthenticationParams.setHostAppJWT(jwt);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```

   - **UnauthFlow**

     ```java
     public void startUnauthFlow(View v) {
         String brandID = "53949244";
         String appInstallID = "46bcf782-feee-490d-861d-2b5feb4437c8";
         final MonitoringInitParams monitoringInitParams = new MonitoringInitParams(appInstallID);
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, monitoringInitParams, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.UN_AUTH);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```

   - **SignupFlow**

     ```java
     public void startSignupFlow(View v) {
         String brandID = "62219232";
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.SIGN_UP);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```

   
   |Element  |Description  |
   |---------|---------|
   |brandID     |Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative.         |
   |APP_ID     |Your application ID (`com.mybrand.app`), which is used in the [registerLPPusher](android-registerlppusher.html) method.     |
   |onInitSuccess     |Callback that indicates the init process has finished successfully.         |
   |onInitFailed     |Callback that indicates the init process has failed.         |



   **Example implementation:**


   ```java
   private static final String APP_ID = "com.mybrand.app";

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main);
   }

   public void startCodeFlow(View v) {
       String brandID = "62219232";
       final String authCode = "k16336";
       LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
           @Override
           public void onInitSucceed() {
               LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
               lpAuthenticationParams.setAuthKey(authCode);
               LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
           }

           @Override
           public void onInitFailed(Exception e) {
           }
       }));
   }
   ```
   
   <div class="notice">Make sure that the init process, from the onInitSucceed callback, finished successfully.</div>


### Next Steps

Congratulations!  You're all set.  

You can now do any of the following:
- [Implement and enable push notifications](enable-push.md). Push and local notifications are a key factor that makes the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.
- If you want to use the Monitoring API, you must [initialize the Messaging SDK with Monitoring Params](AdvancedConfigurations/sdk-initialization.md).  Once initialization is completed (<b>onInitSucceed</b>), you can call LivePerson methods.


<div class="important">
For guidance on app configuration and SDK step-by-step usage, see the <a href="https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-appendix-using-liveperson-sdk-android-manual.html">Using LivePerson SDK - Android</a> guide.
</div>
