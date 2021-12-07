import React, { useState } from 'react'


function ImgFrame({ src, h, author }) {
  const [show, setShow] = useState(0);

  return (
    <div className={"imgframe " + (show ? 'pop' : '')} style={{ height: h }}>

      <span className={(show ? 'show' : 'close')} onClick={() => setShow(0)}>X</span>
      {show ? 
      
      <iframe className={show ? "mainimgpop" : "mainimg"} src="https://onedrive.live.com/embed?resid=948D76FEA3A4D8D4%21914&amp;authkey=%21ADz1IVyoEywYUnQ&amp;em=2&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>


      : <img className={show ? "mainimgpop" : "mainimg"} src={src} height={h} />}
      <div className="actions">
        <button className={show ? 'hide' : ''} onClick={() => setShow(show ? 0 : 1)}>Info</button>
        <div className={show ? '' : 'hide'}>
          {author}
        </div>
        <button onClick={() => window.location = src}>Download</button>
      </div>
    </div>
  )
}

export default ImgFrame
