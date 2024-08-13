import React, {useContext, useState } from 'react';
import { ModeIcon, SaveImgIcon, StatsIcon, GiftIcon, SimailIcon, CalendarIcon } from "../../components/Icons";
import Avatar from "../../assets/images/avatar.png";
import Button from '../../components/Button';
import PostItem from '../../components/PostItem';
import { Context } from '../../context/Context';

function Home() {
  const {postList, setPostList} = useContext(Context);
  const token = JSON.parse(localStorage.getItem("token"));
  const [postValue, setPostValue] = useState(""); 
  const [postImg, setPostImg] = useState("");

  function handleSubmitPost(e) {
    e.preventDefault();
    const data = {
      id: postList?.length ? postList[postList.length - 1].id + 1 : 1,
      name: token?.login,
      imgUrl: Avatar,
      email: "@inner · 25m",
      desription: e.target.postValue.value,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uploadCount: null,
      statistika: null,
      postImg: postImg
    };
    setPostList([data, ...postList]);
    e.target.reset()
  }

  return (
    <div className='w-[80%]'>
      <div className='w-[70%] border-r-[1px] border-slate-400 h-[100vh] overflow-auto'>
        <div className='bg-white sticky z-40 top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Home</h2>
          <button><ModeIcon /></button>
        </div>
        <form onSubmit={handleSubmitPost} autoComplete='off' className='pb-[46px] relative pl-[22px] items-start flex space-x-[15px] border-b-[1px] w-full border-slate-400'>
          <img src={Avatar} alt="Avatar icon" width={60} height={60} />
          <div className='flex flex-col w-full mt-[11px] space-y-[10px]'>
            <input
              onChange={(e) => setPostValue(e.target.value)}
              className='font-semibold mb-[53px] text-[22px] placeholder:text-[#828282] outline-none'
              type="text"
              placeholder='What’s happening'
              name='postValue'
            />
            <div className='flex space-x-[22px]'>
              <label htmlFor="file-upload" className='cursor-pointer'>
                <SaveImgIcon />
              </label>
              <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} id="file-upload" type="file" className='hidden' />
              <label htmlFor="gift-upload" className='cursor-pointer'>
                <GiftIcon />
              </label>
              <input id="gift-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <StatsIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <SimailIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <CalendarIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
            </div>
          </div>
          <Button
            width={108}
            extraStyle={`duration-300 absolute bottom-[5px] right-[18px] ${postValue ? "" : "opacity-[40%]"}`}
            title={"Tweet"}
            type={"submit"}
          />
        </form>
        <ul>{postList?.length > 0 && postList?.map(item => <PostItem key={item.id} item={item} />)}</ul>
      </div>
      <div className='w-[30%]'>
      </div>
    </div>
  );
}

export default Home;
