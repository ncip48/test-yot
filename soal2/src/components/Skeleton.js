import React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        height={60}
        borderRadius={10}
        marginVertical={5}
      />
      <SkeletonPlaceholder.Item
        height={60}
        borderRadius={10}
        marginVertical={5}
      />
      <SkeletonPlaceholder.Item
        height={60}
        borderRadius={10}
        marginVertical={5}
      />
    </SkeletonPlaceholder>
  );
};
