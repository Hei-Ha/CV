import React from 'react';
import { Introduction } from '@src/pages/components/introduction';
import { WorkExperience } from '@src/pages/components/WorkExperience';
import { ProjectExperience } from '@src/pages/components/ProjectExperience';


export const Content = () => {

    const Eduction: React.FC = () => {
        return <div>
            <div className='flex justify-between text-sm'>
                <span className='font-medium'>南阳理工学院 —— 软件学院</span>
                <span >2016.9 —— 2020.6</span>
            </div>
            <span className='ml-4 text-xs'>软件工程</span>
        </div>
    }

    const Technology: React.FC = () => {
        return <div className='text-sm'>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                掌握：<code>HTML</code>、<code>CSS</code>、<code>JavaScript</code>、<code>ES6</code>语法。
            </div>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                熟悉：<code>Vue</code>、<code>Vue-Router</code>、<code>Vuex</code>、<code>React</code>、<code>Webpack</code> 等前端技术。
            </div>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                熟练使用：<code>Element-ui</code>、<code>Ant Design</code>&nbsp;等主流 UI 组件库。
            </div>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                了解&nbsp; <code>Vue3</code>、<code>Vite</code>，<code>TypeScript</code>、<code>Tailwindcss</code>，并做过练习项目。
            </div>
        </div>
    }


    return <div className='w-1000px rounded-sm overflow-hidden box-border'>
        <div className='pt-11 px-9 bg-#F0E9D2 overflow-hidden'>
            <header className='mb-8'>
                <h3 className='inline-block mr-5 text-5xl font-extrabold'>王闯</h3>
                <span className='inline-block text-xl mr-2'>目标职位：Web 前端工程师</span>
                <span className='inline-block text-base'>
                {/*<span className='mr-2'>/</span>*/}
                {/*<span className='mr-2'>北京</span>*/}
            </span>
            </header>
            <div className='h-px bg-#CCCCCC'/>
            {/*个人联系方式*/}
            <div className='my-8 text-sm'>
                <span>176-3823-1093 ｜ 男 ｜ 25岁 ｜ wang_chuang_@aliyun.com</span>
            </div>
        </div>
        <div className='bg-#FFFFFF py-8 px-9'>
            {/*教育背景*/}
            <Introduction
                title={'教育背景'}
                content={Eduction}
            />
            {/*专业能力*/}
            <Introduction
                title={'专业能力'}
                content={Technology}
            />
            {/*工作经历*/}
            <Introduction
                title={'工作经历'}
                content={WorkExperience}
            />
            {/*项目经历*/}
            <Introduction
                title={'项目经历'}
                content={ProjectExperience}
            />
        </div>
    </div>
}