// 좋아요 버튼 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {

    
    // 모든 좋아요 버튼 요소들을 선택
    const likeButtons = document.querySelectorAll('.like svg');
    
    // 각 좋아요 버튼에 클릭 이벤트 리스너 추가
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 이벤트 방지
            
            // 클릭된 버튼의 부모 요소인 .like 클래스를 찾음
            const likeContainer = this.closest('.like');
            
            // 좋아요 수를 표시하는 span 요소
            const likeCount = likeContainer.querySelector('.likeNum');
            
            // 현재 좋아요 상태 확인 (on 클래스 존재 여부)
            const isLiked = likeContainer.classList.contains('on');
            
            if (isLiked) {
                // 이미 좋아요가 눌린 상태라면
                likeContainer.classList.remove('on');
                // 좋아요 수 감소
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
            } else {
                // 좋아요가 안 눌린 상태라면
                likeContainer.classList.add('on');
                // 좋아요 수 증가
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
            }
        });
    });
});