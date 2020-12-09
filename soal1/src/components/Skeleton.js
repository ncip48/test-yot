import React from "react";
import SkeletonOld from "react-loading-skeleton";

export const Skeleton = (props) => {
  return (
    <div>
      {props.menu ? (
        <>
          <SkeletonOld height={35} />
          <SkeletonOld height={35} />
          <SkeletonOld height={35} />
        </>
      ) : props.todo ? (
        <>
          <div className="list-group-item rounded d-flex justify-content-between align-items-center">
            <SkeletonOld height={24} width={150} />
            <SkeletonOld height={18} width={70} />
            <div className="pull-right">
              <SkeletonOld height={30} width={90} />
            </div>
          </div>
          <div className="list-group-item rounded d-flex justify-content-between align-items-center">
            <SkeletonOld height={24} width={150} />
            <SkeletonOld height={18} width={70} />
            <div className="pull-right">
              <SkeletonOld height={30} width={90} />
            </div>
          </div>
          <div className="list-group-item rounded d-flex justify-content-between align-items-center">
            <SkeletonOld height={24} width={150} />
            <SkeletonOld height={18} width={70} />
            <div className="pull-right">
              <SkeletonOld height={30} width={90} />
            </div>
          </div>
          <div className="list-group-item rounded d-flex justify-content-between align-items-center">
            <SkeletonOld height={24} width={150} />
            <SkeletonOld height={18} width={70} />
            <div className="pull-right">
              <SkeletonOld height={30} width={90} />
            </div>
          </div>
        </>
      ) : props.category ? (
        <SkeletonOld height={18} width={200} />
      ) : null}
    </div>
  );
};
