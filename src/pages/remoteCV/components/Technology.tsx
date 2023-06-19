import React from "react";
import { CardTitle } from '@src/utils/utilsStyle';

export const Technology = () => {
    return <div className='pb-5'>
        <CardTitle title={'专业能力'} />
        <div className='text-sm'>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                掌握&nbsp;<code>HTML</code>、<code>CSS</code>、<code>JavaScript</code>、<code>ES6</code>语法。
            </div>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                {/*熟悉&nbsp;<code>Vue</code>、<code>React</code>、<code>Webpack</code> 等前端技术。*/}
                熟悉主流前端技术，包括 <code>Vue</code>、<code>React</code>&nbsp;和&nbsp;<code>Webpack</code>，具备在项目中应用这些技术进行开发和优化的经验
            </div>
            <div className='flex items-center my-2 break-words'>
                <span className='round mr-3' />
                熟练使用&nbsp;<code>Element-UI</code>、<code>Ant Design</code>、<code>Echarts</code>&nbsp;等组件库，能够高效的构建界面和数据可视化。
            </div>
            <div className='flex items-center my-2 break-words'>
                <span className='round mr-3' />
                对 &nbsp; <code>Node.js</code>、<code>Vue3</code>、<code>Vite</code>、<code>TypeScript</code>、<code>Tailwindcss</code>、微信小程序，具备一定的了解和实践经验。
            </div>
        </div>
    </div>
}