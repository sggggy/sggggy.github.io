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
            ring: 2,
            label: "教练与唤醒",
            active: false,
            link: "../data_processing/Android.html",
            moved: 0
        },
		{
            quadrant: 0,
            ring: 3,
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
    ]
    //ENTRIES
});