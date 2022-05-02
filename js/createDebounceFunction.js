const accessTimeout = () => 1 + 1;

function createDebounceFunction(func, timeout) {
    let timer;
    return function() {
        const calledFunc = () => {
            func.apply(this, arguments)
        };
        clearTimeout(timer);
        timer = setTimeout(calledFunc, timeout)
    }
}

let debouncedFunc = createDebounceFunction(accessTimeout, 3000);

document.querySelector('button').addEventListener('click', debouncedFunc);