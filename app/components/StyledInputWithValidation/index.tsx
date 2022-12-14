import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {List} from 'react-native-paper';
import {Colors} from '../../enums/colors';
import StyledInput from '../StyledInput';
import {styles} from './styles';

interface StyledInputWithValidatorParams {
  validate: boolean;
  style?: StyleProp<ViewStyle>;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (value: string) => void;
}

const StyledInputWithValidator = (params: StyledInputWithValidatorParams) => {
  const {validate} = params;

  const icon = validate ? 'check' : 'close';
  const color = validate ? Colors.GREEN_COLOR : Colors.RED_COLOR;

  return (
    <View style={[styles.container, params.style]}>
      <StyledInput
        style={styles.input}
        onChangeText={params.onChangeText}
        value={params.value}
        placeholder={params.placeholder}
        secureTextEntry={params.secureTextEntry}
      />
      <List.Icon icon={icon} color={color} style={styles.icon} />
    </View>
  );
};

export default StyledInputWithValidator;
