import React from "react";
import { CardTitle } from '@src/utils/utilsStyle';

export const Experience = () => {
    return <div className='py-5'>
        <CardTitle title='工作经历' />
        <div className='text-sm'>
            <section>
                <div className='my-3 flex justify-between'>
                    <header className='font-medium'>北京轻舟智航科技有限公司（自动驾驶行业独角兽公司）</header>
                    <span>2022.3 —— 2023.5</span>
                </div>
                <div className='my-2'>
                    <strong>前端开发工程师</strong>
                </div>
                <div>
                    <span>工作内容：</span>
                    <div className='flex flex-col my-1'>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            负责公司内部测试、运营平台的功能开发。
                        </div>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            {/*负责公司内部数据平台、机器学习平台、标注平台的搭建和功能开发。*/}
                            负责公司内部 数据平台、机器学习平台、标注平台的前端功能开发，保证平台的稳定性和可扩展性。
                        </div>
                        <div>
                            <div className='my-1'>
                                <span className='round mr-3' />
                                基于 Echarts 技术栈，搭建了适用于公司内部的图表库，开发和封装了符合公司需求的图表组件，提供了丰富的图表展示方式和交互功能。
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-7'>
                <div className='my-3 flex justify-between'>
                    <header className='font-medium'>北京五八信息技术有限公司（58同城） —— 北京总部</header>
                    <span>2020.5 —— 2021.12</span>
                </div>
                <div className='my-2'>
                    <strong>前端开发工程师</strong>
                </div>
                <div>
                    <span>工作内容：</span>
                    <div className='flex flex-col my-1'>
                        <div className='my-1'>
                            <span className='round mr-3' />
                            {/*维护 4 个公司内部系统的正常运行。*/}
                            负责维护和管理公司内部的 4 个系统，确保系统的正常运行和稳定性。
                        </div>
                        {/*<div className='my-1'>*/}
                        {/*    <span className='round mr-3' />*/}
                        {/*    根据产品需求，完成相关系统的前端代码开发工作，并与后端联调，最终将需求上线，并确保新老功能正常运行。*/}
                        {/*</div>*/}
                        <div className='my-1'>
                            <span className='round mr-3' />
                            负责将小组内的项目接入公司内部性能监控平台 —— 北斗系统，确保项目的运行状态和性能数据能够被准确监测。
                        </div>
                        <div>
                            <div className='my-1'>
                                <span className='round mr-3' />
                                协助团队成员对负责的项目向“微前端”的架构方向进行技术改造、升级，与团队成员密切合作，进行代码重构、模块拆分等工作，提升项目的
                            </div>
                            <div className='ml-4'>可维护性、扩展性。</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
}