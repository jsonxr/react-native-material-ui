import { deepmerge } from '../utils';
// import createBreakpoints from './createBreakpoints';
// import createMixins from './createMixins';
import createPalette from './createPalette';
import { ThemeOptions } from './Theme';

// import createTypography from './createTypography';
import shadows from './shadows';
import createShadows from './shadows';
// import shape from './shape';
// import createSpacing from './createSpacing';
// import transitions from './transitions';
// import zIndex from './zIndex';

function createTheme(options: ThemeOptions = {}, ...args: any[]) {
  const {
    // breakpoints: breakpointsInput = {},
    // mixins: mixinsInput = {},
    palette: paletteInput = {},
    // spacing: spacingInput,
    // typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  // const breakpoints = createBreakpoints(breakpointsInput);
  // const spacing = createSpacing(spacingInput);

  let muiTheme = deepmerge(
    {
      //breakpoints,
      //direction: 'ltr',
      //mixins: createMixins(breakpoints, spacing, mixinsInput),
      //overrides: {}, // Inject custom styles
      palette,
      //props: {}, // Provide default props
      shadows: createShadows(),
      // typography: createTypography(palette, typographyInput),
      // spacing,
      // shape,
      // transitions,
      // variants: {},
      // zIndex,
    },
    other
  );

  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

export default createTheme;
