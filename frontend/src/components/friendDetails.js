import { useFriendsContext } from "../hooks/useFriendsContext"

const FriendDetails = ({ friend }) => {
    const { dispatch } = useFriendsContext()

    const handleClick = async () => {
        const response = await fetch('/api/friends/' + friend._id, {method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
        dispatch({type: 'DELETE_FRIEND', payload: json})
    }
    }

    return(
        <div className="friend-details">
            <h4>{friend.fname + " " + friend.lname}</h4>
            <p><strong>Age:</strong>{friend.age}</p>
            <p><strong>Birthday:</strong>{friend.birthday}</p>
            <p><strong>Created At:</strong>{friend.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default FriendDetails;