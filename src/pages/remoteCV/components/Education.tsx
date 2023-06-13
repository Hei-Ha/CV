import React from 'react';
import { CardTitle } from '@src/utils/utilsStyle';


export const Education = () => {
    return <div className='py-5'>
        <CardTitle title={'教育背景'} />
        <div className='flex justify-between mt-3'>
            <span>南阳理工学院 ———— 软件学院</span>
            <span className='text-sm'>2016-9 ———— 2020.6</span>
        </div>
        <div className='mt-2 text-sm flex justify-between'>
            <span>软件工程</span>
            <span>统招本科</span>
        </div>
    </div>
}