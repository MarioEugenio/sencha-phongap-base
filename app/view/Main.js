Ext.define('Pizza.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
        {
            title: 'Welcome',
            iconCls: 'home',

            styleHtmlContent: true,
            scrollable: true,
                
            tpl: [
                'Device name: {device.name}<br/>',
                'phonegap version: {device.cordova}<br/>',
                'Latitude: {position.coords.latitude}<br/>',
                'Longitude: {position.coords.longitude}<br/>',
                'Altitude: {position.coords.altitude}<br/>',
                'Accuracy: {position.coords.accuracy}<br/>',
                'Altitude Accuracy: {position.coords.altitudeAccuracy}<br/>',
                'Heading: {position.coords.heading}<br/>',
                'Speed: {position.coords.speed}<br/>',
                'Timestamp: {position.timestamp}<br/>'
            ].join(""),         
            listeners: {
                initialize: function(){
                    var _this = this;
                    navigator.geolocation.getCurrentPosition(function(position){
                        _this.setData({
                            'position': position,
                            'device' : device
                        });
                    }, function(){
                        alert('problem with location');
                    });
                    //this.setData(device);
                }
            },                
            items: {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Welcome to Sencha Touch 2'
            }
        },
        {
            title: 'Get Started',
            iconCls: 'action',

            items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Getting Started'
            },
            {
                xtype: 'video',
                url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
            }
            ]
        }
        ]
    }
});
