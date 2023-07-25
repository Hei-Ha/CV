import React from "react";
import {CardTitle} from '@src/utils/utilsStyle';

export const Projects = () => {
    return <div className='py-5'>
        <CardTitle title='项目经历'/>
        <div className='text-sm'>
            <section>
                <header className='my-2 text-base'>
                    <strong>标注平台</strong>
                </header>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <div>
                        <p>此项目是为了给公司供应商提供一个在线标注平台，用于对公司的点云图片和其他数据进行在线标注。该项目包含了账号权限控制、</p>
                        <p>数据分配和结果验收等关键模块。</p>
                    </div>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                    <code>React</code> + <code>Webpack</code> + <code>TypeScript</code> + <code>Arco-Design</code> + <code>Tailwindcss</code>
                </span>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>工作内容：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>主要负责设计和开发权限模块，确保系统的账号权限控制功能完善和安全可靠。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>在项目初期，负责梳理整体需求，与团队成员一起进行需求分析和讨论，确保对整体项目需求的准确理解。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>从 0 到 1 快速搭建项目整体框架，以确保项目的快速启动和开发进度的迅速推进。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>协调和配合团队成员，分配任务和资源，确保项目的进度和质量达到预期目标。
                        </div>
                        {/*<div className='flex items-center'>*/}
                        {/*    主要负责设计和开发权限模块。*/}
                        {/*    除此之外项目初期，负责梳理整体需求，与团队成员一起进行需求分析和讨论，确保对整体项目需求的准确理解。*/}
                        {/*    从 0 - 1 快速搭建项目整体框架，以确保项目的快速启动和开发进度的迅速推进。*/}
                        {/*    协调和配合团队成员，分配任务和资源，确保项目的进度和质量达到预期目标。*/}
                        {/*    负责项目框架的搭建、权限模块的设计和开发。*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            <section className='mt-7'>
                <header className='my-2 text-base'>
                    <strong>数据平台</strong>
                </header>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    {/*<span>此项目主要是展示数据采集回传的 Run 数据（log 数据），视频信息经过分片之后，以图片的形式供审核人员快速确定某批数据是否可以送标；同时提供数据统计模块，按筛选条件展示回传数据的标签统计情况。</span>*/}
                    <div>
                        <p>该项目是一个数据平台，主要用于展示数据采集回传的 Run 数据（log 数据）。平台通过对回传的视频信息进行分片，将其以图片</p>
                        <p>的形式展示给审核人员，以便快速确定某批数据是否可以进行标注。同时，该平台还提供数据统计模块，根据筛选条件展示回传数</p>
                        <p>据的标签统计情况。</p>
                    </div>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                        <code>React</code> + <code>Webpack</code> + <code>TypeScript</code> + <code>Arco-Design</code> + <code>Tailwindcss</code>
                    </span>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>工作内容：</div>
                    <div className='flex flex-col'>
                        {/*<div className='flex items-center'>*/}
                        {/*    负责审核模块、数据统计模块的开发和整个系统后续的功能迭代。*/}
                        {/*</div>*/}
                        <div>
                            <div className='flex items-center'>
                                <span className='round mr-3'/>
                                负责审核模块和数据统计模块的开发，包括设计和实现相应的功能和界面，确保审核人员能够快速、准确地浏览和审核采集回传
                            </div>
                            <div className='ml-4'>的数据。</div>
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>
                            进行整个系统后续功能的迭代，根据需求和反馈进行系统功能的扩展和改进，以提升用户体验和平台的功能性。
                        </div>

                    </div>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果：</div>
                    <div className='flex flex-col'>
                        {/*<div className='flex items-center'>*/}
                        {/*    项目初期中途接手，开发周期较紧张。在有限时间内梳理并整理需求，确定优先级，合理安排开发时间，在规定时间内上线第一版供用户使用。*/}
                        {/*    提升了标注同事对采集数据的处理效率，提高送标数据的有效性，节约公司成本。*/}
                        {/*</div>*/}
                        <div>
                            <div className='flex items-center'>
                                <span className='round mr-3'/>
                                在项目初期接手并开展工作，面对紧张的开发周期，成功梳理和整理需求，确定优先级，合理安排开发时间，并在规定时间内
                            </div>
                            <div className='ml-4'>上线了第一版数据平台，为用户提供了可用的平台环境。</div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <span className='round mr-3'/>
                                通过开发的审核模块和数据统计模块，提升了标注同事对采集数据的处理效率。标注同事能够快速浏览和审核采集回传的数据，
                            </div>
                            <div className='ml-4'>提高了数据处理的速度和准确性。</div>
                        </div>

                        <div className='flex items-center'>
                            <span className='round mr-3'/>
                            成功与团队成员合作，按时完成了项目的上线和交付，解决公司燃眉之急。
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-7'>
                <header className='my-2 text-base'>
                    <strong>招商后台管理系统</strong>
                </header>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <div>
                        <p>此系统主要为公司内部运营人员服务，运营人员利用此系统每天抢占公海资源库的商机信息，并负责外呼跟进自己的商机信息，与</p>
                        <p>潜在客户取得联系，促使其签订意向单，进一步转化为与公司签订合同。</p>
                    </div>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                        <code>Vue2</code> + <code>Vue-router</code> + <code>Element-ui</code> + <code>webpack</code>
                    </span>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>工作内容：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>维护此项目正常运行，功能迭代(在职期间完成至少 86 个大大小小需求)。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>封装了 Form 和 Table 公共组件。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>接入公司内部性能监控平台（北斗性能监控平台）。
                        </div>
                    </div>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>在 Element-ui 组件的基础上，封装适合公司系统风格 RcForm 和
                            RcTable 组件，提升开发效率 60% 以上，同时降低新同事上手
                        </div>
                        <div className='ml-4'>
                            项目难度，提升业务产出速度。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3'/>开发 webpack 插件，以配置的形式传入必要数据，极大的简化了项目接入性能监控平台的步骤。
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-7'>
                <header className='my-2 text-base'>
                    <span className='mr-3'>
                        <strong>ECharts 常用组件库</strong>
                    </span>
                    <span className='font-normal text-#551A8B'>
                        <a href="https://hei-ha.github.io/QCharts/" target='_blank'>在线链接</a>
                    </span>
                </header>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <span>此项目将公司内部常用的图表展示形式，以公司 UI 风格封装，方便后续开发直接使用，提高效率。</span>
                </div>
                <div className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                        <code>Echarts</code> + <code>React</code> + <code>Webpack</code> + <code>Arco-Design</code>
                    </span>
                </div>
            </section>
            <section className='mt-7'>
                <header className='my-2 text-base'>
                    <span className='mr-3'>
                        <strong>Vue3 UI 组件库：</strong>
                    </span>
                    <span className='font-normal text-#551A8B'>
                    <a href="https://wang-chuang.gitee.io/vue3-practice/" target='_blank'>在线链接</a>
                </span>
                </header>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <span>此项目为刚接触 vue3 时的练习项目，目的是为了学习 vue3 语法，并体验 vite 打包，项目中尝试使用了 TypeScript 语法。</span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                    <code>Vue3</code> + <code>Vite</code> + <code>TypeScript</code>
                </span>
                </p>
            </section>
        </div>
    </div>
}