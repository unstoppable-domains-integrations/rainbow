/* eslint-disable import/no-commonjs */
const { merge } = require('lodash');
const {
  transform: anisotropicTransform,
} = require('metro-plugin-anisotropic-transform');

module.exports.transform = function({ src, filename, options }) {
  const opts = merge(options, {
    customTransformOptions: {
      'metro-plugin-anisotropic-transform': {
        globalScopeFilter: {
          'react-native-keychain': {},
        },
      },
    },
  });
  return anisotropicTransform({ filename, options: opts, src });
};
