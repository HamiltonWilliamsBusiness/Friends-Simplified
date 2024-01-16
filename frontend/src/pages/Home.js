import {useEffect, useState } from 'react'

// components
import FriendDetails from '../components/friendDetails'
import FriendForm from '../components/FriendForm';

const Home = () => {
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        const fetchFriends = async () => {
            const response = await fetch('/api/friends')
            const json = await response.json()

            if (response.ok){
                setFriends(json);
            }
        }

        fetchFriends()
    }, [])

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