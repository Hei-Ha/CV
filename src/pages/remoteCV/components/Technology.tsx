import React from "react";
import { CardTitle } from '@src/utils/utilsStyle';

export const Technology = () => {
    return <div className='pb-5'>
        <CardTitle title={'专业能力'} />
        <div className='text-sm'>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                掌握：<code>HTML</code>、<code>CSS</code>、<code>JavaScript</code>、<code>ES6</code>语法。
            </div>
            <div className='flex items-center my-2'>
                <span className='round mr-3' />
                熟悉：<code>Vue</code>、<code>React</code>、<code>Webpack</code> 等前端技术。
            </div>
            <div className='flex items-center my-2 break-words'>
                <span className='round mr-3' />
                熟练使用：<code>Element-ui</code>、<code>Ant Design</code>、<code>Echarts</code>&nbsp;等组件库。
            </div>
            <div className='flex items-center my-2 break-words'>
                <span className='round mr-3' />
                了解&nbsp; <code>Node.js</code>、<code>Vue3</code>、<code>Vite</code>、<code>TypeScript</code>、<code>Tailwindcss</code>、微信小程序，并做过练习项目。
            </div>
        </div>
    </div>
}