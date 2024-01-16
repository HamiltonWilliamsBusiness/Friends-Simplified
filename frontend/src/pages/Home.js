import { useEffect } from 'react'
import { useFriendsContext } from '../hooks/useFriendsContext';

// components
import FriendDetails from '../components/friendDetails'
import FriendForm from '../components/FriendForm';

const Home = () => {
    const { friends, dispatch } = useFriendsContext()

    useEffect(() => {
        const fetchFriends = async () => {
            const response = await fetch('/api/friends')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_FRIENDS', payload: json})
            }
        }

        fetchFriends()
    }, [dispatch])

    return(
        <div className='home'>
            <div className="friends">
                {friends && friends.map((friend) => (
                    <FriendDetails key={friend._id} friend={friend}/>
                ))}
            </div>
            <FriendForm/>
        </div>
    )
}

export default Home;