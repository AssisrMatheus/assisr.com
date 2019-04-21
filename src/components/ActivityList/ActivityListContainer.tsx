import React, { useEffect } from "react";

// Interfaces
import IActivity from "./../../interfaces/IActivity";

// Redux
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { createActivityFetch } from "../../redux/modules/activity/creators";
import { AppState } from "./../../redux/reducers";

// Components
import ActivityListComponent from "./ActivityListComponent";

interface IActivityListContainerProps {
  doActivityFetch: typeof createActivityFetch;
  activityList: IActivity[];
  error: string | undefined;
  fetching: boolean;
}

const ActivityListContainer = (props: IActivityListContainerProps) => {
  useEffect(() => {
    props.doActivityFetch("assisrmatheus");
  }, []);

  return (
    <ActivityListComponent
      fetching={props.fetching}
      list={props.activityList}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  activityList: state.activity.activityList,
  error: state.activity.error,
  fetching: state.activity.fetching
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      doActivityFetch: createActivityFetch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityListContainer);
