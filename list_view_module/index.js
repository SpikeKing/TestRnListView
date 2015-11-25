'use strict'

var React = require('react-native');

var {
  Text,
  Image,
  TouchableOpacity, // 按钮
  ListView,
  View,
  ToastAndroid,
} = React;

var styles = require('./styles');

// 图片
var IMAGES = [
  require('./images/total_girls.png'),
  require('./images/jessicajung.png'),
  require('./images/kimhyoyeon.png'),
  require('./images/seohyun.png'),
  require('./images/sooyoung.png'),
  require('./images/sunny.png'),
  require('./images/taeyeon.png'),
  require('./images/tiffany.png'),
  require('./images/yoona.png'),
  require('./images/yuri.png'),
];

// 名字
var NAMES = [
  'Girls\' Generation',
  'Jessica Jung',
  'Kim Hyo Yeon',
  'Seo Hyun',
  'Soo Young',
  'Sunny',
  'Taeyeon',
  'Tiffany',
  'Yoona',
  'Yuri'
];

var ListViewModule = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows())
    };
  },

  _genRows: function() {
    var re = [];
    for (var i=0; i<IMAGES.length; ++i) {
      re.push([ NAMES[i%NAMES.length], IMAGES[i%IMAGES.length] ]);
    }
    return re;
  },

  // 点击事件
  _pressRow: function(rowToast: string) {
    ToastAndroid.show(rowToast, ToastAndroid.SHORT);
  },

  _renderRow: function(rowData: array, sectionID: number, rowID: number) {
    return (
      <TouchableOpacity onPress={() => this._pressRow(rowData[0])}>
        <View>
          <View style={styles.button}>
            <Image style={styles.image} source={rowData[1]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  },

  render: function() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
});

module.exports = ListViewModule;
