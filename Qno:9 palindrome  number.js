// no:9 palindrome  number

num = 0;
num1 = 121;
function pali(x) {
    x = x = x.toString();
    first = x;
    a = [];
    for (let i of x) {
        a.unshift(i);
    }
    a = a.join("");
    if (a == first) {
        return true;
    } else {
        return false;
    }
}

console.log(pali(num));
console.log((ans1 = pali(num1)));
