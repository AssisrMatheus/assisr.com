// import original module declarations
import 'styled-components';
import { AppTheme } from '../components/Providers/AppThemeProvider';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
