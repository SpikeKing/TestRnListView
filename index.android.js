/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var ListViewModule = require('./list_view_module/index');

AppRegistry.registerComponent('RnListView', () => ListViewModule);
