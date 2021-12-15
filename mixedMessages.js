const aArray = ["I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison", "Be yourself; everyone else is already taken. - Oscar Wilde", "I'm enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. - Albert Einstein", "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill", "It's the possibility of having a dream come true that makes life interesting. - Paulo Coelho, The Alchemist"];
const bArray = ["Life becomes easier and more beautiful when we can see the good in other people. - Roy T. Bennett", "Don't sit and wait for the opportunity to come. Get up and make them. - Madam C. J. Walker", "All dreams are within reach. All you have to do is keep moving towards them. - Viola Davis", "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar", "Believe you can and you're halfway there. - Theodore Roosevelt"];
const cArray = ["I can't change the direction fo the wind, but I cann adjust my sails to always reach my destination. - Jimmy Dean", "Try to be a rainbow in someone else's cloud. - Maya Angelou", "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen. - Deep Roy", "It isn't where you come from. It's where you're going that counts. - Ella Fitzgerald", "Some people look for a beuatiful place. Others make a place beutiful. - Hazrat Inayat Khan"];
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