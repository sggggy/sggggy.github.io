radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
    },
    title: "sggggy的技术雷达 — 2018.12",
    quadrants: [
        { name: "技能" },
        { name: "技术" },
        { name: "工具" },
        { name: "基础设施与平台" }
    ],
    rings: [
        { name: "采用", color: "#93c47d" },
        { name: "试验", color: "#93d2c2" },
        { name: "评估", color: "#fbdb84" },
        { name: "暂缓", color: "#efafa9" }
    ],
    print_layout: true,
    // zoomed_quadrant: 0,
	// 0 技能 象限
	// 1 技术 象限
	// 2 工具 象限
	// 3 基础设施与平台 象限
	// 0 采用 环
	// 1 实验 环
	// 2 评估 环
	// 3 暂缓 环
    //ENTRIES
    entries: [
	// 技能
        {
            quadrant: 0,
            ring: 0,
            label: "时间管理",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 0,
            ring: 0,
            label: "创建知识领域",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 0,
            ring: 1,
            label: "教练与唤醒",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 0,
            ring: 1,
            label: "即兴表演",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 0,
            ring: 0,
            label: "语言学习",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
	//	技术
		{
            quadrant: 1,
            ring: 0,
            label: "自由泳",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 1,
            label: "盖洛普优势管理",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },	
		{
            quadrant: 1,
            ring: 0,
            label: "骑行",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 0,
            label: "云计算",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 0,
            label: "翻墙",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 1,
            label: "姿势跑法",
            active: false,
            link: "https://sggggy.github.io/docs/posemethod/index",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 1,
            label: "教练",
            active: true,
            link: "https://sggggy.github.io",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 1,
            label: "敏捷",
            active: true,
            link: "https://sggggy.github.io/docs/scrum/index",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 1,
            label: "极限编程",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 1,
            ring: 1,
            label: "持续集成/构建",
            active: true,
            link: "",
            moved: 0
        },
	// 工具
		{
            quadrant: 2,
            ring: 0,
            label: "Coach's Eye",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "纸&笔",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "白板",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "录音笔",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "便条贴",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "手摇碎纸机",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 2,
            label: "喵喵/咕咕机",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "Ipad Pro",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "Macbook air",
            active: true,
            link: "",
            moved: 0
        },	
		{
            quadrant: 2,
            ring: 3,
            label: "Iphone XS Max",
            active: true,
            link: "",
            moved: 0
        },	
		{
            quadrant: 2,
            ring: 0,
            label: "PlayStation 4",
            active: true,
            link: "",
            moved: 0
        },	
		{
            quadrant: 2,
            ring: 3,
            label: "PlayStation Vita",
            active: true,
            link: "",
            moved: -1
        },	
		{
            quadrant: 2,
            ring: 3,
            label: "Mac mini",
            active: true,
            link: "",
            moved: 0
        },	
		{
            quadrant: 2,
            ring: 3,
            label: "iPad mini 2",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 3,
            label: "Iphone6s Plus",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 0,
            label: "Xmind ZEN",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 2,
            ring: 3,
            label: "Wii U",
            active: true,
            link: "",
            moved: 0
        },	
			{
            quadrant: 2,
            ring: 0,
            label: "Nintendo New 2DSLL",
            active: true,
            link: "",
            moved: 0
        },		
	// 平台
		{
            quadrant: 3,
            ring: 1,
            label: "可汗学院",
            active: true,
            link: "https://khanacademy.org",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 1,
            label: "跑步学院",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "Garmin",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "Trainpeaks",
            active: true,
            link: "https://app.trainingpeaks.com",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "TrainerRoad",
            active: true,
            link: "http://trainerroad.com",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 3,
            label: "为知笔记",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "iCloud",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "坚果云",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "Steam",
            active: true,
            link: "",
            moved: 0
        },	
		{
            quadrant: 3,
            ring: 0,
            label: "Sony PlayStation Network",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "Nintendo Network",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "AWS",
            active: true,
            link: "",
            moved: 0
        },
		{
            quadrant: 3,
            ring: 0,
            label: "AliCloud",
            active: true,
            link: "",
            moved: 0
        },
    ]
    //ENTRIES
});