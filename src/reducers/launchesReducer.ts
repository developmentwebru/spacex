export const launches = (state: any = [], action: any) => {
    switch (action.type) {
        case "GET_LAUNCHES_FETCH":
            return [
                ...state,
                 ...action.launches
                ];
        default:
            return state;
    }
}
