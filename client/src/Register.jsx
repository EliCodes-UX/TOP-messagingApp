export default function Register() {
  return (
    <>
      <div className='bg-blue-100 h-screen'>
        <form className='w-64 mx-auto'>
          <input
            type='text'
            placeholder='username'
            className='block w-full rounded-md p-2 mb-2'
          ></input>
          <input
            type='password'
            placeholder='password'
            className='block w-full rounded-md p-2 mb-2'
          ></input>
          <button className='bg-blue-500 text-white block w-full rounded-md'>
            Register
          </button>
        </form>
      </div>
    </>
  );
}
