import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
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
            promo: "15%"
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
            promo: "15%"

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
            promo: "20%"
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
            promo: "25%"
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

    return (
        <>
            {
                houses.map((h) => (
                    <article key={h.id} className="bg-[#936835] w-[385px] flex flex-col border-10 border-[#50341f]">
                        <section className='w-[100%] h-63 bg-[#50341f] rounded-b-[-40px]'><img className="w-full h-[97%] rounded-2xl" src="https://pix10.agoda.net/hotelImages/321/3215007/3215007_17110818200058949430.jpg?ca=6&ce=1&s=1024x768" alt="an image of the house" /></section>

                        <section className='w-[100%] pt-2.5 pb-2.5 pl-3 flex text-xl text-[#6b5132] font-bold'>
                            <div className="w-40 bg-[#f1dfb7] flex flex-col p-2 py-3 pl-3.5">
                                <div className="flex">
                                    <p>Flor: {h.flor}</p>
                                    <p className='text-[10px] pt-0.5 pl-0.5'>th</p>
                                </div>
                                <p>Space: {h.space}</p>

                                <Link to={`${h.id}`}>
                                    <button className='bg-[#936835] w-auto border-2 border-black mt-5 ml-2 py-1 px-4 text-[#f1dfb7] hover:bg-[#a27845] hover:text-[#f2e6cb]' type='submit'>Details</button>
                                </Link>
                            </div>

                            <div className="w-45 bg-[#f1dfb7] flex flex-col p-2 py-3 gap-1.5">
                                <p className='flex flex-col items-center'>Rooms: <span>{h.rooms}</span></p>
                                <p className='flex flex-col items-center'>Price: <span>{h.price}</span></p>
                            </div>
                        </section>
                    </article>
                ))
            }
        </>
    );
};

export default Product;