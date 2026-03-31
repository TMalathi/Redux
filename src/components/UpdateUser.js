import react, {useState} from "react";

import { useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";

function UpdateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(updateUser({ name, email }));
        setName("");
        setEmail("");
    }

    return (
        <div>
            <h2>Update User</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => handleSubmit()}>Update User</button>
        </div>
    );
}

export default UpdateUser;