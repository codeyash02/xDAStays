import React from 'react'
import Carousel from '../Reusable/Carousel'
import Card from '../Reusable/Cards'
import '../../styles/components/Body.css'
import Four from '../../assets/Image4.jpg'
import Five from '../../assets/Image5.jpg'
import Three from '../../assets/Image3.jpg'
import One from '../../assets/Image.jpg'
import Review from '../Reusable/Reviews'
const reviewData =[
    {
        name:"Yash",
        rating:5,
        content:"Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
        place:'xDA -Barot'
    },
    {
        name:"Rohit",
        rating:4.5,
        content:"Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
        place:'xDA -Bandla'
    },
    {
        name:"Sahil",
        rating:5,
        content:"Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
        place:'xDA -Jibhi'
    },
    {
        name:"Ashish",
        rating:5,
        content:"Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
        place:'xDA -Peo'
    }
]
function body() {
    const content = `We're now in the unique and incredible Lahaul Valley with a traditional homestay. Experience the most of Himachal's offbeat valley with us!`
    const content1=`Experience solitude, luxury, and serenity on your next holiday, with our chic mountain chalet in Burwa village, just 7 km from Manali.`
    return (
        <div className='landing_body'>
        <div className="carousel">
<Carousel/>
        </div>
            <div className='body_bottom'>
                <div className='bottom_heading'>
                    <h3>xDA Destination</h3>
                </div>
                <div className='bottom_content'>
                    <div className='bottom_content_row'>
                    <Card img={Four} heading='INTRODUCING ZOSTEL HOMES RASHIL' content={content}/>
                    <Card img={Five} heading='INTRODUCING ZOSTEL HOMES BURWA' content={content1}/>
                    </div>
                    <div className='bottom_content_row'>
                    <Card img={Three} heading='INTRODUCING ZOSTEL HOMES RASHIL' content={content}/>
                    <Card img={One} heading='INTRODUCING ZOSTEL HOMES BURWA' content={content1}/>
                    </div>
                   
                </div>
                <div className='review_section'>
                    <h3>Guest Reviews</h3>
                </div>
                <div className='reviews'>
<Review reviewList={reviewData}/>
                </div>
            </div>
        </div>
    )
}

export default body
