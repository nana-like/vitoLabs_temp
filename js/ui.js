// --------------------------
// [*] 커서 이벤트
function cursorEvt() {
  const cursor = document.querySelector('.cursor'); //커서 모양이 될 하트 요소
  const link = document.querySelector('.footer__link'); //푸터 링크

  cursor.style.top = 0;
  cursor.style.left = 0;

  document.addEventListener('mousemove', function (e) {
    cursor.style.setProperty("opacity", 1); //opacity 0으로 숨겨져 있던 걸 드러냄
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + "px";
  });

  link.addEventListener('mouseenter', function () {
    cursor.classList.add('hover');
  });

  link.addEventListener('mouseleave', function () {
    cursor.classList.remove('hover');
  });
}

// --------------------------
// [*] 유저에이전트 이벤트
function userAgentEvt() {

  //모바일인 경우 (for .isMobile로 커서 안 보이게 처리)
  if (navigator.userAgent.match(
      'LG | SAMSUNG | Samsung | iPhone | iPod | Android | Windows CE | BlackBerry | Symbian | Windows Phone | webOS | Opera Mini | Opera Mobi | POLARIS | IEMobile | lgtelecom | nokia | SonyEricsson'
    )) {
    document.querySelector("body").classList.add("isMobile");
  }

  // IE인 경우 (for SVG 크기 직접 지정)
  document.documentElement.setAttribute("data-agent", navigator.userAgent);

}

// --------------------------
// [*] 카운트다운 이벤트
function countDownEvt() {

  var countSetDate = "2019-04-01";
  var countSetTime = "00:00:00";

  var daysText = document.querySelector(".countdown__days .countdown__number"),
    hoursText = document.querySelector(".countdown__hours .countdown__number"),
    minutesText = document.querySelector(".countdown__minutes .countdown__number");
  var countDownDate = new Date(countSetDate + "T" + countSetTime + "+09:00").getTime();


  function count() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = '0' + (Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = '0' + (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = '0' + ((Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))) + 1); //초단위가 없기 때문에 +1 (ex. 현재 12분인데 15분까지 남은 건 2분 40초임. 하지만 초단위가 없어서 2분 남았다고 화면 상에 보임. 이 경우 보통 3분 남았다고 인식하므로 +1을 해줌)

    days = days.slice(-2);
    hours = hours.slice(-2);
    minutes = minutes.slice(-2);

    if (distance < 0) { //정한 시간을 지난 경우
      clearInterval(countInterval);
      daysText.innerHTML = "00";
      hoursText.innerHTML = "00";
      minutesText.innerHTML = "00";
    }

    daysText.innerHTML = days;
    hoursText.innerHTML = hours;
    minutesText.innerHTML = minutes;
  }

  count();

  var countInterval = setInterval(function () {
    count();
  }, 1000);

}

// --------------------------
// [*] 초기 실행 이벤트
function initEvt() {
  cursorEvt();
  userAgentEvt();
  countDownEvt();
  document.querySelector(".wrap").classList.remove("veiled");
}


window.addEventListener("load", function () {
  initEvt();
  console.log("%cHello, we are vito labs!", "background-color: #222222; color:#ffffff; padding: 4px 6px;");
});