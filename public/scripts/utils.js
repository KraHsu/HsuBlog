const hsu = {
    calculateScrollPercentage: () => {
        // 获取当前页面滚动的高度
        let scrollPosition = document.documentElement.scrollTop || window.scrollY;

        // 获取页面的总高度
        let totalHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        ) - document.documentElement.clientHeight;

        // 计算滚动百分比并四舍五入
        let scrollPercentage = Math.round(scrollPosition / totalHeight * 100);

        // 获取用于显示百分比的元素
        let percentDisplayElement = document.getElementById("percent");

        // 计算可见窗口的底部位置
        var visibleWindowBottomPosition = window.scrollY + document.documentElement.clientHeight;

        // 获取网站底部元素
        let siteFooterElement = document.getElementById("site-footer");

        // 判断页面是否滚动到了网站的底部，或者滚动百分比是否超过了95%
        if (siteFooterElement.offsetTop + siteFooterElement.offsetHeight / 2 < visibleWindowBottomPosition || scrollPercentage > 95) {
            document.getElementById("menu-totop").classList.add("tobottom");
        } else {
            document.getElementById("menu-totop").classList.remove("tobottom");

            // 如果滚动百分比是有效的，更新显示的百分比
            if (scrollPercentage >= 0) {
                percentDisplayElement.innerHTML = scrollPercentage;
            }
        }

        // 判断页面是否在顶部，更改 header 的 class
        let header = document.getElementById("site-header");
        scrollPercentage > 0 ? header.classList.add("not-top") : header.classList.remove("not-top");
    },
    scrollToDestination: (destination, duration) => {
        // 初始值检查，如果e或t小于0，直接返回
        if (destination < 0 || duration < 0) {
            return;
        }

        // 获取当前窗口滚动的垂直位置
        const currentPos = window.scrollY || window.screenTop;

        // 让目标位置上方空出70px的位置
        destination -= 70;

        // 检查浏览器是否支持CSS的平滑滚动
        if ("CSS" in window && CSS.supports("scroll-behavior", "smooth")) {
            // 如果支持，使用CSS的平滑滚动
            window.scrollTo({
                top: destination,
                behavior: "smooth"
            });
            return;
        }

        // 如果不支持CSS的平滑滚动，使用JavaScript实现
        let startTime = null;
        duration = duration || 500; // 默认持续时间为500ms

        window.requestAnimationFrame(function scrollSmoothly(currentTime) {
            startTime = startTime || currentTime;

            if (currentPos < destination) {
                const timeElapsed = currentTime - startTime;
                window.scrollTo(0, (destination - currentPos) * timeElapsed / duration + currentPos);

                // 检查是否已经滚动到目标位置，如果没有，继续请求动画帧
                if (timeElapsed < duration) {
                    window.requestAnimationFrame(scrollSmoothly);
                } else {
                    window.scrollTo(0, destination);
                }
            } else {
                const timeElapsed = currentTime - startTime;
                window.scrollTo(0, currentPos - (currentPos - destination) * timeElapsed / duration);

                // 检查是否已经滚动到目标位置，如果没有，继续请求动画帧
                if (timeElapsed < duration) {
                    window.requestAnimationFrame(scrollSmoothly);
                } else {
                    window.scrollTo(0, destination);
                }
            }
        });
    },
    goToUrl: (url) => {
        window.location.href = url;
    },
    copyCode: function (element) {
        // 使用事件对象找到被点击的code-copy元素的父code-block
        const codeBlock = element.closest('.code-wrap');

        // 获取该code-block内的code标签的文本内容
        const codeContent = codeBlock.querySelector(".block-code").textContent;

        // 复制到剪贴板
        navigator.clipboard.writeText(codeContent).then(function () {
            // 成功复制后的操作
            console.log("代码已成功复制到剪贴板!");
        }).catch(function (err) {
            // 如果出现错误，例如用户没有授予剪贴板权限
            console.error("无法复制代码:", err);
        });
    },
    toggleCollapse: function (element) {
        const codeBlock = element.closest('.code-block');
        codeBlock.classList.toggle('collapsed');
    },
    anchorScroll: function (event) {
        // 获取目标元素
        var target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            // 为 target 元素添加 'target-to' 类
            if (target.classList.contains('target-to')) {
                return
            }
            target.classList.add('target-to');

            // 两秒后移除 'target-to' 类
            setTimeout(function () {
                target.classList.remove('target-to');
            }, 1510);

            // 计算距离，考虑额外的偏移量
            // 4rem 需要转化为像素，这里假设 1rem = 16px，所以 4rem = 64px
            var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    },
    formatNumber: function (num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + "B";
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    },
    getJson: async function (url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return await response.json();
    },
    opensearch: function () {
        const search = document.getElementById("search")
        // document.dispatchEvent(new Event("opensearch"));

        search?.classList.remove("hide")
        document.body.style.overflow = "hidden";

    },
    closesearch: async function () {
        const search = document.getElementById("search")
        // document.dispatchEvent(new Event("closesearch"));

        search?.classList.add("begin-to-hide");
        await this.sleep(1000)
        search?.classList.remove("begin-to-hide")
        search?.classList.add("hide");

        document.body.style.overflow = "";
    },
    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    waitForGlobal: function (name, maxAttempts = 500) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (window[name] !== undefined) {
                    clearInterval(interval);
                    resolve(window[name]);
                } else if (attempts === maxAttempts) {
                    clearInterval(interval);
                    reject(new Error(`${name} is not defined after ${maxAttempts} attempts`));
                }
            }, 100);
        });
    },
    siblings: function (element, selector) {
        return [...element.parentNode.children].filter((child) => {
            if (selector) {
                return child !== element && child.matches(selector)
            }
            return child !== element
        })
    },
    changeTabs: function (element) {
        const tab = element.parentNode;
        const tabContents = tab.parentNode.nextElementSibling

        if (!tab.classList.contains('active')) {
            const oldTab = this.siblings(tab, '.active')[0]
            oldTab && oldTab.classList.remove('active')
            tab.classList.add('active')
            tabContents.children[oldTab.getAttribute("data-index")].classList.remove("active")
            tabContents.children[tab.getAttribute("data-index")].classList.add("active")
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', hsu.anchorScroll)
    }
});

console.log(`
██╗  ██╗███████╗██╗   ██╗    ██████╗ ██╗      ██████╗  ██████╗ 
██║  ██║██╔════╝██║   ██║    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
███████║███████╗██║   ██║    ██████╔╝██║     ██║   ██║██║  ███╗
██╔══██║╚════██║██║   ██║    ██╔══██╗██║     ██║   ██║██║   ██║
██║  ██║███████║╚██████╔╝    ██████╔╝███████╗╚██████╔╝╚██████╔╝
╚═╝  ╚═╝╚══════╝ ╚═════╝     ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
`)