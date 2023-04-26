function onTextChange(event: Event) {
    const input = event.target as HTMLTextAreaElement;
  
    const charCountElement = document.querySelector('#char-count') as HTMLSpanElement;
    charCountElement.innerText = input.value.length.toString();

    const wordCountElement = document.querySelector('#word-count') as HTMLSpanElement;
    const words = input.value.split(' ');
    wordCountElement.innerText = words[words.length - 1] === '' ?
        (words.length - 1).toString() :
        words.length.toString();
}

window.onload = function() {
    const input = document.querySelector('#text') as HTMLTextAreaElement;
    input.addEventListener('input', onTextChange);

    input.innerText = "안녕하세요. 저는 트위치에서 방송을 하고 있는 스트리머 케인입니다. 먼저 저의 말과 행동으로 인해 큰 피해를 끼치고 실망을 드린 샌드백님, 시청자 분들께 죄송합니다. 지금부터는...";
}