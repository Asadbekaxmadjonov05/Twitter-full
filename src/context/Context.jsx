import { createContext, useState } from "react";
import designstaImg from "../assets/images/designstaIcon.svg"
import cloutexhibitionImg from "../assets/images/cloutexhibitionIcon.svg"
import creativePhotoImg from "../assets/images/creativePhotoIcon.svg"
import kebabImg from "../assets/images/kebab.png"
const Context = createContext()

const TokentContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const [postList, setPostList] = useState(JSON.parse(window.localStorage.getItem("postlist"))  || [
        {
          id:1,
          name:"Designsta",
          imgUrl:designstaImg,
          email:"@inner · 25m",
          decription:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
          commentCount:"10",
          repLyCount:"1",
          likeCount:"18",
          uploadCoun:null,
          statistika:null,
          postImg:null
        },
        {
          id:2,
          name:"cloutexhibition",
          imgUrl:cloutexhibitionImg,
          email:"@RajLahoti · 22m",
          decription:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
          commentCount:null,
          repLyCount:"5",
          likeCount:"9",
          uploadCoun:null,
          statistika:null,
          postImg:null
        },
        {
          id:3,
          name:"CreativePhoto",
          imgUrl:creativePhotoImg,
          email:"@cloutexhibition · 1h",
          decription:"Обетда..... Кечиринглар",
          commentCount:"10",
          repLyCount:"1",
          likeCount:"8",
          uploadCoun:null,
          statistika:null,
          postImg:kebabImg
        },
      ])
    window.localStorage.setItem("token", JSON.stringify(token))
    window.localStorage.setItem("postlist", JSON.stringify(postList))
   return( <Context.Provider value={{token, setToken, postList, setPostList}}>{children}</Context.Provider>)
}

export {Context, TokentContext}