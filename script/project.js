const data = {
  rootFinder: {
    img: "media/rootFinder.png",
    content:
      "여행 계획이 어렵게 느껴진다면? <br> 항상 같은 장소만 여행한다면? <br> RootFinder에서 나랑 비슷한 사람들이 추천한 코스를 따라가 보는 것도 좋은 방법이에요 :) <br>혹시 몰라요! 새로운 맛집이나 취향인 공간을 찾게 될 수도...✨",
    tag: "#여행 #여행커뮤니티 #루트와일정공유 #커뮤니티(댓글,대댓글환영) #rootFinder #루트파인더<br>#이클립스 #백엔드 #MVC패턴 #jdk11 #첫프로젝트 #MAVEN #GRADLE #APACHE_TOMCAT #ORACLE",
    date: "2023. 06",
  },
  roomMaker: {
    img: "media/roomMaker.png",
    content:
      "스터디를 해야 하는데...매번 자료공유하고 공지 하기 귀찮네...😢<br>어떻게 모여야 할까?<br> 그럴 땐 RoomMaker로 같이 공부하자! 어떤 파일이든 공유 가능! 채팅으로 팀원들과 소통하고 <br>AI 선생님에게 무엇이든 물어보기!<br> 심지어 password 설정으로 프라이빗하기까지...?!",
    tag: "#스터디 #자료공유 #채팅 #공지 #AI챗봇 #roomMaker #룸메이커 <br>#스프링프로젝트 #백엔드 #STS3 #jdk11 #MAVEN #GRADLE #APACHE_TOMCAT #MySQL",
    date: "2023. 12",
  },
  dMinusThree: {
    img: "media/dMinusThree.png",
    content:
      "D-3로 효율적인 일정 관리를! 마감일이 오늘인 리스트와 모든 리스트를 따로 본다고?🤩<br>플로팅위젯으로 D-3인 일정들 미리보기!",
    tag: "#스케줄관리 #일정수정&일정삭제 #페이징처리 #D-3<br>#인하공전멘토링 #vanillaJS로SPA구현하기 #HTML #tailWindCSS #JS #vsc #noFrameWork ",
    date: "2025. 04",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const project = params.get("project");

  if (project && data[project]) {
    const item = data[project];
    const $img = document.querySelector(".project_img");
    const $ment = document.querySelector(".ment");
    const $tag = document.querySelector(".tag");
    const $date = document.querySelector(".date");

    if ($img) {
      $img.src = item.img;
    }
    if ($ment) {
      $ment.innerHTML = item.content || "내용이 없습니다.";
    }
    if ($tag) {
      $tag.innerHTML = item.tag;
    }
    if ($date) {
      $date.innerHTML = item.date;
    }
  } else {
    document.getElementById("content_body").innerHTML =
      "<p>해당 프로젝트를 찾을 수 없습니다.</p>";
  }

  const $project_symbol = document.querySelector("#project_symbol img");

  $project_symbol.addEventListener("click", (e) => {
    const src = e.target.src.split("/");
    const imgName = src[src.length - 1];

    if (imgName === "no_active_heart.png") {
      $project_symbol.src = "media/active_heart.png";
      $project_symbol.alt =
        "https://www.flaticon.com/kr/free-icon/love_15883620?term=like&page=1&position=20&origin=search&related_id=15883620";
    } else {
      $project_symbol.src = "media/no_active_heart.png";
      $project_symbol.alt =
        "https://www.flaticon.com/kr/free-icon/heart_18668438?term=like&page=1&position=24&origin=search&related_id=18668438";
    }
  });
});
