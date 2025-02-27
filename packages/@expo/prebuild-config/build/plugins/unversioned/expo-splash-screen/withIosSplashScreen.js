"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIosSplashScreen = void 0;
function _configPlugins() {
  const data = require("@expo/config-plugins");
  _configPlugins = function () {
    return data;
  };
  return data;
}
function _debug() {
  const data = _interopRequireDefault(require("debug"));
  _debug = function () {
    return data;
  };
  return data;
}
function _getIosSplashConfig() {
  const data = require("./getIosSplashConfig");
  _getIosSplashConfig = function () {
    return data;
  };
  return data;
}
function _withIosSplashAssets() {
  const data = require("./withIosSplashAssets");
  _withIosSplashAssets = function () {
    return data;
  };
  return data;
}
function _withIosSplashColors() {
  const data = require("./withIosSplashColors");
  _withIosSplashColors = function () {
    return data;
  };
  return data;
}
function _withIosSplashInfoPlist() {
  const data = require("./withIosSplashInfoPlist");
  _withIosSplashInfoPlist = function () {
    return data;
  };
  return data;
}
function _withIosSplashScreenStoryboard() {
  const data = require("./withIosSplashScreenStoryboard");
  _withIosSplashScreenStoryboard = function () {
    return data;
  };
  return data;
}
function _withIosSplashScreenStoryboardImage() {
  const data = require("./withIosSplashScreenStoryboardImage");
  _withIosSplashScreenStoryboardImage = function () {
    return data;
  };
  return data;
}
function _withIosSplashXcodeProject() {
  const data = require("./withIosSplashXcodeProject");
  _withIosSplashXcodeProject = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const debug = (0, _debug().default)('expo:prebuild-config:expo-splash-screen:ios');
const withIosSplashScreen = (config, splash) => {
  // If the user didn't specify a splash object, infer the splash object from the Expo config.
  if (!splash) {
    splash = (0, _getIosSplashConfig().getIosSplashConfig)(config);
  } else {
    splash = {
      ...(0, _getIosSplashConfig().getIosSplashConfig)(config),
      ...splash
    };
  }
  debug(`config:`, splash);
  return (0, _configPlugins().withPlugins)(config, [[_withIosSplashInfoPlist().withIosSplashInfoPlist, splash], [_withIosSplashAssets().withIosSplashAssets, splash], [_withIosSplashColors().withIosSplashColors, splash],
  // Add the image settings to the storyboard.
  [_withIosSplashScreenStoryboardImage().withIosSplashScreenImage, splash],
  // Link storyboard to xcode project.
  // TODO: Maybe fold this into the base mod.
  _withIosSplashXcodeProject().withIosSplashXcodeProject,
  // Insert the base mod last, no other ios.splashScreenStoryboard mods can be added after this.
  _withIosSplashScreenStoryboard().withIosSplashScreenStoryboardBaseMod]);
};
exports.withIosSplashScreen = withIosSplashScreen;
//# sourceMappingURL=withIosSplashScreen.js.map