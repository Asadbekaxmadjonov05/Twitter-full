import React, { useContext } from 'react'
import { Dots, CommentIcon, ReplyIcon, LikeIcon, ShareIcon, StatisticIcon } from './Icons'
import { Context } from '../context/Context'

function PostItem({ item }) {
    const { postList, setPostList } = useContext(Context)

    function handleCommentBtnClick(value) {
        value.isCommented = !value.isCommented
        item.commentCount = value.isCommented ? ++value.commentCount : --value.commentCount
        if (value.commentCount == 0){value.commentCount = null }
        setPostList([...postList])
    }
    function handleReplyBtnClick(value) {
        value.isReplyed = !value.isReplyed
        item.replyCount = value.isReplyed ? ++value.replyCount : --value.replyCount
        if (value.replyCount == 0){value.replyCount = null }
        setPostList([...postList])
    }

    function handleLikeBtnClick(value) {
        value.isLike = !value.isLike
        item.likeCount = value.isLike ? ++value.likeCount : --value.likeCount
        if (value.likeCount == 0){value.likeCount = null }
        setPostList([...postList])
    }
    function handleShereBtnClick(value) {
        value.isShare = !value.isShare
        item.uploadCount = value.isShare ? ++value.uploadCount : --value.uploadCount
        if (value.uploadCount == 0){value.uploadCount = null }
        setPostList([...postList])
    }
    function handleStatistikBtnClick(value) {
        value.isStatistic = !value.isStatistic
        item.uploadCount = value.isStatistic ? ++value.uploadCount : --value.uploadCount
        if (value.uploadCount == 0){value.uploadCount = null }
        setPostList([...postList])
    }





    return (
        <li className='flex items-start relative space-x-[15px] pt-[10px] pb-[21px] px-[25px] border-b-[1px] border-slate-400'>
            <img src={item.imgUrl} alt="Avatar Icon" width={60} height={60} />
            <div className=''>
                <div>
                    <div className='flex space-x-[5px]'>
                        <strong>{item.name}</strong>
                        <span>{item.email}</span>
                    </div>
                    <p>{item.description}</p>
                </div>
                {item.postImg ? <img className='mt-[15px]' src={item.postImg} alt="Post img" width={679} height={453} /> : ""}
                <div className='flex justify-between my-[22px] w-full'>
                    <button onClick={() => handleCommentBtnClick(item)} className={`${item.isCommented ? "text-blue-600" : "text-[#606060]"} text-[#536471] flex items-center gap-[10px]`}>
                        <CommentIcon />
                        <span>{item.commentCount}</span>
                    </button>
                    <button onClick={() => handleReplyBtnClick(item)} className={`${item.isReplyed ? "text-green-600" : "text-[#606060]"} text-[#536471] flex items-center gap-[10px]`}>
                        <ReplyIcon />
                        <span>{item.replyCount}</span>
                    </button>
                    <button onClick={() => handleLikeBtnClick(item)} className={`${item.isLike ? "text-red-600" : "text-[#606060]"} text-[#536471] flex items-center gap-[10px]`}>
                        <LikeIcon />
                        <span>{item.likeCount}</span>
                    </button>
                    <button onClick={() => handleShereBtnClick(item)}  className={`${item.isShare ? "text-teal-950" : "text-[#606060]"} text-[#536471] flex items-center gap-[10px]`}>
                        <ShareIcon />
                        <span>{item.shareCount}</span>
                    </button>
                    <button onClick={() => handleStatistikBtnClick(item)} className={`${item.isStatistic ? "text-yellow-700" : "text-[#606060]"} text-[#536471] flex items-center gap-[10px]`}>
                        <StatisticIcon />
                        <span>{item.statisticCount}</span>
                    </button>
                </div>
            </div>
            <button className='absolute top-[21px] right-[25px]'>
                <Dots />
            </button>
        </li>
    )
}

export default PostItem
