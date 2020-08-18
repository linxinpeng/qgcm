$(function () {
    layui.use(['laypage', 'layer'], function () {

        var laypage = layui.laypage
            , layer = layui.layer;

        $('#search-input').on('focus', function () {
            $(this).parent('.ipt-box').addClass('ipt-box-active')
        })
        $('#search-input').on('blur', function () {
            $(this).parent('.ipt-box').removeClass('ipt-box-active')
        })

        $('.send-btn').off('click').on('click', function () {
            location.href = "./push-need.html"
        })


        //查看信息按钮事件
        $('.search-list').undelegate('.show-btn', 'click').delegate('.show-btn', 'click', function () {
            //获取当前点击的盒子DOM
            const el = $(this).closest('.table-box')
            //移除所有的激活项  只激活当前的box
            el.toggleClass('is-expand')
        })

        //初始化页面page
        laypage.render({
            elem: 'search-page',
            prev: '<img src="/images/prev.png" style="width: 14px;"/>',
            next: '<img src="/images/next.png" style="width: 14px;"/>'
            , count: 100
            , layout: ['count', 'prev', 'page', 'next', 'skip']
            , jump: function (obj) {
                console.log(obj)
            },

        });

        setTimeout(() => {
            $('.search-list').css('display', 'block')
        }, 100)
    })
})