/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import AsyncImage from '../AsyncImage';
import { Container } from '../Container';
import { HeaderOne, Paragraph } from '../Typography';

export const Header: React.FC = () => {
  const intl = useIntl();
  return (
    <header className="mb-64">
      <Container>
        <div className="flex items-center space-x-32">
          <div className="flex-shrink-0">
            <AsyncImage
              className="rounded-full h-48"
              src="/img/profile.jfif"
              alt={`${intl.formatMessage({
                id: 'profile.name',
              })} profile photo`}
            />
          </div>
          <div>
            <HeaderOne>
              <FormattedMessage id="profile.name" />
            </HeaderOne>
            <Paragraph>
              <FormattedMessage id="profile.description" />
            </Paragraph>
          </div>
        </div>
      </Container>
    </header>
  );
};
