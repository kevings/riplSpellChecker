To view on GitHub Pages, check it out [here](https://kevings.github.io/riplSpellChecker/)!

Created for this [coding challenge](https://github.com/RiplApp/spellchecker-homework)

If you would rather set it up with a local server, I used Python's [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html) by navigating to the folder directory and running `python -m SimpleHTTPServer 1337` then setting my Chrome browser to http://localhost:1337/index.html. Per the information on [this page](https://gist.github.com/jgravois/5e73b56fa7756fd00b89#what-if-id-rather-use-something-else), it might be different if you are using a different version of Python. I am using Python version 2.7.15.

Once the web server is up and running, you should be able to type in a word in the text field and click Submit to spell check with the following parameters:

- Fixes bad casing (“wetumpka” → “Wetumpka”)
- Removes repeating letters (“tabble” → “table”)
- Adds missing repeating letters (“realy” → “really”)
- Removes all spaces (“ immense" → "immense")
- All of the above (“pa RNAssussss ” → “Parnassus”)
