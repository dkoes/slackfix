# slackfix
Hacks to make slack more usable.  Contributions gratefully accepted.  See extended discussion at [this gist](https://gist.github.com/Kenny-MWI/6b1a88ad38b5ffef347527a82becf054). [Here](https://www.reddit.com/r/Slack/comments/16d9psg/comment/kwji8x6/?utm_source=share&utm_medium=web2x&context=3) is a reddit post describing how to make this permanent on Linux (I don't think it can be done on Mac since the app is signed).

## Installing Hacks
 Copy and paste the code into the dev console (run `/slackdevtools` to open the console or set the `SLACK_DEVELOPER_MENU` environment variable to TRUE so you can right click on elements).  You will need to do this everytime you start slack or when slack does a full reload.  Recent versions of slack seem to have disabled these options, but you can still launch slack with a remote debugging port open and get access to a console that way:
 ```
/Applications/Slack.app/Contents/MacOS/Slack --remote-debugging-port=6400 '--remote-allow-origins=*'
```

### merge.js
<img width="92" alt="image" src="https://github.com/dkoes/slackfix/assets/2342142/2858da60-e094-46ee-a7f3-2692bd1e8368">

Removes the activity tab and merges it with the workspace switcher.  You can still hide/show the workspace switcher (which now contains the activity tab and the account control panel).  If you don't have enough vertical space to show all your workspaces you can scroll, but there is no visual indicator that content is hidden.

**Ideas for Improvement**
  * Better indicator that there are hidden workspaces that you can scroll to (dynamically adjust spacing first?)
  * Labels are hidden on activities, but will come back if you resize the window.
   
### button.js

<img width="156" alt="image" src="https://user-images.githubusercontent.com/2342142/292336438-2863af2b-6467-40c7-8e5d-f736d04bb253.png">

 Add a button to show/hide activity tab.  This button floats on top of the workspace switcher and won't play nicely with the interface when the workspace switcher isn't open. **Note**: I use merge.js so this hack is unlikely to get updated to address slack changes.

The activity tab is mostly empty space and consumes valuable screen real estate (especially if you run slack on a vertical monitor).  However, it is rarely needed (mostly to clear activity notification) so there is no harm in hiding it most the time.

 The code tries to reinsert itself when slack modifies its interface, but if you need to recreate the button, simply open the dev console again and hit the up arrow.

**Ideas for Improvement**
  * Clean up code (e.g., get rid of global variables)
  * Properly set size of workspace switcher so it won't overlap buttons if not enough vertical room.
  * Better icon (I just stole an existing asset)
  * Play nicer when the workspace switch isn't open (never true for me)
    

