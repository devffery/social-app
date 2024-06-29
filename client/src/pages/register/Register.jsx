import "./register.scss"
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="right"> 
					<h1>Dev Social.</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Mi eget mauris pharetra et ultrices. 
					Sagittis vitae et leo duis ut.</p>
					<span>Do you have an account?</span>
					<Link to="/login">
					<button>Login</button>
					</Link>
				</div>
				<div className="left">
					<h1>Register</h1>
					<form>
						<input type='text' placeholder='Username'/>
						<input type='text' placeholder='Fullname'/>
						<input type='email' placeholder='Email'/>
						<input type='password' placeholder='Password'/>
						<input type='password' placeholder='Confirm Password'/>
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
		)
}

export default Register;

