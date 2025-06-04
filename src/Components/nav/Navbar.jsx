import React, { Component } from 'react';
import { ImInstagram } from 'react-icons/im';

class Navbar extends Component {
    render() {
        return (
            <nav className='flex items-center justify-center gap-x-[500px] py-5 shadow'>
                <div className='size-[35px]'><ImInstagram className='size-full'/></div>

                <section>
                    <ul className='size-full flex items-center gap-30'>
                        <li className='bg-blue-400 text-xl px-4 py-0.5 hover:bg-blue-300'><a href="#">Tic</a></li>
                        <li className='bg-blue-400 text-xl px-4 py-0.5 hover:bg-blue-300'><a href="#">Toc</a></li>
                        <li className='bg-blue-400 text-xl px-4 py-0.5 hover:bg-blue-300'><a href="#">Tac</a></li>
                    </ul>
                </section>

                <button className='font-bold bg-blue-400 size-fit px-7 py-1.5 rounded-3xl text-white'>Sanfir</button>
            </nav>
        );
    }
}

export default Navbar;