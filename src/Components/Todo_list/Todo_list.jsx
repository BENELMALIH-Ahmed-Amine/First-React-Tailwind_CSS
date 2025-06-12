import React, { Component, useEffect } from 'react';
import Navbar from '../nav/Navbar';

class Todo_list extends Component {
    render() {
        let task = document.getElementById('task')
        console.log(task);

        let add = document.getElementById('add')
        console.log(add);

        let list = document.getElementById('list')
        console.log(list);

        return (
            <>
                <Navbar />
                <article className="flex flex-col items-center gap-10 bg-black h-[100vh] mt-[105px]">
                    <section className="flex flex-col items-center gap-3 mt-15">
                        <h1 className='text-5xl font-black text-white'>To Do List</h1>
                        <div className='flex justify-center gap-2 w-[350px]'>
                            <input id='task' type="text" className='bg-white w-[270px] h-10 rounded-[5px]' />
                            <button id='add' className='bg-blue-600 text-lg px-5 rounded-[5px] font-bold'>Add</button>
                        </div>
                    </section>

                    <section id='list' className="w-[700px] h-[550px] px-5 py-2.5">
                        <div className='flex justify-center gap-[6.5rem] w-full h-auto border-2 border-solid border-white p-3 rounded-[15px]'>
                            <textarea name="" id="" readOnly className='bg-white w-[330px] h-10 rounded-[5px] flex p-2'></textarea>
                            <div className='flex gap-3'>
                                <button className='bg-blue-500 text-lg px-7 rounded-[10px] font-bold text-white'>Edit</button>
                                <button className='bg-red-500 text-lg px-5 font-bold'>Delete</button>
                            </div>
                        </div>
                    </section>
                </article>
            </>
        );
    }
}

export default (Todo_list);