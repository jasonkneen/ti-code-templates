var win = Ti.UI.createWindow();
var webview = Ti.UI.createWebView({
    url: 'http://www.appcelerator.com'
});
win.add(webview);
win.open();
