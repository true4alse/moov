document.addEventListener("DOMContentLoaded", function () {
    const checkAll = document.getElementById("agrAll");
    const checkboxes = document.querySelectorAll(".agree");
  
    // "모두 동의" 클릭 시 하위 체크박스 전체 선택/해제
    checkAll.addEventListener("change", function () {
      checkboxes.forEach(chk => {
        chk.checked = checkAll.checked;
      });
    });
  
    // 하위 체크박스 상태에 따라 "모두 동의" 자동 체크/해제
    checkboxes.forEach(chk => {
      chk.addEventListener("change", function () {
        const allChecked = Array.from(checkboxes).every(chk => chk.checked);
        checkAll.checked = allChecked;
      });
    });
  });
  