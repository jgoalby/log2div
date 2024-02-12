# log2div
Console logging in the browser to a div for browsers without developer tools.

# What?
- Pure Javascript library for viewing console logging messages in the browser.

# Why?

## Why pure javascript?
- Pure javascript because it is being developed on an iPad which doesn't have Node.js.

## Why make a developer console when all major browsers have much better ones?
- Most browsers on mobile and tablets do not have developer tools. This is for them.

## Why not use Firebug Lite?
- [Firebug Lite](https://github.com/firebug/firebug-lite) hasn't been updated in over 10 years.
- I would have used it as a starting point but it is very large and I only wanted a console for logging.

# TODOs
- On desktop
  - Issue with spans going onto a new line. Use desktop browser to diagnose in dev console.
  - I think there is extra space in the formatted output, perhaps a style issue.
- Test everything now that names have been changed.
- Test the table function and clean up that code as needed and comment.
- What is the thead css doing for me?
- Finish creating the jsdoc for the functions
- window.isSecureContext for HTTPS
- Add more buttons next to copy. Clear, stop, show error, warn, info, etc.
- Add a compact view option to the console. Not sure if thats just CSS or not?
  - Need to change the class on main container to be compact
- Make sure there is a good way to turn off the console when you no longer want it in your project
- Make an option to show the row number as part of the output
- Make an option to output the timestamp
- Need a version number. How do pure javascript projects do that?
  - What else do pure javascript projects do?
- Add a todo section for this project
  - Copy to clipboard as RTF is one item to add
- Output timestamp in the console
     var date = new Date();
        var strTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
        logIndex++;
        var prefix = '[' + logIndex + '] ' + strTime + ' [' + type.toUpperCase() + '] ';
- Add to todo in the new project
  - Add a text box to issue commands to the console. Maybe very simplified and logging based.
