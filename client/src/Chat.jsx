// import sendArrow from './assets/send-arrow.svg';
import { useContext, useEffect, useState } from 'react';
import Avatar from './Avatar';
import Logo from './Logo';
import { UserContext } from './UserContext';

export default function Chat() {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [seletedUserId, setSeletedUserId] = useState(null);
  const { username, id } = useContext(UserContext);
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:9040');
    setWs(ws);
    ws.addEventListener('message', handleMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    setOnlinePeople(people);
    console.log(people);
  }
  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    if ('online' in messageData) {
      showOnlinePeople(messageData.online);
    }
    console.log(messageData);
  }

  const onlinePeopleExclOurUser = { ...onlinePeople };
  delete onlinePeopleExclOurUser[id];

  return (
    <div className='flex h-screen'>
      <div className='bg-white w-1/3 pl-4 pt-4'>
        <Logo />

        {Object.keys(onlinePeopleExclOurUser).map(userId => (
          <div
            key={userId}
            onClick={() => setSeletedUserId(userId)}
            className={
              'border-b border-gray-100  flex items-center gap-2 cursor-pointer ' +
              (userId === seletedUserId ? 'bg-blue-200' : '')
            }
          >
            {userId === seletedUserId && (
              <div className='w-1 bg-blue-500 h-12 rounded-r-md'></div>
            )}
            <div className='flex gap-2 py-2 pl-4 items-center'>
              <Avatar username={onlinePeople[userId]} userId={userId} />
              <span className='text-gray-800'>{onlinePeople[userId]}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-blue-300 w-2/3 flex flex-col'>
        <div className='flex-grow'>
          {!seletedUserId && (
            <div className='flex h-full items-center justify-center'>
              <div className='text-gray-800'>&larr; select from sidebar</div>
            </div>
          )}
        </div>
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
