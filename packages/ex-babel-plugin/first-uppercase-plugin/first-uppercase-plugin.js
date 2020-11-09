const firstUppercasePlugin = () => {
  return {
    visitor: {
      StringLiteral(path) {
        const origin = path.node.value;
        const converted = origin.charAt(0).toUpperCase();
        path.node.value =
          origin.length <= 1
            ? converted
            : converted.concat(origin.substring(1));
      },
    },
  };
};

export default firstUppercasePlugin;
