<template>
  <div class="page">
    <section class="title">
      <h2 class="CVName">王闯</h2>
      <span class="CVPosition">目标职位：Web前端工程师
        <span class="CVBase">/ 北京</span>
      </span>
      <div class="titleLine"></div>
      <div class="CVMassage">
        176-3823-1093 ｜ 男 ｜ 24岁 ｜ wang_chuang_@aliyun.com
      </div>
    </section>

    <section class="content">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="content-title">
            <div class="content-title-line"></div>
            <div class="content-title-text">教育背景</div>
            <div class="content-title-line"></div>
          </div>
          <article class="eduction">
            <section>
              <div class="edu-title">
                <h3>南阳理工学院 —— 软件学院</h3>
                <time>2016.9 —— 2020.6</time>
              </div>
              <p class="major">软件工程</p>
            </section>
          </article>
        </el-col>
        <el-col :span="24">
          <div class="content-title">
            <div class="content-title-line"></div>
            <div class="content-title-text">专业能力</div>
            <div class="content-title-line"></div>
          </div>
          <article class="professionalSkills">
            <p class="describe skill">
              <i class="iconfont icon-dian skill-icon"></i>
              <span class="message">熟悉：<code>HTML</code>、<code>CSS</code>、<code>JavaScript</code>、<code>AJax</code>、<code>ES6</code>语法。</span>
            </p>
            <p class="describe skill">
              <i class="iconfont icon-dian skill-icon"></i>
              <span class="message">熟悉：<code>Vue</code>、<code>Vue-router</code>、<code>Vuex</code>、<code>Webpack</code>。</span>
            </p>
            <p class="describe skill">
              <i class="iconfont icon-dian skill-icon"></i>
              <span class="message">熟悉：<code>Element-ui</code>、<code>Ant Design</code>等主流 UI 组件库的使用。</span>
            </p>
            <p class="describe skill">
              <i class="iconfont icon-dian skill-icon"></i>
              <span class="message">了解：使用 <code>React</code>、<code>Less</code>，<code>vue3</code>、<code>vite</code>，做过练习项目。</span>
            </p>
            <p class="describe skill">
              <i class="iconfont icon-dian skill-icon"></i>
              <span class="message">了解：<code>Git</code>、<code>TypeScript</code>，微信小程序。</span>
            </p>
          </article>
        </el-col>
        <el-col :span="24">
          <div class="content-title">
            <div class="content-title-line"></div>
            <div class="content-title-text">工作经历</div>
            <div class="content-title-line"></div>
          </div>
          <article class="workExperience">
            <section>
              <div class="company-title">
                <h3>北京五八信息技术有限公司 —— 北京总部</h3>
                <time>2020.5 — 2021.12</time>
              </div>
              <div>
                <div class="little-title">技术栈：</div>
                <p class="describe workCompany">
                  <span class="message">
                    <code>Vue2、</code>
                    <code>Element-ui、</code>
                    <code>Webpack、</code>
                  </span>
                </p>
              </div>
              <div>
                <div class="little-title">工作内容：</div>
                <p class="describe workCompany">
                  <i class="iconfont icon-dian skill-icon"></i>
                  <span class="message">维护 4 个公司内部系统的正常运行，解决 bug。</span>
                </p>
                <p class="describe workCompany">
                  <i class="iconfont icon-dian skill-icon"></i>
                  <span class="message">根据产品需求，完成相关系统的前端代码开发工作，并与后端同学联调，最终将需求上线，并确保新老功能正常运行。</span>
                </p>
                <p class="describe workCompany">
                  <i class="iconfont icon-dian skill-icon"></i>
                  <span class="message">将组内负责的项目接入公司内部的性能监控平台 —— 北斗系统。</span>
                </p>
                <p class="describe workCompany">
                  <i class="iconfont icon-dian skill-icon"></i>
                  <span class="message">协助组内其他同学对负责的项目向 微前端 的架构方向进行技术改造、升级。</span>
                </p>
              </div>
            </section>
          </article>
        </el-col>
        <el-col :span="24">
          <div class="content-title">
            <div class="content-title-line"></div>
            <div class="content-title-text">项目经验</div>
            <div class="content-title-line"></div>
          </div>
          <article class="projectExperience">
            <section>
              <div class="project-title">
                <h3>招商后台管理系统</h3>
              </div>
              <div class="project-message">
                <div class="project-little-title">项目描述：</div>
                <p class="project-describe">
                  <span class="message">
                    此系统主要为公司内部运营人员服务，运营人员利用此系统每天抢占公海资源库的商机信息，并负责外呼跟进自己的商机信息，与潜在客户取得联系，促使其签订意向单，最后转化为与公司签订合同。
                  </span>
                </p>
              </div>
              <div class="project-message">
                <div class="project-little-title">技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                <p class="project-describe">
                  <span class="message">
                    <code>Vue2</code> + <code>Vue-router</code> + <code>Element-ui</code> + <code>webpack</code>
                  </span>
                </p>
              </div>
              <div class="project-message">
                <div class="project-little-title">工作内容：</div>
                <p class="project-describe">
                  <span class="message">
                     <i class="iconfont icon-dian skill-icon"></i>
                    维护此项目正常运行，功能迭代。(在职期间完成至少 86 个大大小小需求)</span>
                  <span class="message">
                     <i class="iconfont icon-dian skill-icon"></i>
                    封装了 Form 和 Table 公共组件。</span>
                  <span class="message">
                     <i class="iconfont icon-dian skill-icon"></i>
                    接入公司内部性能监控平台（北斗性能监控平台）。</span>
                </p>
              </div>
              <div class="project-message">
                <div class="project-little-title">成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果：</div>
                <p class="project-describe">
                  <span class="message">
                    <i class="iconfont icon-dian skill-icon"></i>
                    在 Element-ui 组件的基础上，封装适合公司系统 Form 和 Table 组件，提升开发效率 60% 以上，同时降低新同学上手项 &nbsp;&nbsp;&nbsp; 目难度，提升业务产出速度。
                  </span>
                  <span class="message">
                     <i class="iconfont icon-dian skill-icon"></i>
                    开发 webpack 插件，以配置的形式传入必要数据，极大的简化了项目接入性能监控平台的步骤。
                  </span>
                </p>
              </div>
            </section>
          </article>
          <article class="projectExperience">
            <section>
              <div class="project-title">
                <h3>商品配置后台</h3>
              </div>
              <div class="project-message">
                <div class="project-little-title">项目描述：</div>
                <p class="project-describe">
                  <span class="message">
                    此项目也为公司内部运营人员使用，用来配置商品进行出售。此项目所用到的技术和"招商后台管理系统"高度相似，所以和"招商后台管理系统"合并，并用 微前端 的思想进行技术改造，采用的是 webpack5 提供的模块联邦的解决方案。
                  </span>
                </p>
              </div>
              <div class="project-message">
                <div class="project-little-title">技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                <p class="project-describe">
                  <span class="message">
                    <code>Vue2</code> + <code>Vue-router</code> + <code>Element-ui</code> + <code>webpack</code>
                  </span>
                </p>
              </div>
              <div class="project-message">
                <div class="project-little-title">工作内容：</div>
                <p class="project-describe">
                  <span class="message">
                     <i class="iconfont icon-dian skill-icon"></i>
                    维护项目正常运行，功能迭代。</span>
                  <span class="message">
                     <i class="iconfont icon-dian skill-icon"></i>
                    按照微前端架构，将系统按照功能模块划分，细拆分为几个子服务，方便后续维护。</span>
                </p>
              </div>
            </section>
          </article>
          <article class="projectExperience">
            <section>
              <div class="project-title">
                <h3 class="link">个人UI组件库 &nbsp;&nbsp;&nbsp;&nbsp;<a class="link" href="https://wang-chuang.gitee.io/vue3-practice">组件库链接</a></h3>
              </div>
              <div class="project-message">
                <div class="project-little-title">项目描述：</div>
                <p class="project-describe">
                  <span class="message">
                    此项目为刚接触 vue3 时的练习项目，目的是为了学习 vue3 语法，并体验 vite 打包，项目中尝试使用了 TypeScript 语法。
                  </span>
                </p>
              </div>
              <div class="project-message">
                <div class="project-little-title">技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术：</div>
                <p class="project-describe">
                  <span class="message">
                    <code>vue3</code> + <code>vite</code> + <code>TypeScript</code>
                  </span>
                </p>
              </div>
              <div class="project-link">

              </div>
            </section>
          </article>
        </el-col>
      </el-row>
    </section>

    <footer class="footer" />
  </div>
