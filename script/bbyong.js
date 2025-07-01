function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

function getContentByBr(element) {
    const contentArray = element.innerHTML
      .split(/<br\s*\/?>/i)
      .map(item => item.trim())
      .filter(item => item)
    return contentArray;
}

function getFontStyles(element) {
  
    // 계산된 스타일 가져오기
    const computedStyle = window.getComputedStyle(element);
  
    // font-size와 line-height 값 가져오기
    let fontSize = computedStyle.fontSize;
    let lineHeight = computedStyle.lineHeight;
  
    // line-height가 'normal'일 경우 계산 (대략적으로 1.2 배율로 가정)
    if (lineHeight === 'normal') {
      const fontSizeValue = parseFloat(fontSize); // '16px' -> 16
      lineHeight = `${fontSizeValue * 1.2}px`; // 기본적으로 1.2 배율로 계산
    }
  
    return { fontSize, lineHeight };
}

document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll(".bbyong");

    tags.forEach(tag => {
        const textarray = getContentByBr(tag);
        const originalStyles = getFontStyles(tag);

        // 부모 스타일 (높이 고정 없이 자동)
        Object.assign(tag.style, {
            display: 'block',
            overflow: 'hidden',
            fontSize: '0',
            position: 'relative'
        });

        // 줄마다 span 처리
        const resultContent = textarray.map((line, i) => `
            <span style="
                display: block;
                transform: translateY(1em);
                transition: transform 0.6s ease ${0.1 * i}s;
            ">
                ${line}
            </span>
        `).join('');

        tag.innerHTML = resultContent;

        // span에 폰트 적용
        Array.from(tag.children).forEach(child => {
            child.style.fontSize = originalStyles.fontSize;
            child.style.lineHeight = originalStyles.lineHeight;
            child.style.boxSizing = 'border-box';
        });
    });

    // IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Array.from(entry.target.children).forEach(child => {
                    child.style.transform = 'translateY(0)';
                });
            } else {
                Array.from(entry.target.children).forEach(child => {
                    child.style.transform = 'translateY(1em)';
                });
            }
        });
    }, { threshold: 1 });

    tags.forEach(tag => observer.observe(tag));
});

