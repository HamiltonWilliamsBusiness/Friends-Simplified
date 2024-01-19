import { useState } from "react"
import { useFriendsContext } from '../hooks/useFriendsContext';

const FriendForm = () => {
    const { dispatch } = useFriendsContext()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [birthday, setBirthday] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const friend = {fname, lname, age, birthday}

        const response = await fetch('/api/friends', {
            method: 'POST',
            body: JSON.stringify(friend),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null)
            setFname('')
            setLname('')
            setAge('')
            setBirthday('')
            setEmptyFields([])
            console.log('new friend added', json)
            dispatch({type: 'CREATE_FRIEND', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Friend</h3>

            <label htmlFor="">First Name:</label>
            <input 
                type="text" 
                onChange={(e) => setFname(e.target.value)}
                value={fname}
            />

            <label htmlFor="">last Name:</label>
            <input 
                type="text" 
                onChange={(e) => setLname(e.target.value)}
                value={lname}
            />

            <label htmlFor="">Age:</label>
            <input 
                type="number" 
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <label htmlFor="">Birthday:</label>
            <input 
                type="text" 
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
            />

            <button>Add Friend</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default FriendForm