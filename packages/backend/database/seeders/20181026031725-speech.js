'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    // subject: DataTypes.STRING,
    //   introduce: DataTypes.STRING,
    //   url: DataTypes.STRING,
    //   isPPT: DataTypes.BOOLEAN,
    //   direction: DataTypes.STRING,
    //   tags: DataTypes.STRING,
    //   pre_knowledge: DataTypes.STRING,
    //   speaker_name: DataTypes.STRING,
    //   speech_date: DataTypes.DATE
    return queryInterface.bulkInsert('Speeches', [{
      subject: 'JavaScript 入门',
      introduce: 'JavaScript 的入门介绍',
      url: 'http://www.blog.com/posts/111',
      isPPT: false,
      // frontend backend AI Game Android IOS DL ML Algorithm
      direction: 'frontend',
      tags: 'javascript,ES6',
      pre_knowledge: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语'
      + '言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端'
      + '的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增'
      + '加动态功能。',
      speaker_name: '牛德华',
      speech_date: '2018-10-28',
      s_no: '17058511',
    }, {
      subject: 'PHP web开发',
      introduce: 'PHP web开发实战',
      url: 'http://www.blog.com/posts/222',
      isPPT: false,
      // frontend backend AI Game Android IOS DL ML Algorithm
      direction: 'backend',
      tags: 'php,mvc',
      pre_knowledge: 'PHP（外文名:PHP: Hypertext Preprocessor，中文名：“超文本预处理器”）'
      + '是一种通用开源脚本语言。',
      speaker_name: '牛德华',
      speech_date: '2018-10-28',
      s_no: '17058511',
    }, {
      subject: 'HTML,CSS精讲',
      introduce: 'HTML,CSS入门详细介绍',
      url: '/path/to/html-css.pptx',
      isPPT: true,
      // frontend backend AI Game Android IOS DL ML Algorithm
      direction: 'frontend',
      tags: 'html5,css3',
      pre_knowledge: '层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标'
      + '准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。',
      speaker_name: '张雪有',
      speech_date: '2018-10-28',
      s_no: '16058522',
    }, {
      subject: 'mpvue小程序开发',
      introduce: '基于 mpvue 的小程序开发',
      url: 'http://www.blog.com/posts/333',
      isPPT: false,
      // frontend backend wxapp AI Game Android IOS DL ML Algorithm
      direction: 'wxapp',
      tags: 'vue,wxapp,mpvue',
      pre_knowledge: 'mpvue （github 地址请参见）是一个使用 Vue.js 开发小程序的前端框架。'
      + '框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以'
      + '运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。',
      speaker_name: '李明',
      speech_date: '2018-10-28',
      s_no: '16058533',
    }, {
      subject: 'Docker自动化部署',
      introduce: '利用 Docker 实行自动化部署',
      url: '/path/to/docker.pptx',
      isPPT: true,
      // frontend backend AI Game Android IOS DL ML Algorithm DevOps
      direction: 'frontend',
      tags: 'javascript,ES6',
      pre_knowledge: 'Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到'
      + '一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用'
      + '沙箱机制，相互之间不会有任何接口。',
      speaker_name: '郭负城',
      speech_date: '2018-10-28',
      s_no: '17058544',
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
