window.addEventListener('load', () => {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        let arr = document.querySelector('.array').value;
        let splittedString = arr.split(',');
        let myArr = Array.from(splittedString);
        let arrayLimit = parseInt(document.querySelector('.arrayLimit').value);
        let results = document.querySelector('.resultsDisplay');;

        function sequence(arr, limit) {
            let newARR = [...arr]
            function addLastArrayValues() {
                let nextNum = parseFloat(newARR[newARR.length - 2]) + parseFloat(newARR[newARR.length - 1])
                newARR.push(nextNum);
                return newARR;
            }

            let updatedARR = addLastArrayValues();

            function decider() {
                if (updatedARR[updatedARR.length - 1] >= limit) {
                    if (updatedARR[updatedARR.length - 1] === limit) {
                        return updatedARR;
                    } else {
                        updatedARR.pop();
                        return updatedARR;
                    }

                } else {
                    return sequence(updatedARR, limit)
                }
            }
            return decider();
        }

        if ((arrayLimit <= myArr[myArr.length - 1]) || (arrayLimit == '' || 0)) {
            results.textContent = 'provide a valid array limit'
        } else if (myArr.length === 1) {
            results.textContent = 'provide a valid array with two or more values'
        } else {
            results.textContent = sequence(myArr, arrayLimit);
        }
    })
})
