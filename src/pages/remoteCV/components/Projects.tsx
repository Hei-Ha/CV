import React from "react";
import { CardTitle } from '@src/utils/utilsStyle';

export const Projects = () => {
    return <div className='py-5'>
        <CardTitle title='项目经历' />
        <div className='text-sm'>
            <section>
                <header className='font-medium my-2'>QLabel：</header>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <span>此项目是为了给公司供应商提供一个在线标注平台，供其对公司点云图片及其他数据进行在线标注，包含账号权限控制，数据分配，结果验收等模块。</span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                    <code>React</code> + <code>Webpack</code> + <code>TypeScript</code> + <code>Arco-Design</code> + <code>Tailwindcss</code>
                </span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>工作内容：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            负责项目框架的搭建、权限模块的设计和开发。
                        </div>
                    </div>
                </p>
            </section>
            <section className='mt-5'>
                <header className='font-medium my-2'>QData：</header>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <span>此项目主要是展示数据采集回传的 Run 数据，经过分片之后，以图片的形式供审核人员快速确定某批数据是否可以送标；同时提供数据统计模块，按筛选条件展示回传数据的标签统计情况。</span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                    <code>React</code> + <code>Webpack</code> + <code>TypeScript</code> + <code>Arco-Design</code> + <code>Tailwindcss</code>
                </span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>工作内容：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            负责审核模块的开发和功能迭代。
                        </div>
                    </div>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            提升标注同事对采集数据的处理效率，提高送标数据的有效性，节约公司成本。
                        </div>
                    </div>
                </p>
            </section>
            <section className='mt-5'>
                <header className='font-medium my-2'>招商后台管理系统：</header>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <span>此系统主要为公司内部运营人员服务，运营人员利用此系统每天抢占公海资源库的商机信息，并负责外呼跟进自己的商机信息，与潜在客户取得联系，促使其签订意向单，进一步转化为与公司签订合同。</span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                    <code>Vue2</code> + <code>Vue-router</code> + <code>Element-ui</code> + <code>webpack</code>
                </span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>工作内容：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <span className='round mr-3' />维护此项目正常运行，功能迭代(在职期间完成至少 86 个大大小小需求)。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3' />封装了 Form 和 Table 公共组件。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3' />接入公司内部性能监控平台（北斗性能监控平台）。
                        </div>
                    </div>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果：</div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <span className='round mr-3' />在 Element-ui 组件的基础上，封装适合公司系统风格 RcForm 和 RcTable 组件，提升开发效率 60% 以上，同时降低新同学上手项目难
                        </div>
                        <div className='ml-4'>
                            度，提升业务产出速度。
                        </div>
                        <div className='flex items-center'>
                            <span className='round mr-3' />开发 webpack 插件，以配置的形式传入必要数据，极大的简化了项目接入性能监控平台的步骤。
                        </div>
                    </div>
                </p>
            </section>
            <section className='mt-5'>
                <header className='font-medium my-2'>
                    <span className='mr-3'>ECharts 常用组件库：</span>
                    <span className='font-normal text-#551A8B'>
                    <a href="https://hei-ha.github.io/QCharts/" target='_blank'>在线链接</a>
                </span>
                </header>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>项目描述：</div>
                    <span>此项目将公司内部常用的图表展示形式，以公司 UI 风格封装，方便后续开发直接使用，提高效率。</span>
                </p>
                <p className='mb-2 flex'>
                    <div className='w-20 shrink-0'>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                    <span>
                    <code>Echarts</code> + <code>React</code> + <code>Webpack</code> + <code>Arco-Design</code>
                </span>
                </p>
            </section>
            <section className='mt-5'>
                <header className='font-medium my-2'>
                    <span className='mr-3'>Vue3 UI 组件库：</span>
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