# slackfix
Hacks to make slack more usable.  Contributions gratefully accepted.

### button.js

<img width="156" alt="image" src="https://user-images.githubusercontent.com/2342142/292336438-2863af2b-6467-40c7-8e5d-f736d04bb253.png">

 Add a button to show/hide activity tab.  This button floats on top of the workspace switcher and won't play nicely with the interface when the workspace switcher isn't open.

 Copy and paste this code into the dev console (run `/slackdevtools` to open the console or set the `SLACK_DEVELOPER_MENU` environment variable to TRUE so you can right click on elements).

 The code tries to reinsert itself when slack modifies its interface, but if you need to recreate the button, simply open the dev console again and hit the up arrow.

**Ideas for Improvement**
  * Clean up code (e.g., get rid of global variables)
  * Better icon (I just stole an existing asset)
  * Play nicer when the workspace switch isn't open (never true for me)
