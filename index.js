var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
//The first parameter is the site you want to go to.
//The second parameter can be one of 3 options: _self, _blank, _system
//_self uses Cordova Webview if URL is "good" (whitelist), otherwise uses InAppBroswer.
//_blank uses InAppBrowser and _system uses's phone's browser
//The third parameter is a string of options - different options for Android and IOS. Both support the location option.

    onDeviceReady: function() {
        app.amendLinks('external-link');
    },

    // Find everything with class className and open it
    // with the InAppBrowser
    amendLinks: function(className) {
        var n = 0,
            links = document.getElementsByClassName(className);

        for (; n < links.length; n++) {
            links[n].onclick = function(e) {
                e.preventDefault();
                window.open(''.concat(this.href), '_blank');
            }
        }
    }
};


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
