const FriendDetails = ({ friend }) => {
    return(
        <div className="friend-details">
            <h4>{friend.fname + " " + friend.lname}</h4>
            <p><strong>Age:</strong>{friend.age}</p>
            <p><strong>Birthday:</strong>{friend.birthday}</p>
            <p><strong>Created At:</strong>{friend.createdAt}</p>
        </div>
    )
}

export default FriendDetails;