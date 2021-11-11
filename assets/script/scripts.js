!(function(e) {

    if (e("#token--pie-chart-light").length) {
        (s = document.getElementById("token--pie-chart-light")),
        (c = echarts.init(s)),
        (m = null);
        (m = {
            title: {
                text: "",
                left: "center",
                top: 20,
                textStyle: { color: "#1664bc" },
            },
            tooltip: { trigger: "item", formatter: "{a} <br/>{b} : ({d}%)" },
            visualMap: {
                show: !1,
                min: 80,
                max: 600,
                inRange: { colorLightness: [0, 1] },
            },
            series: [{
                name: "Distribution Of Tokens",
                type: "pie",
                radius: "90%",
                center: ["50%", "50%"],
                selectedMode: 'single',
                data: [{
                        value: 80,
                        name: "PreSale(Partial Locked)",
                        itemStyle: { color: '#c4dbf3' },
                    },
                    {
                        value: 20,
                        name: "Private Sale(Partial Locked)",
                        itemStyle: { color: '#d9e7f6' },
                    },
                    {
                        value: 350,
                        name: "Exchange Listing(Partial Governed)",
                        itemStyle: { color: '#245e99' },
                    },
                    {
                        value: 200,
                        name: "Company Reserve(Partial Locked)",
                        itemStyle: { color: '#336faf' },
                    },
                    {
                        value: 50,
                        name: "Partners(Locked)",
                        itemStyle: { color: '#4882bf' },
                    },
                    {
                        value: 100,
                        name: "Devolepment(Partial Locked)",
                        itemStyle: { color: '#5f96d0' },
                    },
                    {
                        value: 80,
                        name: "Team & Advisor(Partial Locked)",
                        itemStyle: { color: '#7babde' },
                    },
                    {
                        value: 20,
                        name: "Airdrop(Locked)",
                        itemStyle: { color: '#96bee8' },
                    },
                    {
                        value: 100,
                        name: "Marketing(unlocked)",
                        itemStyle: { color: '#aecef0' },
                    },
                ],
                label: { normal: { textStyle: { color: "#1664bc" } } },
                labelLine: {
                    normal: {
                        lineStyle: { color: "#1664bc" },
                        smooth: 0.2,
                        length: 10,
                        length2: 20,
                    },
                },
                itemStyle: {
                    normal: {
                        color: "#96bee8",
                        shadowBlur: 5,
                        shadowColor: "#fff",
                        shadowOffsetX: 0,
                    },

                },
                animationType: "scale",
                animationEasing: "elasticOut",
                animationDelay: function(e) {
                    return 200 * Math.random();
                },
            }, ],
        }) &&
        "object" == typeof m &&
            c.setOption(m, !1);
    }
    if (e("#update-chart").length) {
        (s = document.getElementById("update-chart")),
        (c = echarts.init(s)),
        (m = null);
        for (
            var p = [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                ],
                d = [
                    220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122,
                    133, 334, 198, 123, 125, 220,
                ],
                u = [],
                f = 0; f < d.length; f++
        )
            u.push(500);
        m = {
            title: { text: "", subtext: "" },
            xAxis: {
                data: p,
                axisLabel: { inside: !0, textStyle: { color: "#fff" } },
                axisTick: { show: !1 },
                axisLine: { show: !1 },
                z: 10,
            },
            yAxis: {
                axisLine: { show: !1 },
                axisTick: { show: !1 },
                axisLabel: { textStyle: { color: "#999" } },
            },
            dataZoom: [{ type: "inside" }],
            series: [{
                    type: "bar",
                    itemStyle: { normal: { color: "rgba(0,0,0,0.05)" } },
                    barGap: "-100%",
                    barCategoryGap: "40%",
                    data: u,
                    animation: !1,
                },
                {
                    type: "bar",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: "#d9e7f6" },
                                { offset: 0.5, color: "#c4dbf3" },
                                { offset: 1, color: "#188df0" },
                            ]),
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: "#d9e7f6" },
                                { offset: 0.7, color: "#c4dbf3" },
                                { offset: 1, color: "#83bff6" },
                            ]),
                        },
                    },
                    data: d,
                },
            ],
        };
        c.on("click", function(e) {
                console.log(p[Math.max(e.dataIndex - 3, 0)]),
                    c.dispatchAction({
                        type: "dataZoom",
                        startValue: p[Math.max(e.dataIndex - 3, 0)],
                        endValue: p[Math.min(e.dataIndex + 3, d.length - 1)],
                    });
            }),
            m && "object" == typeof m && c.setOption(m, !0);
    }
})(jQuery);