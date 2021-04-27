import React, { Dispatch } from 'react';

import { Div } from 'components/Styles';
import { Button } from 'components/Buttons';
import { IViewHolder } from '../interfaces';

interface IViewSlider {
  children: React.ReactNode;
  viewHolder: IViewHolder;
  setView: Dispatch<IViewHolder>;
  isActiveNextPrevButtons: boolean;
}

const ViewSlider = ({ children, viewHolder, setView, isActiveNextPrevButtons }: IViewSlider) => {
  const handleNextView = () => {
    const arr = viewHolder.views.length;
    let idx = viewHolder.activeView + 1;
    idx = idx % arr;

    setView({
      ...viewHolder,
      activeView: idx,
    });
  };

  const handlePrevView = () => {
    let idx = viewHolder.activeView;
    idx = idx - 1;

    setView({
      ...viewHolder,
      activeView: idx,
    });
  };
  return (<>
    <Div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Button
        visibility={viewHolder.activeView <= 0 ? 'hidden' : 'visible'}
        disabled={viewHolder.activeView <= 0}
        background="white"
        onClick={handlePrevView}
        border="1px solid #778594"
        borderRadius="8px"
        color="#74787E"
      >
        {'< Prev'}
      </Button>
      <Button
        visibility={
          !isActiveNextPrevButtons || (viewHolder.activeView >= viewHolder.views.length - 1)
            ? 'hidden'
            : 'visible'
        }
        disabled={viewHolder.activeView >= viewHolder.views.length - 1}
        background="white"
        onClick={handleNextView}
        border="1px solid #778594"
        width="69px"
        height="35px"
        borderRadius="8px"
        color="#74787E"
      >
        {'Next >'}
      </Button>
    </Div>
    {children}
  </>
  )
};

export default ViewSlider;
