import React from 'react';

import { Skeleton } from '../../components/skeletons';
import { ListGrid } from '../../components/grids';

export const SkeletonList = () => {
  return (
    <ListGrid>
      <Skeleton variant="text" height={20} width="100%" />
      <Skeleton variant="text" height={20} width="100%" />
    </ListGrid>
  );
};
