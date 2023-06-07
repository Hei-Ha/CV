import React from "react";


interface PropsValues {
    title: string;
}
export const CardTitle = (props: PropsValues) => {
    return <div className='flex justify-between items-center'>
        <span className='w-36% h-px bg-#EDEDED' />
        <div className='bg-#EEEEEE rounded-2xl w-3/12 h-7 text-center leading-7 text-sm'>
            {props.title}
        </div>
        <span className='w-36% h-px bg-#EDEDED' />
    </div>
}