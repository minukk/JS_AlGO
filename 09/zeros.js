const zeros = n => n / 5 === 0 ? 0 : Math.floor(n / 5 + zeros(n / 5));

zeros(30);