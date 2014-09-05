(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('MainCtrl', MainCtrl);
  
  /* @ngInject */
  function MainCtrl($scope, $state, authService, mainService) {
    $scope.cards = [];

    $scope.logout = logout;

    

    activate();


    function activate() {
      initData();
    }

    function initData() {

      mainService
        .getCards()
        .then(function(cards){
          $scope.cards = cards;

          initTempCardData();
        })
    }


    function logout() {
      authService.logout();
      $state.go('login');
    }

    /////////////////////// TEST //////////////////////////////////

    function initTempCardData() {
      $scope.cards = _.map($scope.cards, function(card) {
        
        

        card.alarmCount = Math.floor((Math.random() * 10) + 1);
        card.message = {
          text: getTempMessage,
          created_at: Date.now(),
          from: {
            name: '사용자'+ (Math.floor((Math.random() * 10) + 1))
          }
        }
        return card;
      })
    }

    function getTempMessage() {

      var messages = [
        '키워드 몇 개 걸어놨죠 ㅎㅎ 투자 라던가',
        '투자 받으면 저한테도 맛난 거 좀 사주세요~',
        'Duopen (무료) 맥에서 어떤 프로그램에 대한 멀티테스킹 작업을 하려면 프로그램을 여러번 실행하는 것이 아니라 복수의 창을 띄우는 것이 일반적인 방법입니다. 하지만 일부 프로그램은 창을 여러 개 띄울 수',
        '2004년에 설립된 튜터그룹은 연중무휴 24시간 서비스를 제공하는 온라인 영어, 중국어 교육업체로 총 40개국에서 2,000여 명의 강사(교사)들이 활동하고 있다. 튜터그룹 산하에는 3개의 온라인 영어 교육 업체로 브이아이피에이비씨(VIPABC, 중국과 아시아권을 위한 교육업체)와 브이아이피에이비씨 주니어(vipabcJr, 중국 내 8-18세를 위한 교육업체), 튜터에이비씨(TutorABC, 타이완을 위한 교육업체)가 있으며, 튜터그룹 본사도 튜터밍(TutorMing)이라고 하는 만다린어 교육서비스를 제공하고 있다. ',
        '우리나라에도 리모트 시스템 도입을 시도하고 있는 곳이 있네요. ㅋ 리모트 시스템을 도입하기 위한 메타규칙을 잘 정의해 놓은 것 같아요.',
        '스포카의 크리에이터팀이 리모트 시스템 도입 과정을 공개합니다.',
        '고생 많으셨습니다 다녀와서 뵙겠습니다 일 잘 하시고 돌아오세요 ㅎㅎ',
        '로켓에 올라타서 힘차게 오르길 기원합니다. 탈 자리 예약할 수 있게요..ㅎㅎㅎ',
        '격하게환영해드릴수있게준비하겠습니다!^^',
        '이제 미국 도착하셨겠네요 ㅎ 고생 많으셨어요~ 잘 다녀오세요 ^^',
      ]

      return messages[Math.floor((Math.random() * 10))];
    }

  }

})();
