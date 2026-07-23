## Redux

Redux is a state management library for JavaScript applications.
It came into existence to solve complex state management problems and also avoid prop drilling.
Components can read state using useSelector and update it by dispatching actions with useDispatch
Eg: In prop drilling -> if one prop is to pass from component A to component C -> and component A is connected in between with component B -> its can't send the prop directly to component C as in between component B is there it has to be passed through Component B before it can be used in Component C.
to avoid this chaining redux came into existence as now the shared data is centralized in the Redux Store and any component can directly access/use the data from the Redux Store without maintaining the prop chain

## Redux Flow

User Clicks Button
        ↓
Dispatch Action
        ↓
Reducer
        ↓
Store Updates
        ↓
UI Re-renders

## Store :
The store is where all state is stored
## State :
State is the data inside the store
## Action :
Action tells redux that something happened.
Every action has type and payload.
## Dispatch :
Dispatch send action to redux

Flow:

dispatch()
      ↓
Reducer
      ↓
Store
## Reducer:
Reducer decides how state changes.
Reducer receives -> Current State, Action
and Returns -> New State

## Slice (Redux toolkit)
Instead of separate action and reducer, Redux toolkit groups them together 
Slice -> State -> Reducer -> Actions

## Selectors:
Read data from redux -> Selectors never change the state. Its read only

## useDispatch:
used to send actions

## useSelector:
used to access redux state

## Redux Toolkit (Recommended)

createSlice() => creates -> reducer, action, intial state -> automatically
configureStore() -> creates the store()
Done

## createAsyncThunk()
used for apis : Api -> pending -> success -> failure

## Flow:

Button click -> dispatch(addItem()) -> Action -> Reducer -> store updated -> selector reads -> component re-render

## Provider

Provider is a React component from React-Redux that makes the Redux store available to all the components in the React application.

## Slice 

A slice is a portion of the Redux store that contains the state and logic related to a specific feature of your application.

A slice is a collection of Redux state, reducers, and actions for a particular feature, created using createSlice() from Redux Toolkit.