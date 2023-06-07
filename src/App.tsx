import React from 'react';
import {Content} from "@src/pages/universalCV/content";
import { NewContent } from '@src/pages/remoteCV/newContent';

export const App = () => {
    return <div className='w-full h-full my-12 flex justify-center'>
        {/*<Content />*/}
        <NewContent />
    </div>
}