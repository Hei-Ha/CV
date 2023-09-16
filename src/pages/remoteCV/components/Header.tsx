import React from 'react';



export const Header = () => {
    return <div className='pt-11 px-9 bg-#F0E9D2 overflow-hidden'>
        <header className='mb-8'>
            <h3 className='inline-block mr-5 text-5xl font-extrabold'>王闯</h3>
            <span className='inline-block text-xl mr-2'>
                <span className='text-sm'>目标职位：</span>Web 前端工程师
            </span>
            <span className='inline-block text-base'>
            </span>
        </header>
        <div className='h-px bg-#CCCCCC'/>
        {/*个人联系方式*/}
        <div className='my-8 text-sm'>
            <span>176-3823-1093 ｜ 男 ｜ 26岁 ｜ wangchuang.space@gmail.com</span>
        </div>
    </div>
}