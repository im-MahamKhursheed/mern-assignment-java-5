document.getElementById('evenNumbersList').innerHTML = getEvenNumbers(1, 20);

function getEvenNumbers(start, end) {
    const evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}