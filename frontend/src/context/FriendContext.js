import { createContext, useReducer } from 'react'

export const FriendsContext = createContext()

export const friendsReducer = (state, action) => {
    switch(action.type){
        case 'SET_FRIENDS':
            return {
                friends: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                friends: [action.payload, ...state.friends]
            }
        default:
            return state
    }
}

export const FriendsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(friendsReducer, { friends: null})

    return (
        <FriendsContext.Provider value={{...state, dispatch}}>
            { children }
        </FriendsContext.Provider>
    )
}