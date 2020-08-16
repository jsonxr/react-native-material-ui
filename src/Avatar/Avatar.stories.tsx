import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { ThemeDecorator, DefaultDecorator } from '../../storybook/decorators';

import { Avatar } from '..';

storiesOf('Avatar', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View style={styles.root}>
      <Avatar />
    </View>
  ));

const styles = StyleSheet.create({
  root: {},
});
