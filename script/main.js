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
            <a href="project.html" data-content="rootFinder"
            ><img src="media/rootFinder.png" alt="rootFinder" />
            <div class="black"></div
          ></a>
          <a href="project.html" data-content="roomMaker"
            ><img src="media/roomMaker.png" alt="roomMaker" />
            <div class="black"></div>
          </a>
          <a href="project.html" data-content="dMinusThree"
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
                <div class="card_title"><div>자격증(면허증)</div><div>취득연월</div></div>
                <div class="card_data">
                    <div class="card_right">
                        <div class="item">컴퓨터활용능력1급</div>
                        <div class="item">GTQ그래픽기술자격1급</div>
                        <div class="item">GTQ일러스트1급</div>
                        <div class="item">데이터분석 준전문가(ADsP)</div>
                        <div class="item">SQL 개발자(SQLD)</div>
                    </div>
                    <div class="card_left">
                        <div class="item">2018. 3</div>
                        <div class="item">2022. 6</div>
                        <div class="item">2022. 7</div>
                        <div class="item">2023. 7</div>
                        <div class="item">2023. 11</div>
                    </div>
                </div>
            </div>
          `;
        break;
      case "like":
        contentHTML = `
            <div class="like">
              <div>
                <img src ="media/js.png" art="js">
                <img src ="media/next.png" art="next.js">
              </div>
              <div>
                <img src ="media/node.png" art="node.js">
                <img src ="media/react.png" art="react">
              </div>
              <div>
                <img src ="media/typeScript.png" art="typeScript">
              </div>  
            </div>
          `;
        break;
      case "goal":
        contentHTML = `
            <div class="goal">
              <h2>MY GOAL‼️</h2>
              <table>
                <tr>
                  <td><strong>프론트엔드 기술 강화:</strong></td>
                  <td>React, Next.js, TypeScript 등을 학습<br>하여 웹 애플리케이션 개발 능력 향상</td>
                </tr>
                <tr>
                  <td><strong>백엔드 경험 쌓기:</strong></td>
                  <td>Node.js와 Express로 서버 구축 및 API 개발</td>
                </tr>
                <tr>
                  <td><strong>풀스택 웹 개발자로 성장:</strong></td>
                  <td>클라이언트와 서버 모두 다룰 수 있는<br>능력 강화</td>
                </tr>
              </table>
            </div>

          `;
        break;
      default:
        contentHTML = `<p>선택된 메뉴가 없습니다.</p>`;
    }

    contentArea.innerHTML = contentHTML;
  }
});
