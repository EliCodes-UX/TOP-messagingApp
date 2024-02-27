// import sendArrow from './assets/send-arrow.svg';

export default function Chat() {
  return (
    <div className='flex h-screen'>
      <div className='bg-white w-1/3'>contacts</div>
      <div className='bg-blue-300 w-2/3 flex flex-col'>
        <div className='flex-grow'>messages with selected person</div>
        <div className='flex gap-2 p-2'>
          <input
            type='text'
            className='bg-white border p-2 rounded-sm flex-grow'
            placeholder='type your message here'
          />
          <button className='bg-blue-500 p-2 rounded-sm text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
