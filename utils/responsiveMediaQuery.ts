export const screens = {
  // Values extracted from bootstrap 4
  // https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints
  phone: 576,
  tablet: 760,
  laptop: 992,
  desktop: 1200,
  ultrawide: 1925,
};

export default (
  min: keyof typeof screens,
  max?: keyof typeof screens | boolean
) => {
  if (typeof max === 'boolean')
    return `@media screen and (max-width:${screens[min]}px)`;
  if (!max) return `@media screen and (min-width:${screens[min]}px)`;
  return `@media screen and (min-width:${screens[min]}px) and (max-width:${screens[max]}px)`;
};
