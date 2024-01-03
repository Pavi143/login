import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen  bg-blue-500 '>
      <h2 className='text-2xl'>Welcome to bla bla bla!!!!!</h2>
      <h3 className='text-lg mt-4'>Already Registered User?</h3>
      <h4 className='text-base'>LOGIN</h4>
      <form className='flex flex-col items-center justify-center w-64 mt-4'>
        <div className='w-full flex justify-center'>
          <label className='block mb-2 py-2'>Username  </label>
          <input className='w-full rounded border-gray-400 border py-2 px-4' type='name' placeholder='Enter your name' name='name' required/>
        </div>
        <div className='w-full mt-2'>
          <label className='block mb-2 py-2'>Password  </label>
          <input className='w-full rounded border-gray-400 border py-2 px-4' type='password' placeholder='Enter your password' name='password' required/>
        </div>
        <div className='w-full mt-4'>
          <button className='w-full rounded bg-blue-500 text-white py-1 px-2 hover:bg-blue-600' type='submit' placeholder='submit' name='btn'>Submit</button>
        </div>
      </form>
      <h3 className='text-lg mt-4'>New User?</h3>
      <button className='rounded bg-gray-300 py-1 px-2 hover:bg-gray-400'>Register</button>
    </div>
  );
};

export default App;
