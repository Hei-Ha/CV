import React from 'react';


export const ProjectExperience: React.FC = () => {
    return <div className='text-sm'>
        <section>
            <header className='font-medium my-3'>招商后台管理系统</header>
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
                        <span className='round mr-3' />维护此项目正常运行，功能迭代。(在职期间完成至少 86 个大大小小需求)
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
                        <span className='round mr-3' />在 Element-ui 组件的基础上，封装适合公司系统 Form 和 Table 组件，提升开发效率 60% 以上，同时降低新同学上手项目难度，提升
                    </div>
                    <div className='ml-4'>
                        业务产出速度。
                    </div>
                    <div className='flex items-center'>
                        <span className='round mr-3' />开发 webpack 插件，以配置的形式传入必要数据，极大的简化了项目接入性能监控平台的步骤。
                    </div>
                </div>
            </p>
        </section>
    </div>
}

