const aArray = ["I have not failed. I've just found 10,000 ways that won't work.<br> <span style='text-align:right'>- Thomas A. Edison</span>", "Be yourself; everyone else is already taken.<br> - Oscar Wilde", "I'm enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.<br> - Albert Einstein", "Success is not final, failure is not fatal: it is the courage to continue that counts.\n - Winston S. Churchill", "It's the possibility of having a dream come true that makes life interesting.\n - Paulo Coelho, The Alchemist"];
const bArray = ["Life becomes easier and more beautiful when we can see the good in other people.<br> - Roy T. Bennett", "Don't sit and wait for the opportunity to come. Get up and make them.<br> Madam C. J. Walker", "All dreams are within reach. All you have to do is keep moving towards them.<br> - Viola Davis", "What you get by achieving your goals is not as important as what you become by achieving your goals.\n - Zig Ziglar", "Believe you can and you're halfway there.\n - Theodore Roosevelt"];
const cArray = ["I can't change the direction fo the wind, but I cann adjust my sails to always reach my destination.<br> - Jimmy Dean", "Try to be a rainbow in someone else's cloud.<br> - Maya Angelou", "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.<br> - Deep Roy", "It isn't where you come from. It's where you're going that counts.\n - Ella Fitzgerald", "Some people look for a beuatiful place. Others make a place beutiful.\n - Hazrat Inayat Khan"];
function inspiration(aArray, bArray, cArray) {    
let dArray = [];
let a = aArray[Math.floor(Math.random() * aArray.length)];
let b = bArray[Math.floor(Math.random() * bArray.length)];
let c = cArray[Math.floor(Math.random() * cArray.length)];
dArray.push(a);
dArray.push(b);
dArray.push(c);
return dArray[Math.floor(Math.random() * dArray.length)];
};
function change_text() {
document.getElementById("quoteOutput").innerHTML = inspiration(aArray, bArray, cArray);
}