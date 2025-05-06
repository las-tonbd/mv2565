const { getDefaultConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const config = getDefaultConfig(__dirname);

// Nếu bạn cần thêm transformer khác, dùng babelTransformerPath ở đây
// Nhưng thường với Reanimated thì không cần chỉnh gì thêm.

module.exports = wrapWithReanimatedMetroConfig(config);
