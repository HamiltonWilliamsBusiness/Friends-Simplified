import { createContext, useReducer } from 'react'

export const FriendsContext = createContext()

export const friendsReducer = (state, action) => {
    switch(action.type){
        case 'SET_FRIENDS':
            return {
                friends: action.payload
            }
        case 'CREATE_FRIEND':
            return {
                friends: [action.payload, ...state.friends]
            }
        case 'DELETE_FRIEND':
            return {
                friends: state.friends.filter((f) => f._id !== action.payload._id)
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