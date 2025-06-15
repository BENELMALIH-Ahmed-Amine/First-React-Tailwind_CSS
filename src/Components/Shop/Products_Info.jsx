import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Navbar from '../nav/Navbar';
import { useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Products_Info = () => {
    const { id } = useParams()

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

    const e = houses.find(h => h.id == id)

    return (
        <main>
            <Navbar />
            <section className='bg-[url(https://pix10.agoda.net/hotelImages/321/3215007/3215007_17110818200058949430.jpg?ca=6&ce=1&s=1024x768)] bg-no-repeat bg-cover mt-26 flex flex-col justify-center items-center'>

                <Link to="/houses">
                    <div className='flex items-center gap-2 rounded-[50px] bg-[#936835] px-4 pr-5.5 py-2.5 text-[#f1dfb7] font-bold absolute left-5 z-2'><BiArrowBack className='size-6' />Back to Products</div>
                </Link>

                <div className='w-[850px] flex flex-col justify-center items-center pt-[450px] pb-[170px] gap-5 mt-26'>
                    <p className='text-white text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti dolorum alias reprehenderit necessitatibus mollitia porro inventore nam, numquam nesciunt eum, blanditiis facilis autem dolor dolore? A quaerat enim ad. {e.id}</p>

                    <div className='flex justify-center gap-2'>
                        <button className='flex items-center gap-2 bg-[#50341f] text-[#f1dfb7] font-bold py-2 px-9.5' type="button">Buy Now</button>
                        <button className='flex items-center gap-2 border-[2.5px] py-2 px-3 border-[#50341f] text-[#50341f] font-bold hover:bg-[#50341f] hover:text-[#f1dfb7]' type="button">Learn More <FaChevronDown /></button>
                    </div>
                </div>
            </section>

            <article className='bg-[#f1dfb7] w-full flex flex-col items-center justify-center p-[100px]'>
                <section className='bg-amber-400'>
                    <p className='w-[80%] pl-3 pb-1 border-l-[3.5px] border-l-[#50341f] text-[#50341f] font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos esse beatae, doloribus possimus assumenda maiores itaque natus eveniet officiis numquam, eius rerum. Ducimus, possimus quibusdam. Vitae earum quod ipsa itaque?
                        Numquam earum sequi reprehenderit repudiandae mollitia voluptate incidunt, non quis iusto ea id quasi cumque placeat odio. Commodi quaerat, facilis sunt laboriosam accusantium magni quas sed, ratione, totam velit quisquam.
                        Facere sint aperiam consequatur eaque odio nisi fuga aliquid incidunt similique at veniam dignissimos deserunt distinctio optio itaque totam repellat adipisci nihil, suscipit magnam est blanditiis magni maiores. Quaerat, minus?
                        Rerum enim impedit eveniet placeat neque ea officiis nostrum molestias. Perspiciatis ducimus eum quisquam magni! Qui cumque minus nisi fugit, quis, sequi facilis ducimus sunt cum esse explicabo voluptas fugiat!
                        Quas reprehenderit officiis numquam, eius rerum. Ducimus, possimus quibusdam. Vitae earum quod ipsa itaque?
                        Numquam earum sequi reprehenderit repudiandae mollitia voluptate incidunt, non quis iusto ea id quasi cumque placeat odio. Commodi quaerat, facilis sunt laboriosam accusantium magni quas sed, ratione, totam velit quisquam.
                        Facere sint aperiam consequatur.</p>
                </section>

                <section className="w-full flex justify-around items-center py-[50px] mt-[70px]">
                    <div className="w-full border-[#936835] border-6 p-[15px] py-[30px] flex justify-around items-center flex-wrap gap-3">
                        {
                            houses.filter((p) => p.promo).map((h) =>
                                <article key={h.id} className="bg-[#936835] w-[385px] flex flex-col border-10 border-[#50341f] relative">
                                    <div className='w-[45px] h-[110px] bg-red-700 clip-path border-3 border-t-0 border-black absolute top-[-14px] right-4.5 flex justify-center text-lg text-white font-bold'>
                                        <p className='mt-7.5'>{h.promo}</p>
                                    </div>
                                    <section className='w-[100%] h-63 bg-[#50341f] rounded-b-[-40px]'><img className="w-full h-[97%] rounded-2xl" src="https://pix10.agoda.net/hotelImages/321/3215007/3215007_17110818200058949430.jpg?ca=6&ce=1&s=1024x768" alt="an image of the house" /></section>

                                    <section className='w-[100%] pt-2.5 pb-2.5 pl-3 flex text-xl text-[#6b5132] font-bold'>
                                        <div className="w-40 bg-[#f1dfb7] flex flex-col p-2 py-3 pl-3.5">
                                            <div className="flex">
                                                <p>Flor: {h.flor}</p>
                                                <p className='text-[10px] pt-0.5 pl-0.5'>th</p>
                                            </div>
                                            <p>Space: {h.space}</p>

                                            <Link to={`/houses/${h.id}`}>
                                                <button className='bg-[#936835] w-auto border-2 border-black mt-5 ml-2 py-1 px-4 text-[#f1dfb7] hover:bg-[#a27845] hover:text-[#f2e6cb]' type='submit'>Details</button>
                                            </Link>
                                        </div>

                                        <div className="w-45 bg-[#f1dfb7] flex flex-col p-2 py-3 gap-1.5">
                                            <p className='flex flex-col items-center'>Rooms: <span>{h.rooms}</span></p>
                                            <p className='flex flex-col items-center'>Price: <span>{h.price}</span></p>
                                        </div>
                                    </section>
                                </article>
                            )}
                    </div>
                </section>
            </article>
        </main>
    )
};

export default Products_Info;