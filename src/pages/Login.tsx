import { Card } from 'antd'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginType } from '../utils/types/user';
import { AppDispatch } from '../store/store';
import { useAppDispatch } from '../hooks/reduxHooks';
import { loginService } from '../store/services/user';
import { login } from '../store/slices/authSlice';



type FieldErrorsType = {
  emailError: boolean;
  passwordError: boolean;
};

const Login = () => {
  const defaultValues: LoginType = { email: 'hello', password: 'hello' }
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const [formData, setFormData] = useState<LoginType>(defaultValues)
  const changeFormData = (value: string, field: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  }
  const [defaultFieldErrors, setDefaultFieldErrors] = useState<FieldErrorsType>({
    emailError: false,
    passwordError: false,
  });

  const validateForm = () => {
    let valid = true;
    if (formData.email.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, emailError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, emailError: false }));
    }

    if (formData.password.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, passwordError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, passwordError: false }));
    }
    return valid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        const response = await loginService({
          email: formData.email,
          password: formData.password,
        });
        // Handle a successful Login (e.g., show a success message or redirect)
        if (response) {
          dispatch(login({ user: response.user, token: response.token }));
          navigate('/')
        }
        console.log('User signed up:', response);
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };


  return (
    <div className='w-full  min-h-[93vh] bg-slate-200 flex justify-center items-start'>

      <Card className="flex flex-col bg-cuBgWhite my-10 w-[90%] md:w-[400px]">
        <h1 className='text-lg font-bold'>Login</h1>
        <div className='mt-4'>

          <label>Email</label>
          <input className='w-full p-2 mt-1 focus:outline-none' value={formData.email} onChange={(e) => { changeFormData(e.target.value, 'email') }} type='email' />
          {defaultFieldErrors.emailError && <span className='font-light text-xs text-red-600'>Email required</span>}
        </div>

        <div>
          <label >Password</label>
          <input className='w-full p-2 mt-1 focus:outline-none' value={formData.password} onChange={(e) => { changeFormData(e.target.value, 'password') }} type='password' />
          {defaultFieldErrors.passwordError && <span className='font-light text-xs text-red-600'>Password required</span>}
        </div>

        <div className="flex justify-between items-center">
          <button className='bg-cuGreen px-4 py-2 my-4 hover:bg-cuTeal hover:text-cuWhiteSmoke ' onClick={handleSignup}>Login</button>
          <NavLink className='mx-1 text-cuTeal' to={'/'}>Forget Password?</NavLink>
        </div>
        <div className='flex justify-center'>
          <p>Not a Member?</p>
          <NavLink className='mx-1 text-cuTeal' to={'/Signup'}>Signup</NavLink>
        </div>
      </Card>
    </div>
  )
}

export default Login