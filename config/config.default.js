/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1592367030477_3757';


    config.mongoose = {
        url: "mongodb://81.68.180.162:27017/egg_cnode",
        options: {
            server: {poolSize: 20},
            reconnectTries: 10,
            reconnectInterval: 500,
        },
    };
    return config;
}
;
