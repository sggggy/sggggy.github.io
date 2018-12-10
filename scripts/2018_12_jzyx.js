radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
    },
    title: "极致游戏技术雷达 — 2018.12",
    quadrants: [
        { name: "语言与框架" },
        { name: "基础设施与平台" },
        { name: "工具" },
        { name: "技术" }
    ],
    rings: [
        { name: "采用", color: "#93c47d" },
        { name: "试验", color: "#93d2c2" },
        { name: "评估", color: "#fbdb84" },
        { name: "暂缓", color: "#efafa9" }
    ],
    print_layout: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries: [
        //  <!-- 运营 平台开发部 START -->
        {
            quadrant: 3,
            ring: 0,
            label: "营-安卓",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "营-IOS",
            active: false,
            link: "../data_processing/IOS.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "营-Web",
            active: false,
            link: "../data_processing/web.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "营-HTML5",
            active: false,
            link: "../data_processing/HTML5.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-阿里云大数据",
            active: false,
            link: "../data_processing/ali_MaxCompute.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-阿里云流计算",
            active: false,
            link: "../data_processing/StreamCompute.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-阿里云日志服务",
            active: false,
            link: "../data_processing/SLS.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "阿里云 Logtail",
            active: false,
            link: "../data_processing/Logtail.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "营-阿里云 DataX",
            active: false,
            link: "../datastores/DataX.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "营-阿里云 DataHub",
            active: false,
            link: "../datastores/DataHub.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "营-阿里云开放存储服务",
            active: false,
            link: "../datastores/OSS.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 2,
            label: "营-阿里云Quick BI",
            active: false,
            link: "../datastores/Quick.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 2,
            label: "营-阿里云DataV",
            active: false,
            link: "../datastores/DataV.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 2,
            label: "营-NodeJS",
            active: false,
            link: "../datastores/NodeJS.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "GIT|Source Tree",
            active: true,
            link: "../datastores/GIT.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "营-AndroidStudio",
            active: false,
            link: "../datastores/AndroidStudio.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "营-PhpStorm",
            active: false,
            link: "../datastores/PhpStorm.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "营-Requirejs",
            active: false,
            link: "../datastores/Requirejs.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "营-Eclipse",
            active: false,
            link: "../datastores/Eclipse.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Xcode&AppStore",
            active: false,
            link: "../frameworks/Xcode.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "营-Pycharm",
            active: false,
            link: "../frameworks/Pycharm.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "IntelliJ IDEA",
            active: false,
            link: "../frameworks/IDEA.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "营-Kattle",
            active: false,
            link: "../frameworks/Kattle.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Mdaemon|Openvpn",
            active: false,
            link: "../frameworks/营-Notepad++.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: "营-Fis3",
            active: false,
            link: "../frameworks/营-Fis3.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: "营-Doclever",
            active: false,
            link: "../frameworks/营-Doclever.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-PHP",
            active: false,
            link: "../frameworks/营-PHP.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "JavaScript",
            active: false,
            link: "../frameworks/营-JavaScript.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-CSS",
            active: false,
            link: "../frameworks/营-CSS.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Java",
            active: false,
            link: "../frameworks/Java.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Objective-C",
            active: false,
            link: "../frameworks/Objective-C.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-HTML5",
            active: false,
            link: "../frameworks/营-HTML5.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-Groovy",
            active: false,
            link: "../frameworks/营-Groovg.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-Less",
            active: false,
            link: "../frameworks/vuejs.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-Bootstrap",
            active: false,
            link: "../frameworks/营-Bootstrap.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-Grails",
            active: false,
            link: "../frameworks/营-Grails.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-Python 2.7",
            active: false,
            link: "../frameworks/营-Python.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-Django",
            active: false,
            link: "../frameworks/营-Django.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Mysql存储过程",
            active: false,
            link: "../infrastructure/营-Mysql存储过程.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 1,
            label: "Go",
            active: false,
            link: "../infrastructure/Golang.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 2,
            label: "营-Beego",
            active: false,
            link: "../infrastructure/营-Beego.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 3,
            label: "营-React",
            active: false,
            link: "../infrastructure/营-React.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-Apache",
            active: false,
            link: "../infrastructure/营-Apache.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-PHP5.3",
            active: false,
            link: "../infrastructure/营-PHP5.3.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-Memcache",
            active: false,
            link: "../infrastructure/营-Memcache.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-阿里云ECS",
            active: false,
            link: "../infrastructure/营-ali ECS.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-阿里云RDS",
            active: true,
            link: "../infrastructure/营-ali RDS.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "营-Tomcat|Nginx",
            active: true,
            link: "营-Tomcat|Nginx.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: "营-PHP7+",
            active: true,
            link: "营-PHP7+.html",
            moved: 0
        },
        //   <!-- 运营 平台开发部 END -->
        //   <!-- OM 运维部 START -->
        {
            quadrant: 3,
            ring: 0,
            label: "SRE-混合云计算",
            active: true,
            link: "混合云计算.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "SRE-持续部署/集成",
            active: true,
            link: "集成.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "SRE-HTTPS",
            active: true,
            link: "HTTPS.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "SRE-SQL",
            active: true,
            link: "typescript.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "SRE-NOSQL",
            active: true,
            link: "elm.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "研-代码审核工作流",
            active: true,
            link: "codereview.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "研-Go分布式游戏服务端架构",
            active: true,
            link: "go-server.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "Cocos-Creator",
            active: true,
            link: "r.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 2,
            label: "研-Erlang分布式游戏服务端集群",
            active: true,
            link: "1.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 2,
            label: "基于数据分析的决策系统",
            active: true,
            link: "c_languages.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 3,
            label: "SRE-Docker",
            active: true,
            link: "SRE-Docker.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Mattermost IM",
            active: true,
            link: "Mattermost.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: "SRE-Ansible",
            active: true,
            link: "Ansible.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "SRE-Zabbix 2.4.7",
            active: true,
            link: "Zabbix.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: "SRE-VMware Hyper",
            active: true,
            link: "VMware hypervisor.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "深信服 AC/AD",
            active: false,
            link: "../queues/aws_sns.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Tp-link 无线方案",
            active: false,
            link: "../queues/link.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: "JIRA v5.1.4",
            active: false,
            link: "../queues/kafka.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "JIRA v7.4.2",
            active: false,
            link: "../queues/nakadi.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: "Confluence v5.5.7",
            active: false,
            link: "../queues/wiki.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: "Confluence v3.2",
            active: false,
            link: "../queues/activemq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "Confluence v6.3.3",
            active: false,
            link: "../queues/hornetq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: "CentOS 5.x",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "CentOS 6.x/7.x",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "Jenkins CD/CI工具",
            active: false,
            link: "../queues/Jenkins.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Gogs GIT协作平台",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: "Phabricator代码审核",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "研-基于Go的分布式游戏服务端架构",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 1,
            label: "研-Erlang",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "研-C/C++",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-PHPcms",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-CI框架",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "研-LUA",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 3,
            label: "研-魔侠V8游戏引擎",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 3,
            label: "研-Cocos2d-js",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "研-Unity3D",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "阿里云 云盾",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "阿里云 云解析",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "AnySDK 企业版",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 3,
            label: "Qcloud 腾讯云",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "营-DZ框架",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "NOD32杀软",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "Windows域/文件/补丁",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        // <!-- OM 运维部 END -->
        // <!-- OM 研发 START -->
        {
            quadrant: 3,
            ring: 0,
            label: "研-DirectX",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "研-wke(内嵌浏览器）",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "研-二维码支付",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "自动更新",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "研-VS|VA",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "研-windbg",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 3,
            label: "研-APEX反外挂",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 0,
            label: "研-数字签名",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 1,
            label: "研-Python",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "研-Zookeeper",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "阿里云 MongoDB",
            active: false,
            link: "../queues/MongoDB.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "阿里云 Redis",
            active: false,
            link: "../queues/Redis.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "研-Leaf",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "研-pngquant",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: "研-Tolua",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: "研-UWA Unity优化",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "研-Substance Painter",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "研-SpineBone",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "研-Bugly|Wetest",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "研-讯飞语音",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        // <!-- OM 研发 END   -->

        // <!-- QA 测试 START -->
        {
            quadrant: 0,
            ring: 0,
            label: "QA-Python",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 0,
            ring: 1,
            label: "QA-C#",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: "QA-WeTest",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: "QA-vsCode",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        {
            quadrant: 3,
            ring: 1,
            label: "QA-自动化测试",
            active: false,
            link: "../queues/rabbitmq.html",
            moved: 0
        },
        // <!-- QA 测试 END   -->

    ]
    //ENTRIES
});