export const launchpads = (state: any = [], action: any) => {
    switch (action.type) {
        case "GET_LAUNCHPADS_FETCH":
            return [
                ...state,
                 ...action.launchpads
                ];
        default:
            return state;
    }
}
