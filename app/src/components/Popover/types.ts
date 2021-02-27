export type PopoverVariant = 'welcome' | 'record' | 'space' | 'share';
export type PopoverKind = 'team' | 'personal' | 'guest';
export type Popovers = {
  kind: PopoverKind;
  variant: PopoverVariant;
};
