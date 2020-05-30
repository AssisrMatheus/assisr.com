import { screens } from '../styles/theme';

export default (
  min: keyof typeof screens,
  max?: keyof typeof screens | boolean
) => {
  if (typeof max === 'boolean')
    return `@media screen and (max-width:${screens[min]}px)`;
  if (!max) return `@media screen and (min-width:${screens[min]}px)`;
  return `@media screen and (min-width:${screens[min]}px) and (max-width:${screens[max]}px)`;
};
