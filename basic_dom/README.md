1. Async means, download the JS scripts while keep parsing and redering the html. after download finished, pause and excute the script, then continue parsing html. more like loading an image in html pages.(random running timming depends on download speed)
2. Defer, similar to Async, but it will excute JS scripts only after whole HTML has been parsed
(ensure excution after the page rendered, better always use defer)
3. every browser behaviour is based on window, like window.console.log(), window.alert()
4. document is the exact html of the page