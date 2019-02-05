import { UIElementState } from "./ui-state"

import { Action, ActionReducer } from "@ngrx/store"

import { initialAppState } from "./observable.state"

export const UI_ELEMENT_VISIBLE = "UI_ELEMENT_VISIBLE"
export const UPDATE_UI_ELEMENT = "UPDATE_UI_ELEMENT"

export class AppAction implements Action {
    type: string
    payload: any
    constructor(type: string, payload: any) {
        this.type = type
        this.payload = payload
    }
}

export function uiElementState(
    state: UIElementState = initialAppState.uiElementState,
    action: AppAction
): UIElementState {
    switch (action.type) {
        case UPDATE_UI_ELEMENT:
            return action.payload.uiElementState
        default:
            return state
    }
}

export const rootReducer = {
    uiElementState
}

export function withParent<T>(
    parentReducer: ActionReducer<T>,
    reducer: ActionReducer<T>
) {
    return function parentChildReducer(state: T, action: Action) {
        return reducer(parentReducer(state, action), action)
    }
}
