import React from 'react';

interface PropsValue {
    title: string;
    content: React.FC;
}

export const Introduction = (props: PropsValue) => {
    return <div className='mb-3'>
        <div className='flex justify-between items-center'>
            <span className='w-36% h-px bg-#EDEDED' />
            <div className='bg-#EEEEEE rounded-2xl w-3/12 h-7 text-center leading-7 text-sm'>
                {props.title}
            </div>
            <span className='w-36% h-px bg-#EDEDED' />
        </div>
        <div className='mt-3'>
            {props.content(null)}
        </div>
    </div>
}