</template>

<script>

export default {
  name: "App",
}
</script>

<style scoped lang="less">
.el-col {
  margin-bottom: 10px;
}
.content {
  padding: 22px 40px 0 40px;
  height: 1280px;
  background-color: #FFFFFF;
  border-radius: 0 0 5px 5px;

  .edu-title {
    //margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .major {
    margin: 10px 5px;
  }

  .content-title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content-title-line {
      width: 36%;
      height: 1px;
      background: #EDEDED;
    }
    .content-title-text {
      flex: 1;
      text-align: center;
      font-size: 14px;
      width: 24%;
      line-height: 30px;
      margin: 0 10px;
      background-color: #EEEEEE;
      border-radius: 20px;
    }
  }

  .professionalSkills, .workExperience, .projectExperience {
    .describe {
      width: 100%;
      display: flex;
      margin: 10px 0;
    }
    .skill-icon {
      text-align: center;
      line-height: 20px;
      width: 20px;
      height: 20px;
    }
    .message {
      flex: 1;
      display: block;
      font-size: 15px;
      word-wrap: break-word;
      word-break: normal;
    }
  }

  .workExperience {

    .little-title {
      margin-top: 10px;
      font-size: 16px;
    }
    .company-title {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }


  .projectExperience {

    .project-title {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project-message {
      display: flex;
      margin-top: 10px;

      .project-little-title {
        width: 80px;
        font-size: 16px;
      }

      .project-describe {
        flex: 1;
      }
      .link {
        display: inline-block;
        background-color: aqua;
      }
    }

    .project-link {
      margin-top: 10px;
      font-size: 16px;
    }
  }

  //.footer {
  //  margin: 20px auto 50px auto;
  //}
}


</style>