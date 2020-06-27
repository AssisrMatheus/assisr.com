import styled from 'styled-components';
import responsiveMediaQuery from '../../utils/responsiveMediaQuery';

export default styled.div`
  width: 100%;
  margin: 0 ${(props) => props.theme.spacing.sp16};

  ${responsiveMediaQuery('phone')} {
    margin: 0 ${(props) => props.theme.spacing.sp32};
    max-width: 540px;
  }

  ${responsiveMediaQuery('tablet')} {
    margin: 0 auto;
    max-width: 720px;
  }

  ${responsiveMediaQuery('laptop')} {
    max-width: 960px;
  }

  ${responsiveMediaQuery('desktop')} {
    max-width: 1140px;
  }

  ${responsiveMediaQuery('ultrawide')} {
    max-width: 1240px;
  }
`;
