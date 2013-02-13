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
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        if(id == 'deviceready'){
            //<debug>
            Ext.Loader.setPath({
                'Ext': 'touch/src',
                'Pizza': 'app'
            });
            //</debug>

            Ext.application({
                name: 'Pizza',

                requires: [
                'Ext.MessageBox'
                ],

                views: ['Main'],

                icon: {
                    '57': 'resources/icons/Icon.png',
                    '72': 'resources/icons/Icon~ipad.png',
                    '114': 'resources/icons/Icon@2x.png',
                    '144': 'resources/icons/Icon~ipad@2x.png'
                },

                isIconPrecomposed: true,

                startupImage: {
                    '320x460': 'resources/startup/320x460.jpg',
                    '640x920': 'resources/startup/640x920.png',
                    '768x1004': 'resources/startup/768x1004.png',
                    '748x1024': 'resources/startup/748x1024.png',
                    '1536x2008': 'resources/startup/1536x2008.png',
                    '1496x2048': 'resources/startup/1496x2048.png'
                },

                launch: function() {
                    // Destroy the #appLoadingIndicator element
                    Ext.fly('appLoadingIndicator').destroy();

                    // Initialize the main view
                    Ext.Viewport.add(Ext.create('Pizza.view.Main'));
                },

                onUpdated: function() {
                    Ext.Msg.confirm(
                        "Application Update",
                        "This application has just successfully been updated to the latest version. Reload now?",
                        function(buttonId) {
                            if (buttonId === 'yes') {
                                window.location.reload();
                            }
                        }
                    );
                }
            });
        }

    }
};

app.initialize();