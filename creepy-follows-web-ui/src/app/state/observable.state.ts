import { Observable } from "rxjs"
import { take } from "rxjs/operators"
import { Injectable, NgZone } from "@angular/core"
import { Action, Store } from "@ngrx/store"

import { AppAction } from "./reducers.state"
import { Visibility, UIElementState } from "./ui-state"

export interface AppState {
  uiElementState: UIElementState
  visibility: Visibility
}

export const initialAppState: AppState = {
  uiElementState: { id: 0, status: "disabled" },
  visibility: new Visibility()
}

@Injectable()
export class ObservableState {
  constructor(private store: Store<AppState>, private ngZone: NgZone) {}

  appState(): AppState {
    let state: AppState = initialAppState

    this.store.pipe(take(1)).subscribe((s: AppState) => (state = s))

    // You can always rely on subscribe()
    // running synchronously if you have
    // to get the state value
    return state
  }

  appStore(): Store<AppState> {
    return this.store
  }

  dispatch(action: AppAction) {
    return this.ngZone.run(() => this.store.dispatch(action))
  }

  uiElementVisible(): boolean {
    return this.appState().visibility.isUIElementVisible
  }

  uiElementVisible$(): Observable<boolean> {
    return this.appStore().select(
      (state: AppState) => state.visibility.isUIElementVisible
    )
  }

  uiElementState(): UIElementState {
    return this.appState().uiElementState
  }

  uiElementState$(): Observable<UIElementState> {
    return this.appStore().select((state: AppState) => state.uiElementState)
  }
}
