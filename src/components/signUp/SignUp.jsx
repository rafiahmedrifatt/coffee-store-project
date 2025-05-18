import React, { use } from "react";
import { AuthContext } from "../../provider/AuthContext";

const SignUp = () => {
    const { createUser } = use(AuthContext);
    console.log(createUser);
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restUser } = Object.fromEntries(formData);

        createUser(email, password).then((data) => {
            console.log(data);
            const userForDatabase = { email, ...restUser }
            fetch("http://localhost:3000/user", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userForDatabase)
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        });
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSignup} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                    />
                    <label className="label">Adress</label>
                    <input
                        type="text"
                        name="adress"
                        className="input"
                        placeholder="Adress"
                    />
                    <label className="label">Number</label>
                    <input
                        type="text"
                        name="number"
                        className="input"
                        placeholder="Number"
                    />
                    <label className="label">PhotoURL</label>
                    <input
                        type="text"
                        name="photo"
                        className="input"
                        placeholder="Photo"
                    />
                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Password"
                    />
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
