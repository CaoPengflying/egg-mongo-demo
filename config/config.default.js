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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592367030477_3757';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    url: "mongodb://mongoDemo:123456@47.98.128.180:27017/mongo_demo?authSource=admin",
    options: {
      server: {poolSize: 20},
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };

  return {
    config
  };
};
