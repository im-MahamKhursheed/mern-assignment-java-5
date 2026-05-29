var paragraphs = document.getElementsByTagName("p");
for (let i = 1; i <= paragraphs.length; i++) {
    paragraphs[i-1].innerHTML = "This is paragraph number " + i;
}

