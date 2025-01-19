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
  return function (userInput) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(userInput), delay);
  };
}

const debounceHandleUserAction = debounce(handleUserAction, 1000);

/** Testing */

for (let i = 0; i < 5; i++) {
  debounceHandleUserAction(i);
}

/** In the above implementation, we are only triggering the last user action and ignoring the previous
 * user action.
 * Implementing the same by ignoring subsequent user actions till the time delay.
 */

function throttle(func, delay) {
  let hasPreviousExecutionsTimeDelayExpired = false;
  return function (userInput) {
    if (!hasPreviousExecutionsTimeDelayExpired) {
      // Setting a timeout to reset the value of timeout expired flag to false after the delay
      setTimeout(() => {
        hasPreviousExecutionsTimeDelayExpired = false;
      }, delay);
      hasPreviousExecutionsTimeDelayExpired = true;
      return func(userInput);
    }
  };
}

const throttleHandleUserAction = throttle(handleUserAction, 10000);
