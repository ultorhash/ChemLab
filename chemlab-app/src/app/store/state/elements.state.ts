import { State, Action, StateContext, Selector } from "@ngxs/store";
import { IElement } from "src/app/interfaces/element.interface";
import { SetElements } from '../actions/elements.actions';

export class ElementsStateModel {
  elements: IElement[] = [];
}

@State<ElementsStateModel>({
  name: 'elements',
  defaults: {
    elements: []
  }
})
export class ElementsState {

  @Selector()
  static getElements(state: ElementsStateModel) {
    return state.elements;
  }

  @Action(SetElements)
  setElements({ patchState }: StateContext<ElementsStateModel>, { payload }: SetElements) {
    patchState({
      elements: payload
    })
  }
}