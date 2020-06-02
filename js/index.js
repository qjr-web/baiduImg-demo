 // 当页面结构加载完成时做的事情
//  通过js实现图片区域大小的自适应
$(function(){
//    方法计算Ul的高度
    function computed() {
        // winW：当前浏览器窗口的大小
        let winW=document.documentElement.clientWidth;
        let h1=winW/4.18;
        let h2=winW/6.8;
        // 获取imageBOx中的ul，获取到6个
        let $imageBox=$('.imageBox');
        let $uls=$imageBox.find('ul');
        // 设置高度样式 eq(0)/eq(3)分别表示第一个和第四个
        $uls.css("height",h2);
        $uls.eq(0).css("height",h1);
        $uls.eq(3).css("height",h1);
    }
    // 页面加载完成就执行一遍
    computed();
    // 当浏览器大小改变执行一次
    $(window).on('resize',computed);
});

// 页卡切换
$(function(){
    // 获取两个a标签和两个imageBox
    let $links=$('.tab>a');
    let $imageBox=$('.imageBox');

    // 给a绑定点击事件，让其电机的时候做什么
    $links.click(function(){
        // $(this)当前点击的a
        // addClass('active')添加active样式类
        // slibings()剩余的aremoveClass('active')移除active样式
        $(this).addClass('active').siblings().removeClass('active');

        // 获取当前点击这个A的索引
        let index =$(this).index();
        //让$imageBox中和当前索引对应的那一个实现，其余的隐藏
        $imageBox.eq(index).css('display','block').siblings('.imageBox').css('display','none');
    })
})


//点击搜索
$(function(){
    // 操作谁就获取谁，获取inpSearch和.btnSearch两个标签
    let $inpSearch=$('.inpSearch');
    let $btnSearch=$('.btnSearch');
    // 获取文本框中的内容trim()去掉首位空格
    $btnSearch.click(function(){
        let searchText=$inpSearch.val().trim();
        // 如果所搜框没有输入内容，提示
        if(searchText.length===0) {
            alert('请输入关键词！');
            // 不再向下执行代码
            return;
        }
        // 有搜索内容，让其跳转页面，并且把搜索的内容携带过去
        window.location.href='https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word='+searchText;
    })
})