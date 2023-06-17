import React from "react";
import { CardTitle } from '@src/utils/utilsStyle';

export const Experience = () => {
    return <div className='py-5'>
        <CardTitle title='工作经历' />
        <div className='text-sm'>
            <section>
                <div className='my-3 flex justify-between'>
                    <header className='font-medium'>北京轻舟智航科技有限公司</header>
                    <span>2022.3 —— 2023.5</span>
                </div>
                <div className='my-2'>
                    <strong>前端开发工程师</strong>
                    {/*<span>技术栈：</span>*/}
                    {/*<code>React</code>、<code>Arco-design</code>、<code>Webpack</code>、<code>TailwindCss</code>*/}
                </div>
                <div>
                    <span>工作内容：</span>
                    <div className='flex flex-col my-1'>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            负责公司内部测试运营平台的功能开发。
                        </div>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            负责公司内部数据平台、机器学习平台、标注平台的搭建和功能开发。
                        </div>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            以 Echarts 为基础，搭建公司内部使用的图表库。
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-7'>
                <div className='my-3 flex justify-between'>
                    <header className='font-medium'>北京五八信息技术有限公司 —— 北京总部</header>
                    <span>2020.5 —— 2021.12</span>
                </div>
                <div className='my-2'>
                    <strong>前端开发工程师</strong>
                    {/*<span>技术栈：</span>*/}
                    {/*<code>Vue2</code>、<code>Element-ui</code>、<code>Webpack</code>*/}
                </div>
                <div>
                    <span>工作内容：</span>
                    <div className='flex flex-col my-1'>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            维护 4 个公司内部系统的正常运行，解决 bug。
                        </div>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            根据产品需求，完成相关系统的前端代码开发工作，并与后端同学联调，最终将需求上线，并确保新老功能正常运行。
                        </div>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            负责将小组内的项目接入公司内部性能监控平台 —— 北斗系统。
                        </div>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            协助组内其他同学对负责的项目向 微前端 的架构方向进行技术改造、升级。
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
}