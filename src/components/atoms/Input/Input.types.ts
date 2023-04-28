import { FieldValues, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

export type TRegister = {
  pattern?: RegExp;
  required: boolean;
  maxLength?: number;
  minLength?: number;
};

const inputVariants = ['login', 'password', 'confirmPassword'] as const;

export type InputVariant = (typeof inputVariants)[number];

export type RegisterOptions = { validate: (value: string) => boolean } | null;

export type InputProps = {
  input: InputVariant;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions;
  regexPattern: TRegister;
};
