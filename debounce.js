/**
 * Debounce is function that delays the execution of the function that it is debouncing by a certain amount of time.
 * It is used to improve the performance of the application by limiting the number of times a function is called.
 * The debounce function takes a function and a delay time as arguments and returns a new function that will execute the
 * original function after the delay time has passed.
 * function handleUserAction() {}
 * function debounce(func, delay) {}
 * const debouncedUserAction = debounce(handleUserAction, 1000);
 */

function handleUserAction() {
  console.log("User action");
}

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

const debounceHandleUserAction = debounce(handleUserAction, 1000);

/** Testing */

for (let i = 0; i < 5; i++) {
  debounceHandleUserAction();
}
