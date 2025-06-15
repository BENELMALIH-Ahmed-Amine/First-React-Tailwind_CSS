import React, { Component } from 'react';

import { ImInstagram } from 'react-icons/im';
import Like from '../Parts/Like';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className='w-full bg-white flex items-center justify-center gap-x-[350px] py-7 shadow-xl fixed top-0 z-1'>
                <div className='size-[35px]'><ImInstagram className='size-full' /></div>

                <section>
                    <ul className='size-full flex items-center gap-30'>
                        <Link to="/">
                            <li className='bg-blue-400 text-xl px-4 py-0.5 hover:bg-blue-300'>To-Do</li>
                        </Link>
                        <Link to="/houses/">
                            <li className='bg-blue-400 text-xl px-4 py-0.5 hover:bg-blue-300'>Products</li>
                        </Link>
                        <Link to="">
                            <li className='bg-blue-400 text-xl px-4 py-0.5 hover:bg-blue-300'>Tac</li>
                        </Link>

                        <Like />
                    </ul>
                </section>

                <button className='font-bold bg-blue-400 size-fit px-7 py-1.5 rounded-3xl text-white'>Sanfir</button>
            </nav>
        );
    }
}

export default Navbar;