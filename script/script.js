document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu span"); // 메뉴 항목들
  const contentArea = document.querySelector(".content"); // content 영역

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const menuId = item.id;

      updateContent(menuId);

      menuItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  function updateContent(menuId) {
    let contentHTML = "";

    switch (menuId) {
      case "project":
        contentHTML = `
            <a
            ><img src="media/rootFinder.png" alt="rootFinder" />
            <div class="black"></div
          ></a>
          <a
            ><img src="media/roomMaker.png" alt="roomMaker" />
            <div class="black"></div>
          </a>
          <a
            ><img src="media/dMinusThree.png" alt="dMinusThree" />
            <div class="black"></div
          ></a>
          `;
        break;
      case "strength":
        contentHTML = `
            <div class="strength">
              <h2>"새로운 걸 배우는 걸 좋아하고, 맡은 일은 끝까지 해내는 책임감이 강한 사람입니다."</h2>
              <div class="card">
                <div class="card__title"><div>자격증(면허증)</div><div>취득연월</div></div>
                <div class="card__data">
                    <div class="card__right">
                        <div class="item">컴퓨터활용능력1급</div>
                        <div class="item">GTQ그래픽기술자격1급</div>
                        <div class="item">GTQ일러스트1급</div>
                        <div class="item">SQL 개발자(SQLD)</div>
                        <div class="item">데이터분석 준전문가(ADsP)</div>
                    </div>
                    <div class="card__left">
                        <div class="item">2018. 3</div>
                        <div class="item">2022. 6</div>
                        <div class="item">2022. 7</div>
                        <div class="item">2023. 11</div>
                        <div class="item">2022. 7</div>
                    </div>
                </div>
            </div>
          `;
        break;
      case "like":
        contentHTML = `
            <div>
              <h2>💕관심분야</h2>
              <p>웹 개발, 소프트웨어 공학, 인공지능 등에 관심이 많습니다.</p>
            </div>
          `;
        break;
      case "goal":
        contentHTML = `
            <div>
              <h2>🚩목표</h2>
              <p>앞으로 웹 개발자로서 성장하고 싶습니다!</p>
            </div>
          `;
        break;
      default:
        contentHTML = `<p>선택된 메뉴가 없습니다.</p>`;
    }

    contentArea.innerHTML = contentHTML;
  }
});
