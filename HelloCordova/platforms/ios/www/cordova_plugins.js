cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "nodejs-mobile-cordova.nodejs",
        "file": "plugins/nodejs-mobile-cordova/www/nodejs_apis.js",
        "pluginId": "nodejs-mobile-cordova",
        "clobbers": [
            "nodejs"
        ]
    },
    {
        "id": "nodejs-mobile-cordova.nodejs_events",
        "file": "plugins/nodejs-mobile-cordova/www/nodejs_events.js",
        "pluginId": "nodejs-mobile-cordova",
        "clobbers": [
            "nodejs_events"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "nodejs-mobile-cordova": "0.1.4"
};
// BOTTOM OF METADATA
});