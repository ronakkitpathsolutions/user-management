export const retry = (fetchComponent, retriesLeft = 5, interval = 1000) => {
    return new Promise((resolve, reject) => {
        fetchComponent().then(resolve).catch((error) => {
          setTimeout(() => {
            if (retriesLeft === 1) {
              reject(error);
              return;
            }
            retry(fetchComponent, retriesLeft - 1, interval).then(resolve, reject);
          }, interval);
        });
    });
  }