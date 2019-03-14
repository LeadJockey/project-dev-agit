import React, { Component } from 'react'
import './index.scss'


 
 

class News extends Component {

  state = {
    newsData : [
      { 
        name:'edward.jw',
        title:'edward 세계 1위 기업으로 성장한 배경 강의',
        desc:'어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법',
        imgSrc:'http://cfile209.uf.daum.net/image/2109813E547FB6D52BED2D',
        imgInfo:'',
        shadow:true,
        link:'https://daum.net'
      },
      { 
        name:'shawn.thecool',
        title:'쫀더꿀에 신기한 개발이야기',
        desc:'어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법',
        imgSrc:'https://s2.best-wallpaper.net/wallpaper/2560x1440/1210/Space-nebula-blue-and-red-galaxies_2560x1440.jpg',
        imgInfo:'',
        shadow:true,
        link:''
      },
      { 
        name:'del.ete',
        title:'모든지 할 수 있다 나만의 노하우',
        desc:'어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법',
        imgSrc:'https://s2.best-wallpaper.net/wallpaper/1920x1080/1402/Space-planets-sky-constellations-meteors-stones-stars-fire_1920x1080.jpg',
        imgInfo:'',
        shadow:true,
        link:'https://naver.com'
      },
      { 
        name:'merlin.ho',
        title:'아 몰랑',
        desc:'어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법',
        imgSrc:'http://pds26.egloos.com/pds/201502/08/11/d0017711_54d77873087ab.jpg',
        imgInfo:'',
        shadow:false,
        link:''
      },
      { 
        name:'brad.bang',
        title:'빵 만드는 최고의 비법',
        desc:'어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법 어쩌구 저쩌구 성공비법',
        imgSrc:'https://c.wallhere.com/photos/56/22/1600x900_px_abstract_nebula_space_Space_Art_TylerCreatesWorlds-784091.jpg!d',
        imgInfo:'',
        shadow:false,
        link:''
      }
    ]
  }


  render() {
    return (
      <div className="comp_news_content">
        <div className="comp_title_box">
          <h2 className="txt_tit">News LIST</h2>
          <p className="txt_desc">뉴스 목록 입니다.</p>
        </div>
        <div className="comp_content_box">
          <NewslistContent listItem={this.state.newsData} />
        </div>
      </div>
     
    )
  }
}



class NewslistContent extends Component{

  _renderLinkSelect = (data)=>{
    return (
      <a href={data.link} className="news_cont link_cont">
        <NewsDetailContent item={data} />
      </a>
    )
  }
  _renderDivsionSelect = (data)=>{
    return(
      <div className="news_cont">
        <NewsDetailContent item={data} />
      </div>
    )
  }

  
  render(){
    console.log(this.props.listItem)   
    return(
      <ul className="list_news">
        {this.props.listItem.map((item, idx)=>{
          return (
            <li key={idx}>
              {item.link ? this._renderLinkSelect(item) : this._renderDivsionSelect(item)}
            </li>
          )
        })}  
      </ul>
      
    )
  }
}


// list 컴포넌트
class NewsDetailContent extends Component{

  render(){

    const detailData = this.props.item

    return(
      <>
        <div className="news_thumb">
          <ImageContent imageData={detailData}/>
          <div className="tag_name">
            <span className="txt_name">{detailData.name}</span>
          </div>
        </div>
        <div className="news_info">
          <strong className="tit_news">{detailData.title}</strong>
          <p className="desc_info">{detailData.desc}</p>
        </div>
      </>
    )
  }
}



// 이미지 컴포넌트
class ImageContent extends Component{
  render(){
    console.log(this.props)
    const imgData = this.props.imageData;
    return(
      
      <div className="wrap_thumb">
        <img src={imgData.imgSrc} className="img_thumb" alt={imgData.title} />
      </div>
    )
  }
} 


export default News
