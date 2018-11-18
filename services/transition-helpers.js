export const fromBottonToTop = (props) => {
  const { position, layout, scene } = props;
  const thisSceneIndex = scene.index;
  const height = layout.initHeight;

  const opacity = position.interpolate({
    inputRange: [thisSceneIndex - 0.7, thisSceneIndex, thisSceneIndex + 0.7],
    outputRange: [0.3, 1, 0.3]
  });

  const translateY = position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
    outputRange: [height, 0, 0]
  });

  return { 
    opacity,
    transform: [{ translateY }] 
  }
}

export const fadeFromInToOut = (props) => {
  const { position, scene } = props;

  const index = scene.index;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 0]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
}