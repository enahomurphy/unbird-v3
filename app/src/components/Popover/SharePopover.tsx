import { Arrow } from 'components/Icons';
import { getArrowTranslate } from 'lib/styles';
import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import Popover from './Popover';
import * as S from './styles';

interface SharePopoverProps {
  onClose: () => void;
}

export const SharePopover: FC<SharePopoverProps> = ({
  onClose,
}): ReactElement => {
  const { t } = useTranslation();

  return ReactDOM.createPortal(
    <S.ShareWrapper>
      <Arrow
        style={{
          transform: getArrowTranslate('right'),
          marginTop: '31px',
        }}
      />
      <Popover
        title={t('popover.share.title')}
        body={t('popover.share.body')}
        icon="👍"
        onClose={onClose}
      />
    </S.ShareWrapper>,
    document.getElementById('modal-root')
  );
};

export default SharePopover;
