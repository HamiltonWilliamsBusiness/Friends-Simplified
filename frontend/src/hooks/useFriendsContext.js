import { FriendsContext } from "../context/FriendContext"
import { useContext } from 'react'

export const useFriendsContext = () => {
    const context = useContext(FriendsContext)

    if (!context) {
        throw Error('useFriendsContext must be used inside an FriendsContextProvider')
    }

    return context
}