module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
       'module-resolver',
       {
         root: ['./src'],
         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
         alias: {
           tests: ['./tests/'],
           "@components": "./src/components",
           "@views": ["./src/views"],
           "@styles": ["./src/styles"],
           "@assets": ["./src/assets"],
         }
       }
    ],
    'react-native-reanimated/plugin',
  ]
};
