
//!Revan
import React from 'react'
import Styles from '../Arrival/Arrival.module.css'
import png from '../../Images/Arrival/img.png'
import png2 from '../../Images/Arrival/img2.jpg'
import png3 from '../../Images/Arrival/img3.png'
import png4 from '../../Images/Arrival/img4.png'

 function Arrival() {
  return (
         <div className={Styles.container}>
            <div className={Styles.item14}>
      <div className={Styles.itemLarge}>
        <img className={Styles.itemLargeImg} src={png} alt="PlayStation 5" />
        <div className={Styles.text}>
          <h2 className={Styles.textH2}>PlayStation 5</h2>
          <p className={Styles.textP}>Black and White version of the PS5 <br></br> coming out on sale.</p>
          <h3 className={Styles.textH3}>Shop Now</h3>
        </div>
      </div>
      <div className={Styles.item24}>
      <div className={Styles.item2}>
        <img className={Styles.item2Img} src={png2} alt="Women's Collections" />
        <div className={Styles.text2}>
          <h2 className={Styles.text2H2}>Women's Collections</h2>
          <p className={Styles.test2P}>Featured women collections that <br></br> give you another vibe.</p>
          <h3 className={Styles.text2H3}>Shop Now</h3>
        </div>
      </div>
      <div className={Styles.item34}>
       <div className={Styles.item3}> 
        <img className={Styles.item3Img} src={png3} alt="Speakers" />
        <div className={Styles.text3}>
          <h2 className={Styles.text3H2}>Speakers</h2>
          <p className={Styles.text3P}>Amazon wireless speakers</p>
          <h3 className={Styles.text3H3}>Shop Now</h3>
        </div>
      </div>

      <div className={Styles.item4}>
        <img className={Styles.item4Img} src={png4} alt="Perfume" />
        <div className={Styles.text4}>
          <h2 className={Styles.text4H2}>Perfume</h2>
          <p className={Styles.text4P}>GUCCI INTENSE OUD EDP</p>
          <h3 className={Styles.text4H3}>Shop Now</h3>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

// import styles from "../Arrival/Arrival.module.css"
// import png  from "../../Images/Arrival/img.png"
// //import png2  from "../../Images/Arrival/img2.png"
// import png3  from "../../Images/Arrival/img3.png"
// import png4  from "../../Images/Arrival/img4.png"


// function  Arrival() {
//   return (
//     <div className={styles.Arrival}> 
//     <div className={styles.Img}>
//       <img src={png} alt='img' id='image' className={styles.Img1} /> 
//       </div>
//       <div className={styles.Text}>
//       <h1 className={styles.ImgH1}>PlayStation 5</h1>
//       <p className={styles.Imgp}>Black and White version of the PS5 coming out on sale.</p>
//       <p className={styles.ShopP}>Shop Now</p>
//       </div>
//     </div>
//   )
// } 


export default Arrival;