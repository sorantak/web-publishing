// HTML 시작 시 이 .js 파일의 스크립트 코드가 동시 실행됨을 의미
$(document).ready(function(){
    $("#container").addClass("start");
    // 내비게이션 클릭 시
	$("nav li").click(function(){
        $("#container").css("max-width", "100%");
        // data 값을 선택자로 사용할 수 있는 변수 생성
        var id=$(this).attr("data-rol");
        // 클래스 삭제
        $("nav li").removeClass("on");
        // 클래스 추가
        $(this).addClass("on");
        // 클릭 시 가지고 있던 클래스 모두 지움
        $(".content").removeClass("prev this next");
        // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 <section>은 .prev로 설정
        $("#" + id).addClass("this").prevAll().addClass("prev");
        // 뒤는 .next
        $("#" + id).nextAll().addClass("next");
    });
    // 로고 클릭 시
    $(".logo_box").click(function(){
		$("nav li").removeClass("on");
        $(".content").removeClass("pre this next");
        $("#container").css("max-width", "100%");
    });
});

