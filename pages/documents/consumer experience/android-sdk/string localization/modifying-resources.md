---
title: Modifying Resources
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Customization and Branding

order: 265
permalink: android-modifying-resources.html

indicator: messaging
---

The SDK utilizes several resources as part of its GUI. To customize those resources, please add appropriate resources to your project:

<table>
  <tr>
    <th>Description</th>
    <th>Resources name</th>
  </tr>

  <tr>
    <td>Default brand avatar on the avatar next to brand bubble (the first brand message) and on agent avatar appearing on the action bar before an agent is assigned. In case you want to define the background color for this avatar - override "brand_logo_background_color" resource id. (This is relevant for bubble brand’s avatar only. Background color of agent avatar on action bar is "agent_avatar_background_color").</td>
    <td>lp_messaging_ui_brand_logo </td>
  </tr>


  <tr>
    <td>Default agent avatar appearing next to an agent’s bubble when no avatar URL is assigned on LiveEngage and on agent avatar appearing on the action bar.  In case you want to define the background color for this avatar, override "agent_avatar_background_color" resource id. </td>
    <td>lp_messaging_ui_ic_agent_avatar</td>
  </tr>


  <tr>
    <td>Default progress bar vector drawable for PCI secure form (after pressing to fill the form, the button changes to progress bar until we can show the form).
    To Override this resource - create your own vector drawable under the android drawable folder with the same resource name.
   </td>
    <td>lpmessaging_ui_secure_form_progress_bar.xml</td>
  </tr>


  <tr>
    <td>Default progress bar vector drawable for downloading \ uploading an image. it will appear on the image, inside the bubble until progress is done.  
    To Override this resource - create your own vector drawable under the android drawable folder with the same resource name.
   </td>
    <td>lpmessaging_ui_image_progress_bar.xml</td>
  </tr>

  <tr>
    <td>Default send button icon vector drawable. it will appear on the send button.
    The drawable is being colored when send button enable by the color configuration R.color.lp_send_button_text_enable. when send button is disable we color it by the color configuration R.color.lp_send_button_text_disable. see more here: [Configuring the SDK](https://developers.liveperson.com/android-attributes.html#Message Edit Text){:target="_blank"}
    To Override this resource - create your own vector drawable under the android drawable folder with the same resource name.
   </td>
    <td>lpinfra_ui_ic_send_disabled.xml</td>
  </tr>

</table>
