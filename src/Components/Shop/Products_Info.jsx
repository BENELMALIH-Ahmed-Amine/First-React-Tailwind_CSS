import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Navbar from '../nav/Navbar';
import { useParams } from 'react-router-dom';

<Navbar />
const Products_Info = () => {
    const {id} = useParams()

    const houses = [
        {
            id: 1,
            img: "../../assets/images/houses/image copy 1.png",
            flor: "R",
            space: 180 + 'm²',
            rooms: 4,
            price: "700.000 MAD",
        },
        {
            id: 2,
            img: "../../assets/images/houses/image copy 2.png",
            flor: "1",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 3,
            img: "../../assets/images/houses/image copy 3.png",
            flor: "1",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 4,
            img: "../../assets/images/houses/image copy 4.png",
            flor: "1",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 5,
            img: "../../assets/images/houses/image copy 5.png",
            flor: "1",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 6,
            img: "../../assets/images/houses/image copy 6.png",
            flor: "2",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 7,
            img: "../../assets/images/houses/image copy 7.png",
            flor: "2",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 8,
            img: "../../assets/images/houses/image copy 8.png",
            flor: "2",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 9,
            img: "../../assets/images/houses/image copy 9.png",
            flor: "2",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 10,
            img: "../../assets/images/houses/image copy 10.png",
            flor: "3",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 11,
            img: "../../assets/images/houses/image copy 11.png",
            flor: "3",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 12,
            img: "../../assets/images/houses/image copy 12.png",
            flor: "3",
            space: 65 + 'm²',
            rooms: 2,
            price: "250.000 MAD",
        },
        {
            id: 13,
            img: "../../assets/images/houses/image copy 13.png",
            flor: "4",
            space: 85 + 'm²',
            rooms: 3,
            price: "320.000 MAD",
        },
        {
            id: 14,
            img: "../../assets/images/houses/image copy 14.png",
            flor: "4",
            space: 85 + 'm²',
            rooms: 3,
            price: "320.000 MAD",
        },
        {
            id: 15,
            img: "../../assets/images/houses/image copy 15.png",
            flor: "4",
            space: 85 + 'm²',
            rooms: 3,
            price: "320.000 MAD",
        }
    ]

    const h = houses.find(h => h.id == id)
    console.log(h);
    
    return (
        // houses.map((h) =>
            <main>
                <section className='bg-[url(https://pix10.agoda.net/hotelImages/321/3215007/3215007_17110818200058949430.jpg?ca=6&ce=1&s=1024x768)] bg-no-repeat bg-cover flex flex-col justify-center items-center absolute inset-0 bg-gradient-to-b from-transparent to-black'>
                    <div className='w-[850px] flex flex-col justify-center items-center pt-[450px] pb-[170px] gap-5'>
                        <p className='text-white text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti dolorum alias reprehenderit necessitatibus mollitia porro inventore nam, numquam nesciunt eum, blanditiis facilis autem dolor dolore? A quaerat enim ad. {h.id}</p>

                        <div className='flex gap-2'>
                            <button className='flex items-center gap-2 bg-[#50341f] text-white font-bold py-2 px-9.5' type="button">Buy Now</button>
                            <button className='flex items-center gap-2 border-[2.5px] py-2 px-3 border-[#50341f] text-[#50341f] font-bold hover:bg-[#50341f] hover:text-white' type="button">Learn More <FaChevronDown /></button>
                        </div>
                    </div>
                </section>

                <article></article>
            </main>
        )
    // );
};

export default Products_Info;