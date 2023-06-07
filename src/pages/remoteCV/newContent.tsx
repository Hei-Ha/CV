import React from 'react';
import {Header} from "@src/pages/remoteCV/components/Header";
import { Education } from "@src/pages/remoteCV/components/Education";
import { Technology } from "@src/pages/remoteCV/components/Technology";
import { Experience } from "@src/pages/remoteCV/components/Experience";
import { Projects } from "@src/pages/remoteCV/components/Projects";

export const NewContent = () => {
    return <div className='rounded-sm overflow-hidden box-border bg-#FFFFFF flex flex-col justify-center
        min-lg:w-1000px
        min-md:w-[calc(100vw-20px)]
        max-md:mx-4 max-md:w-full'
    >
        <Header />
        <div className='mx-7'>
            <Education />
            <Technology />
            {/*<Experience />*/}
            {/*<Projects />*/}
        </div>
    </div>
}