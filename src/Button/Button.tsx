import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import createStyles from './Button.styles';
import { useTheme, Theme } from '../styles';
import { capitalize } from '../utils';
import { Typography } from '../Typography';
import { TypographyVariant } from '../styles/typography';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'default';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  color?: ButtonColor;
  disabled?: boolean;
  disableElevation?: boolean;
  href?: string;
  size?: ButtonSize;
  startIcon?: any;
  endIcon?: any;
}

export const Button = ({
  title,
  startIcon,
  endIcon,
  color = 'default',
  size = 'medium',
  variant = 'text',
  onPress,
}: ButtonProps) => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);

  // Calculate Color style
  const viewStyle = (styles as any)[`${variant}${capitalize(color)}View`];
  const viewStyles: any = [viewStyle];

  // Calculate Text styles
  const colorStyle = (styles as any)[`${variant}${capitalize(color)}Color`];
  const textStyles: any = [styles[size]];
  textStyles.push(colorStyle);

  //`view-${variant}-${color}`;
  let typeVariant: TypographyVariant;
  switch (size) {
    case 'small':
      typeVariant = 'buttonSmall';
      break;
    case 'medium':
      typeVariant = 'button';
      break;
    case 'large':
      typeVariant = 'buttonLarge';
      break;
  }
  return (
    <Pressable
      onPress={onPress}
      // style={({ pressed }) => {
      //   return [
      //     {
      //       backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
      //     },
      //     //styles.wrapperCustom,
      //   ];
      // }}
    >
      <View style={viewStyles}>
        {startIcon && <Text>Start</Text>}
        {title ? (
          <Typography style={textStyles} variant={typeVariant} text={title} />
        ) : (
          `Press Me`
        )}
        {/* {({ pressed }) => (
        <Text style={styles.text}>
          {title ? <Text>{title}</Text> : `Press Me`}
        </Text>
      )} */}
        {endIcon && <Text>End</Text>}
      </View>
    </Pressable>
  );
};

export default Button;
