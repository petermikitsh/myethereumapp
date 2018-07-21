module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'declaration-block-no-duplicate-properties': [true, {ignore: "consecutive-duplicates"}],
    'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ["global"]}]
  }
};
