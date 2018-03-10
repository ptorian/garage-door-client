export class State {
    authSession: StateAuthSession;
    garageDoorList: StateGarageDoorList;
}

export class StateAuthSession {
    isPending: boolean;
    isAuthenticated: boolean;
    isError: boolean;
    errorMessage: string;
    user: any;
}

export class StateGarageDoorList {
    garageDoors: any[]
}

export const initialState: State = {
    authSession: {
        isPending: false,
        isAuthenticated: false,
        isError: false,
        errorMessage: null,
        user: null
    },
    garageDoorList: {
        garageDoors: null
    }
};