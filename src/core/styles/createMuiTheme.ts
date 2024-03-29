import { deepmerge } from '../../utils';
// import createBreakpoints from './createBreakpoints';
// import createMixins from './createMixins';
import { createPalette } from './colors/Palette';
import { Theme } from './Theme/Theme';
import shadows from './shadows';
import shape from './shape';
import createTypography from './typography/createTypography';
import createSpacing from './createSpacing';
import zIndex from './zIndex';

// import createSpacing from './createSpacing';
// import transitions from './transitions';

function createMuiTheme<T>(options?: T, ...args: any[]): T & Theme {
  const o: any = options ?? {};
  const {
    // breakpoints: breakpointsInput = {},
    // mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = o;

  const palette = createPalette(paletteInput);
  // const breakpoints = createBreakpoints(breakpointsInput);
  // const spacing = createSpacing(spacingInput);

  let muiTheme = deepmerge(
    {
      //breakpoints,
      direction: 'ltr',
      //mixins: createMixins(breakpoints, spacing, mixinsInput),
      components: {}, // Inject component definitions
      palette,
      shadows: [...shadows],
      typography: createTypography(palette, typographyInput),
      spacing: createSpacing(spacingInput),
      shape: { ...shape },
      //transitions: { duration, easing, create, getAutoHeightDuration },
      zIndex: { ...zIndex },
    },
    other
  );

  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return (muiTheme as unknown) as T & Theme;
}

export default createMuiTheme;
