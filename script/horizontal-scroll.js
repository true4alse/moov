document.addEventListener("DOMContentLoaded",function(){

    // 모든 horizontal-drag-scroll 요소에 드래그 스크롤 적용
    document.querySelectorAll('.horizontal-drag-scroll').forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;
  
        container.addEventListener('mousedown', (e) => {
          isDown = true;
          container.classList.add('active');
          startX = e.pageX - container.offsetLeft;
          scrollLeft = container.scrollLeft;
        });
  
        container.addEventListener('mouseleave', () => {
          isDown = false;
        });
  
        container.addEventListener('mouseup', () => {
          isDown = false;
        });
  
        container.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - container.offsetLeft;
          const walk = (x - startX) * 1; // 속도 조절
          container.scrollLeft = scrollLeft - walk;
        });
      });

})