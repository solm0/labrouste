// 스마트 인용 부호로 변환하는 함수
 function convertToSmartQuotes(input) {
  return input
  .replace(/(^|[-\u2014\s(\["])'/g, "$1‘") // 시작하는 작은따옴표
  .replace(/'/g, '’') // 끝나는 작은따옴표
  .replace(/(^|[-\u2014\s(\["])"/g, "$1“") // 시작하는 큰따옴표
  .replace(/"/g, '”'); // 끝나는 큰따옴표
}

// 텍스트 입력이 변경될 때 스마트 인용 부호 적용
function applySmartQuotes() {
  var fontInput = document.getElementById('fontInput');
  var convertedText = convertToSmartQuotes(fontInput.value);
  fontInput.value = convertedText;
}





function handleInput() {
    const textarea = document.getElementById('fontInput');
    const displayArea = document.getElementById('displayArea');
    displayArea.innerText = textarea.value;
  }

  function changeFontSize(size) {
    const textarea = document.getElementById('fontInput');
    switch (size) {
      case 'small':
        textarea.style.fontSize = '50px';
        break;
      case 'medium':
        textarea.style.fontSize = '90px';
        break;
      case 'large':
        textarea.style.fontSize = '150px';
        break;
      default:
        break;
    }
  }

  function changeTextAlignment(align) {
    var fontInput = document.getElementById("fontInput");
    fontInput.style.textAlign = align;
  }

  // 버튼을 클릭할 때 해당 텍스트 정렬 함수 호출
  document.querySelector(".buttonarea2 button:nth-child(1)").addEventListener("click", function () {
    changeTextAlignment("left");
  });

  document.querySelector(".buttonarea2 button:nth-child(2)").addEventListener("click", function () {
    changeTextAlignment("center");
  });

  document.querySelector(".buttonarea2 button:nth-child(3)").addEventListener("click", function () {
    changeTextAlignment("right");
  });

  // 스크롤 이벤트를 감지하여 텍스트 크기 조절
  document.addEventListener('scroll', function (event) {
    const textarea = document.getElementById('fontInput');
    const scrollValue = window.scrollY; // 현재 스크롤 값
    // 텍스트 크기를 스크롤 값에 비례하여 조절
    const fontSize = 50 + (scrollValue * 0.5); // 예시로 스크롤 값의 절반을 더한 값으로 크기 조절
    textarea.style.fontSize = fontSize + 'px';
  });