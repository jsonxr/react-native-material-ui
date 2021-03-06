import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../styles';
//import { fade } from '../styles';

export interface ButtonStyles {
  root?: ViewStyle;
  label: TextStyle;

  disabled: ViewStyle;
  disabledElevation: ViewStyle;
  focusVisible: ViewStyle;

  // size
  sizeSmall: ViewStyle;
  sizeLarge: ViewStyle;
  fullWidth: ViewStyle;

  //-------------------------------------
  // icon
  //-------------------------------------
  startIcon: ImageStyle;
  endIcon: ImageStyle;
  // size=
  iconSizeSmall: ImageStyle;
  iconSizeMedium: ImageStyle;
  iconSizeLarge: ImageStyle;

  //-------------------------------------
  // variant="text"
  //-------------------------------------
  text: ViewStyle;
  // color
  textPrimary: ViewStyle;
  textSecondary: ViewStyle;
  // size
  textSizeSmall: TextStyle;
  textSizeLarge: TextStyle;

  //-------------------------------------
  // variant="outlined"
  //-------------------------------------
  outlined: ViewStyle;
  // color
  outlinedPrimary: ViewStyle;
  outlinedSecondary: ViewStyle;
  // size
  outlinedSizeSmall: ViewStyle;
  outlinedSizeLarge: ViewStyle;

  //-------------------------------------
  // variant="contained"
  //-------------------------------------
  contained: ViewStyle;
  // color
  containedPrimary: ViewStyle;
  containedSecondary: ViewStyle;
  // size
  containedSizeSmall: ViewStyle;
  containedSizeLarge: ViewStyle;
}

const createStyles = (theme: Theme) => {
  const defaultStyles = theme.components?.MuiButton?.styleOverrides;
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      borderRadius: theme.shape.borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      ...defaultStyles?.root,
    },
    contained: {},
    outlined: {},
    text: {},
  });
};

// const createStylesOld = (
//   defaultStyles: ButtonStyles | undefined,
//   theme: Theme
// ) => {
//   const root: ViewStyle = {
//     flexDirection: 'row',
//     borderRadius: theme.shape.borderRadius,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 0,
//   };

//   const contained = (backgroundColor: string): ViewStyle => ({
//     ...root,
//     backgroundColor,
//     ...theme.shadows[4],
//   });
//   const outlined = (borderColor: string): ViewStyle => ({
//     ...root,
//     borderWidth: 1,
//     borderColor,
//   });

//   const grey = theme.palette.grey[300];
//   const greyContrast = theme.palette.getContrastText(grey);
//   const primary = theme.palette.primary.main;
//   const primaryContrast = theme.palette.primary.contrastText;
//   const secondary = theme.palette.secondary.main;
//   const secondaryContrast = theme.palette.secondary.contrastText;

//   return StyleSheet.create({
//     // contained
//     containedPrimaryColor: { color: primaryContrast },
//     containedSecondaryColor: { color: secondaryContrast },
//     containedDefaultColor: { color: greyContrast },
//     containedPrimaryView: contained(primary),
//     containedSecondaryView: contained(secondary),
//     containedDefaultView: contained(grey),

//     // outlined
//     outlinedPrimaryColor: { color: primary },
//     outlinedSecondaryColor: { color: secondary },
//     outlinedDefaultColor: { color: greyContrast },
//     outlinedPrimaryView: outlined(fade(primary, 0.5)),
//     outlinedSecondaryView: outlined(fade(secondary, 0.5)),
//     outlinedDefaultView: outlined(
//       theme.palette.type === 'light'
//         ? 'rgba(0, 0, 0, 0.23)'
//         : 'rgba(255, 255, 255, 0.23)'
//     ),

//     // text
//     textDefaultColor: { color: greyContrast },
//     textPrimaryColor: { color: primary },
//     textSecondaryColor: { color: theme.palette.secondary.main },
//     textPrimaryView: root,
//     textSecondaryView: root,
//     textDefaultView: root,

//     iconSizeSmall: { fontSize: 18 },
//     iconSizeMedium: { fontSize: 20 },
//     iconSizeLarge: { fontSize: 22 },
//     small: {
//       ...theme.typography.variants.buttonSmall,
//       paddingVertical: 4,
//       paddingHorizontal: 5,
//     },
//     medium: {
//       ...theme.typography.variants.button,
//       paddingVertical: 6,
//       paddingHorizontal: 8,
//     },
//     large: {
//       ...theme.typography.variants.buttonLarge,
//       paddingVertical: 8,
//       paddingHorizontal: 11,
//     },
//   });
// };

export default createStyles;
