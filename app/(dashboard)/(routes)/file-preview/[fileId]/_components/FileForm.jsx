import React, { useState } from 'react';
import axios from 'axios';
import { Copy } from 'lucide-react';
import Alert from '../../../../_components/Alert';
import Link from 'next/link';
const FileForm = ({ file, onPasswordSave }) => {
  const [password, setPassword] = useState('');
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [message, setMessage] = useState({ show: false });
  const [email, setEmail] = useState('');

  const sendEmail = async () => {
    try {
      const response = await axios.post('/api/send-email', { email });
      console.log(response.data);
      setMessage({
        status: 'Success',
        msg: 'Email sent successfully!',
        show: true,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({
        status: 'Error',
        msg: 'Failed to send email. Please try again.',
        show: true,
      });
    }
  };

  const onClickCopy = () => {
    navigator.clipboard.writeText(file?.shortUrl);
    setMessage({
      status: 'Success',
      msg: 'Url Copied!',
      show: true,
    });
    setTimeout(() => {
      setMessage({
        show: false,
      });
    }, 2000);
  };

  return file && (
    <div className='w-full flex flex-col items-center border-violet-200 rounded-md border gap-5 py-5 px-2'>
      <p>Share Url to anyone</p>
      {message.show && <div className='absolute top-0 right-0'>
        <Alert message={message} />
      </div>}

      <div className="w-full mb-6">
        <p className="mb-1 text-base font-medium text-gray-700">Short Url</p>
        <div className='relative '>
          <input type="text"
            id="input-group-1"
            className="w-full bg-gray-50 outline-none border border-gray-200 text-gray-900 text-base rounded-lg 
            block px-3 py-2" readOnly value={file?.shortUrl} />
          <Copy className='text-gray-400 hover:text-gray-600 active:text-gray-400 cursor-pointer absolute right-2 top-2'
            onClick={onClickCopy} />
        </div>
      </div>

      <div className="w-full relative mb-6">
        <div className='flex gap-2 mb-1 items-center'>
          <input type="checkbox" onChange={(e) => { setIsPasswordEnabled(e.target.checked) }} />
          <p className='text-base font-medium text-gray-700'>Enable Password ?</p>
        </div>
        {isPasswordEnabled && <div className='flex gap-2'>
          <input
            type="password"
            id="input-group-1"
            className="w-full bg-gray-50 outline-violet-500 border border-violet-200 text-gray-900 text-base rounded-lg 
            block px-3 py-2"
            placeholder='Password'
            onChange={(e) => { setPassword(e.target.value) }} />
          <button
            disabled={password?.length < 3}
            className='bg-violet-500 px-5 py-1 rounded-lg disabled:bg-gray-300 text-white active:bg-violet-600'
            onClick={() => { onPasswordSave(password) }}>Save
          </button>
        </div>}
      </div>

     
      <Link href="/">
      <button
        className='w-full mt-5 bg-violet-500 px-5 py-1 rounded-lg text-white active:bg-blue-600'
      >
        Done
      </button>
    </Link>
        </div>
      
  );
};

export default FileForm;
