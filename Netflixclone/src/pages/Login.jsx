import { React, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import styled from 'styled-components';
import Header from '../components/Header';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [showpassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })

    const handleLogIn = async () => {
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        }
        catch {
            console.log(err)
        }
    };
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    })

    return (
        <Container>
            <BackgroundImage />
            <div className='content'>
                <Header />
                <div className="form-container flex-column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <h3>Login</h3>
                    </div>
                    <div className="container flex column">
                        <input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={(e) => setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                        })} />
                        {(<input type="password" placeholder="password" name="password"
                            value={formValues.password}
                            onChange={(e) => {
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }} />)
                        }

                        {<button onClick={() => setShowPassword(true)}>Log In</button>}
                    </div>
                    <button onClick={handleLogIn}>Sign Up</button>

                </div>
            </div>

        
    </Container >
  )
}

export default Login

const Container = styled.div`
position: relative;
.content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .body {
        gap: 1rem;
    }
    .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
    }
    h1 {
        padding: 0 2rem;        
    }

}

.form {
    display: grid;
    grid-template-columns: ${({ showpassowrd }) => showpassowrd ? " 1fr 1fr" : "2fr 1fr"};
    width: 60%;

    input {
        color: black;
        padding: 1.5rem;
        border: 1px solid black;
        font-size: 1.2rem;
        &:focus {
            outline: none;
        }
        
    }
    
}

button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem; 
}



`