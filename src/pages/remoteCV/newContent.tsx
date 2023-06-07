import React from 'react';
import {Header} from "@src/pages/remoteCV/components/Header";
import { Education } from "@src/pages/remoteCV/components/Education";
import { Technology } from "@src/pages/remoteCV/components/Technology";
import { Experience } from "@src/pages/remoteCV/components/Experience";
import { Projects } from "@src/pages/remoteCV/components/Projects";

export const NewContent = () => {
    return <div className='lg:w-1000px w-full rounded-sm overflow-hidden box-border bg-#CCCCCC'>
        <Header />
        <Education />
        <Technology />
        <Experience />
        <Projects />
    </div>
}