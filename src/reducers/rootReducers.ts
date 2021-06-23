import { combineReducers } from "redux";
import { launches } from "./launchesReducer";
import { launchpads } from "./launchpadReducer";
import { rockets } from "./rocketReducer";
import { filterValue } from "./filterValue";

const rootReducer = combineReducers({
    launches,
    launchpads,
    rockets,
    filterValue
});
export default rootReducer
