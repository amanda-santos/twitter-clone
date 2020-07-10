import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Amanda Santos</h1>
        <h2>@amanda_santos</h2>

        <p>
          Here goes some text and a <a href="https://github.com">link</a>...
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brazil
          </li>
          <li>
            <CakeIcon />
            Born on October 5th, 1999
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>1.384</strong>
          </span>
          <span>
            <strong>4774 </strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;