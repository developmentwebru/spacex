const defaultState: any = {
    falconId: 'all',
    launchpadId: 'all',
}
export const filterValue = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case "FALCON_FILTER":
            return {
                ...state,
                falconId: action.falconId
            };
        case "LAUNCHPADS_FILTER":
            return {
                ...state,
                launchpadId: action.launchpadId
            };
        default:
            return state;
    }
}
