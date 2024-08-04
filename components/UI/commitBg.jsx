import React, { useEffect, useState } from 'react'

export const CommitBg = () => {

    const clearArr = new Array(60).fill(0);

    const[row1, setRow1] = useState(clearArr);
    const[row2, setRow2] = useState(clearArr);
    const[row3, setRow3] = useState(clearArr);
    const[row4, setRow4] = useState(clearArr);
    const[row5, setRow5] = useState(clearArr);
    const[row6, setRow6] = useState(clearArr);
    const[row7, setRow7] = useState(clearArr);


    function generateRow1(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow1(arr);
    }
    function generateRow5(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow5(arr);
    }function generateRow6(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow6(arr);
    }
    function generateRow7(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow7(arr);
    }
    function generateRow2(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow2(arr);
    }function generateRow3(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow3(arr);
    }function generateRow4(){
        var arr = [];

        for(let i = 0; i<60; i++){
            arr.push(Math.floor(Math.random()*7));
        }

        setRow4(arr);
    }

    useEffect(()=>{
        setInterval(()=>{
            generateRow1();
            generateRow2();
            generateRow3();
            generateRow4();
            generateRow5();
            generateRow6();
            generateRow7();
        },3000)
        
    },[])

  return (
    <div className=' w-screen absolute duration-200 md:left-1 top-0 flex flex-col gap-2 object-contain overflow-x-hidden z-[-1]'>
        <div className='opacity-80 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row1.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        
        <div className='opacity-70 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row5.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        <div className='opacity-60 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row6.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        <div className='opacity-50 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row1.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        <div className='opacity-50 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row2.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        <div className='opacity-30 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row3.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        <div className='opacity-10 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row4.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
        <div className='opacity-5 grid grid-flow-col grid-cols-60 max-md:gap-1'>
            {row7.map((item)=>(
                <div className={` w-4 h-4 rounded-[3px] duration-200 ${item == 4 && "bg-green-600 border-t-[1px] border-r-[1px] border-green-500 shadow-inner"} ${item == 2 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 5 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 6 && "bg-green-700 border-t-[1px] border-r-[1px] border-green-600 shadow-inner"} ${item == 1 && "bg-green-800 border-t-[1px] border-r-[1px] border-green-700 shadow-inner"} ${item == 0 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"} ${item == 3 && "bg-slate-800 border-t-[1px] border-r-[1px] border-slate-700 shadow-inner"}`} >

                </div>
            ))}
        </div>
    </div>
  )
}
