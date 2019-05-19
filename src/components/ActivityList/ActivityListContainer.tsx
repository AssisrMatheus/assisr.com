import React, { useEffect } from "react";

// Interfaces
import IActivity from "./../../interfaces/IActivity";

// Redux
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { doActivityFetch } from "../../redux/modules/activity/actionCreators";
import { AppState } from "../../redux/reducers";

// Components
import ActivityListComponent from "./ActivityListComponent";

interface IActivityListContainerProps {
  doActivityFetch: typeof doActivityFetch;
  activityList: IActivity[];
  error: string[];
  fetching: boolean;
  theme: AppState["theme"]["theme"];
}

const ActivityListContainer = (props: IActivityListContainerProps) => {
  useEffect(() => {
    props.doActivityFetch("assisrmatheus", "UCwtuk0k5hX_HWWSidYSIvLg");
  }, []);

  return (
    <ActivityListComponent
      fetching={props.fetching}
      activityList={props.activityList}
      theme={props.theme}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  activityList: state.activity.activityList,
  error: state.activity.error,
  fetching: state.activity.fetching,
  theme: state.theme.theme
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      doActivityFetch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityListContainer);
