import React, { useState } from 'react'
import comment from '../../assets/comment.png';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import dots from '../../assets/three-dots.svg';
import hand from '../../assets/hand.png';
import cmt from '../../assets/cmt.png';
import sad from '../../assets/sad.png';
import RegisterModal from "../../components/RegisterModal";
import LoginModal from '../../components/LoginModal';

function Home() {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const handleAuthModal = () =>{
    setRegisterModal(true);
  }
  return (
    <div className='flex justify-center homePage bg-[--body-bg] w-full'>
      <div className='homeContainer mt-8 mb-8'>
        <h2 className='text-[--label-color] font-medium text-[28px]'>Hello Jane</h2>
        <p className='text-base font-normal text-[--para-color]'>How are you doing today? Would you like to share something with the community 🤗</p>
        {/* ======= New Post ========== */}
        <div onClick={()=>handleAuthModal()} className='bg-[--card-bg] rounded-lg p-4 newPost mt-4'>
          <h4 className='text-[--label-color] font-medium text-lg mb-3'>Create Post</h4>
          <div className=' relative'>
            <textarea className='bg-[--textarea-bg] w-full h-[78px] rounded-lg text-white ps-20 pt-[30px]' value={''} placeholder='How are you feeling today?' />
            <div className='w-[48px] h-[48px] rounded-3xl bg-[--card-bg] flex justify-center items-center absolute left-3 top-4'>
              <img width={18} height={18} src={comment} alt='comment' />
            </div>
            <div className='flex justify-end'>
              <button className='bg-[--button-bg] h-11 text-white rounded mt-3 cursor-pointer text-base font-medium px-10'>Post</button>
            </div>
          </div>
        </div>
        {/* ======= Comments ========== */}

        <div onClick={()=>handleAuthModal()} className='bg-[--card-bg] rounded-lg p-4 comment mt-4'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row items-start gap-4'>
              <div><img width={44} height={44} src={pic1} alt='pic' /></div>
              <div>
                <div className='text-[--label-color] font-medium text-base'>Theresa Webb</div>
                <div className='text-[--para-color] font-normal text-sm'>5mins ago</div>
              </div>
            </div>
            <div className='p-4 cursor-pointer'><img width={16} height={3} src={dots} alt='dots' /></div>
          </div>
          <div className='bg-[--textarea-bg] p-4 rounded-lg mt-4 flex gap-3 justify-start items-start'>
            <div className=' min-w-[48px] w-[48px] h-[48px] rounded-3xl bg-[--card-bg] flex justify-center items-center'>
              <img width={18} height={18} src={hand} alt='hand' />
            </div>
            <div className='text-[--para-color] font-normal text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
          </div>
          <div className='cursor-pointer flex justify-start items-center mt-3 gap-2'>
            <img width={20} height={20} src={cmt} alt='cmt' />
            <span className='text-[--para-color] font-normal text-sm'>24 comments</span>
          </div>
        </div>

        <div onClick={()=>handleAuthModal()} className='bg-[--card-bg] rounded-lg p-4 comment mt-4'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row items-start gap-4'>
              <div><img width={44} height={44} src={pic2} alt='pic2' /></div>
              <div>
                <div className='text-[--label-color] font-medium text-base'>Marvin McKinney</div>
                <div className='text-[--para-color] font-normal text-sm'>8mins ago</div>
              </div>
            </div>
            <div className='p-4 cursor-pointer'><img width={16} height={3} src={dots} alt='dots' /></div>
          </div>
          <div className='bg-[--textarea-bg] p-4 rounded-lg mt-4 flex gap-3 justify-start items-start'>
            <div className=' min-w-[48px] w-[48px] h-[48px] rounded-3xl bg-[--card-bg] flex justify-center items-center'>
              <img width={18} height={18} src={sad} alt='sad' />
            </div>
            <div className='text-[--para-color] font-normal text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
          </div>
          <div className='cursor-pointer flex justify-start items-center mt-3 gap-2'>
            <img width={20} height={20} src={cmt} alt='cmt' />
            <span className='text-[--para-color] font-normal text-sm'>20 comments</span>
          </div>
        </div>
      </div>
     
        <RegisterModal registerModal={registerModal} setLoginModal={setLoginModal} setRegisterModal={setRegisterModal}/>
      
    
        <LoginModal loginModal={loginModal} setRegisterModal={setRegisterModal} setLoginModal={setLoginModal}/>
      
    </div>
  )
}

export default Home
