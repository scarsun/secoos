$(function(){

	// 二维码登录时的淡入淡出效果

	$(".login_ewm").mouseenter(function(){
		$(".ewm_img").stop(true).animate({"left":0,"width":136},400).next().stop(true).animate({"opacity":1},400);
	});

	$(".login_ewm").mouseleave(function(){
		$(".ewm_img").stop(true).animate({"left":59,"width":192},400).next().stop(true).animate({"opacity":0},400);
	});

	//刷新验证码

	$("#logImgCode").click(function(){

		changeCode();

	}).next().click(function(){

		changeCode();

	});
	//登录方式标题转换

	$(".login_title li").click(function(){

		$(this).addClass("on").siblings().removeClass("on");

	});

	//登录方式转换

	$(".login_title li:first").click(function(){

		$(".sao_login").show().next().hide();

	});

	$(".login_title li:last").click(function(){

		$(".pass_login").show().prev().hide();

	});
	//密码登录页面 

	//点击label的时候执行获得焦点函数

	$(".label_input").click(function(){

		$(this).next().focus();

	});
	//用户名框获得焦点时

	$(".username").focus(function(){

		$(this).addClass("inputfocus");

		$(".user_icon").addClass("user_icon_focus");

		$(this).prev().hide();

		$(".error_tip").hide();

	});

	//用户名框失去焦点

	$(".username").blur(function(){

		$(this).removeClass("inputfocus");

		$(".user_icon").removeClass("user_icon_focus");

		if($(this).val()==""){

			$(this).prev().show();

		}

	});

	//密码框获得焦点时

	$(".password").focus(function(){

		$(this).addClass("inputfocus");

		$(".pass_icon").addClass("pass_icon_focus");

		$(this).prev().hide();

		setInterval(function(){

			//显示验证码

			$(".checkMa").show();

		},300);

		$(".error_tip").hide();

	});

	//密码框失去焦点

	$(".password").blur(function(){

		$(this).removeClass("inputfocus");

		$(".pass_icon").removeClass("pass_icon_focus");

		if($(this).val()==""){

			$(this).prev().show();

		}

	});

	//验证码获得焦点

	$(".checkCode").focus(function(){

		$(this).addClass("inputfocus");

	});
	//验证码失去焦点

	$(".checkCode").blur(function(){

		$(this).removeClass("inputfocus");

	});

	//正则验证

	$(".iForm").submit(function(e){

		//用户名

		if($(".username").val()==""){

			//阻止默认提交行为

			e.preventDefault();

			$(".error_tip").show().text("请输入用户名");

		}else{

				//密码

			if($(".password").val()==""){

				e.preventDefault();

				$(".error_tip").show().text("请输入密码");

			}else{

				//验证码

				if($(".checkCode").val()==""){

					e.preventDefault();

					$(".error_tip").show().text("请输入验证码");
					
				}
			}
		}
	});
});
