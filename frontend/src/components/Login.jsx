import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setMessage('Login successful');
                navigate("/dashboard");
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Server error');
        }
    };

    return (
        <div className='w-full h-[100vh] bg-slate-200 flex flex-col justify-center items-center gap-3'>
            <form className='flex flex-col justify-center items-center w-[50%] border-2 border-black gap-3 py-10' onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' className='w-[50%] p-3' onChange={handleChange} value={formData.email} required />
                <input type="password" name="password" placeholder='Password' className='w-[50%] p-3' onChange={handleChange} value={formData.password} required />
                <button type='submit' className='bg-green-400 p-3'>Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
