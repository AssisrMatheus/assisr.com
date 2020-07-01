/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useIntl } from 'react-intl';
import AsyncImage from '../AsyncImage';
import { Container } from '../Container';

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
          {/* <div>
            <h1>
              <FormattedMessage id="profile.name" />
            </h1>
            <p>
              <FormattedMessage id="profile.description" />
            </p>
          </div> */}
        </div>
      </Container>
    </header>
  );
};
