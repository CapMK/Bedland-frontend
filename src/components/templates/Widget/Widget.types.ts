import { MouseEventHandler } from 'react';
import { Getters } from 'types/shared.types';

const widgetVariant = ['notifications', 'payments', 'contacts', 'votings'] as const;
export type WidgetVariant = (typeof widgetVariant)[number];

export const widgetMode = ['dark', 'light'] as const;
export type WidgetMode = (typeof widgetMode)[number];

export type WidgetProps = {
  variant: WidgetVariant;
  mode: WidgetMode;
  title: string;
  isArrowButton?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const defaultWidgetProps = {
  isArrowButton: false,
};

type Size = {
  minWidth: string;
  minHeight: string;
};

export type WidgetSize = Getters<WidgetVariant, Size>;

export type WidgetELementProps = Size & Pick<WidgetProps, 'mode'>;
