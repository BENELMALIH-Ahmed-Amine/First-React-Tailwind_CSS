import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import { Houses_D } from './Houses_D';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa';

const Products_Info = () => {
    const { id } = useParams()

const houses = Houses_D

    const house = houses.find(h => h.id == id)

    return (
        <main>
            <Navbar />
            <section style={{ backgroundImage: `url(${house.img})` }} className='bg-no-repeat bg-cover mt-26 flex flex-col justify-center items-center'>

                <Link to="/houses">
                    <div className='flex items-center gap-2 rounded-[50px] bg-[#936835] px-4 pr-5.5 py-2.5 text-[#f1dfb7] font-bold absolute left-5 z-2'><BiArrowBack className='size-6' />Back to Products</div>
                </Link>

                <div className='w-[850px] flex flex-col justify-center items-center pt-[450px] pb-[170px] gap-5 mt-26'>
                    <p className='text-white text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti dolorum alias reprehenderit necessitatibus mollitia porro inventore nam, numquam nesciunt eum, blanditiis facilis autem dolor dolore? A quaerat enim ad. {house.id}</p>

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
                                    <section className='w-[100%] h-63 bg-[#50341f] rounded-b-[-40px]'><img className="w-full h-[97%] rounded-2xl" src={h.img} alt="an image of the house" /></section>

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