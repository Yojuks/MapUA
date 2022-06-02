import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTypedSelector } from 'redux/hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';
import userImageNotFound from '../../../static/image-not-found.jpg';
import { EditButton, ProfileAvatar, UploadBox } from '../styles';

type Props = {
  displayName: string;
  editData: any;
};

export const EditGroup: FC<Props> = ({ displayName, editData }) => {
  const { t } = useTranslation();
  const { imageUrl: userAvatar } = useTypedSelector(
    state => state.userData.data
  );

  return (
    <UploadBox>
      <ProfileAvatar
        aria-label="avatar"
        src={userAvatar || userImageNotFound}
      />
      <Typography sx={{ mt: '3vh' }} variant="h5" component="h4" align="center">
        {displayName === undefined
          ? `${t('profile.profilePage.yourName')}`
          : displayName}
      </Typography>

      <EditButton
        sx={{ mt: '2vh' }}
        size="large"
        variant="contained"
        onClick={editData}
      >
        {t('profile.profilePage.editProfile')}
      </EditButton>
    </UploadBox>
  );
};