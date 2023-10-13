import { Card } from 'antd'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SignupType } from '../utils/types/user';
import { signupService } from '../store/services/user';
import { AppDispatch } from '../store/store';
import { useAppDispatch } from '../hooks/reduxHooks';
import { login } from '../store/slices/authSlice';



type FieldErrorsType = {
  nameError: boolean;
  emailError: boolean;
  phoneNumberError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
};

const Signup = () => {
  const defaultValues: SignupType = { name: 'hello', email: 'hello', phone_number: 'hello', password: 'hello', confirmPassword: 'hello' }
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const [formData, setFormData] = useState<SignupType>(defaultValues)
  const changeFormData = (value: string, field: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  }
  const [passwordSame, setPasswordSame] = useState<boolean>(false)

  const [defaultFieldErrors, setDefaultFieldErrors] = useState<FieldErrorsType>({
    nameError: false,
    emailError: false,
    phoneNumberError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const validateForm = () => {
    let valid = true;
    if (formData.name.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, nameError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, nameError: false }));
    }
    if (formData.email.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, emailError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, emailError: false }));
    }

    if (formData.phone_number.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, phoneNumberError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, phoneNumberError: false }));
    }

    if (formData.password.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, passwordError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, passwordError: false }));
    }

    if (formData.confirmPassword?.trim() === '') {
      setDefaultFieldErrors((prevState) => ({ ...prevState, confirmPasswordError: true }));
      valid = false;
    } else {
      setDefaultFieldErrors((prevState) => ({ ...prevState, confirmPasswordError: false }));
      if (formData.password === formData.confirmPassword) {
        setPasswordSame(false)
      }
      else {
        setPasswordSame(true)
      }
    }
    return valid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        const response = await signupService({
          name: formData.name,
          email: formData.email,
          phone_number: formData.phone_number,
          password: formData.password,
        });
        // Handle a successful signup (e.g., show a success message or redirect)
        if (response) {
          dispatch(login({ user: response.user, token: response.token }));
          navigate('/')
        }
        console.log('User signed up:', response);
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };


  return (
    <div className='w-full  min-h-[93vh] bg-slate-200 flex justify-center items-start'>

      <Card className="flex flex-col bg-cuBgWhite my-10 w-[90%] md:w-[400px]">
        <h1 className='text-lg font-bold'>Signup</h1>
        <div className='mt-4'>
          <label >Name</label>
          <input className='w-full p-2 mt-1 focus:outline-none' value={formData.name} onChange={(e) => { changeFormData(e.target.value, 'name') }} />
          {defaultFieldErrors.nameError && <span className='font-light text-xs text-red-600'>Name required</span>}
        </div>
        <div >
          <label>Email</label>
          <input className='w-full p-2 mt-1 focus:outline-none' value={formData.email} onChange={(e) => { changeFormData(e.target.value, 'email') }} type='email' />
          {defaultFieldErrors.emailError && <span className='font-light text-xs text-red-600'>Email required</span>}
        </div>
        <div>
          <label>Mobile</label>
          <div className="flex items-center">
            <p className='p-2'>+91</p>
            <input className='w-full p-2 mt-1 focus:outline-none' value={formData.phone_number} onChange={(e) => { changeFormData(e.target.value, 'phone_number') }} />
          </div>
          {defaultFieldErrors.phoneNumberError && <span className='font-light text-xs text-red-600'>Mobile required</span>}
        </div>
        <div>
          <label >Password</label>
          <input className='w-full p-2 mt-1 focus:outline-none' value={formData.password} onChange={(e) => { changeFormData(e.target.value, 'password') }} type='password' />
          {defaultFieldErrors.passwordError && <span className='font-light text-xs text-red-600'>Password required</span>}
        </div>
        <div>
          <label >Password</label>
          <input className='w-full p-2 mt-1 focus:outline-none' value={formData.confirmPassword} onChange={(e) => { changeFormData(e.target.value, 'confirmPassword') }} type='password' />
          {defaultFieldErrors.confirmPasswordError && <span className='font-light text-xs text-red-600'>Confirm Password required</span>}
          {passwordSame && <span className='font-light text-xs text-red-600'>Confirm password should be same as password</span>}

        </div>
        <div className="flex justify-between items-center">
          <button className='bg-cuGreen px-4 py-2 my-4 hover:bg-cuTeal hover:text-cuWhiteSmoke ' onClick={handleSignup}>Login</button>
        </div>
        <div className='flex justify-center'>
          <p>Already a Member?</p>
          <NavLink className='mx-1 text-cuTeal' to={'/login'}>Login</NavLink>
        </div>
      </Card>
    </div>
  )
}

export default Signup