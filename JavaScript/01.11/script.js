// alert('hi there')
// console orchin

// "" - quotation mark
// `` - back quote , backtic , template string

// 010101110101010110010101000101010100

// 1. String - Текст төвтэй өгөгдлүүд "" , '' , ``
// 2. Number - Бүх тоон төрлийн өгөгдлүүд
// 3. Boolean - true = 1 , false - 0
// 4. null - хоосон
// 5. undefined - тодорхойгүй

// REPL - Read , Evaluate , Print , Loop

// console.log('hi')

// Variable - Хувьсагч - утга хадгалах сав

// var ner = "Narada";

// ner 5 gazar

// reserved word - Програмчлалд ашиглагддаг тусгай түлхүүр үгс

// Хувьсагч зарлахад reserved words ашиглаж болохгүй
// Хувьсагчийн нэр салангид бж болохгүй
// Хувьсагчийн нэр тоогоор эхэлж болохгүй

// camel case - user one => userOneTwoThree
// snake case - user one => user_one

// var varOne = 12;
// varOne = "bla";

// console.log(varOne);

// varOne = 123;


// TypeScript

// Multiparadigm  <T , U>

// Pyhton VS JS
// Python VS (TS => Java)

// var myVar;

// console.log(myVar);

// Non-Primitive - Object , Array , Regular Expression , Class

// Number

// + - * /
// var x = 12;
// console.log(typeof x);

// ** - toog zeregt devshuulne 4 ** 2
// % - remainder operator 5 % 3 = 2

// var x = 5;
// var y = x / 2;

// y = y * 2;

// y += 12 // y = y + 12

// y++ // y = y + 1

// Math

// ** - Math.pow(5 , 2) - toog zeregt devshuulne
// Math.sqrt(25) - toonoos yzguur gargah
// Math.ceil - toonoos buhel hesgiig avna
// Math.round - oirhon buhel too ruu shiljuulne
// Math.floor , Math.trunc - shuud buhel hesgiig avna

// Math.random() - 0-1 buhel toon utga butsaah - Math.random() * 9

// 1 - 10 хүртэл дурын тоо буцаах - Math.ceil(Math.random() * 10)

// log5 25 = 2

// 12345
// 10 ** 0 ==> 1
// 10 ** 1 ==> 10
// 10 ** 2 ==> 100
// 10 ** 3 ==> 1000

// 1. 5с дээш оронтой тоо хувьсагчид хадгалаад, сүүлээсээ 3 дахь цифрийг олж консолд хэвлэ
// 2. Ямар нэг тоо хувьсагчид хадгалаад, хэдэн оронтой эсэхийг консолд хэвлэ 

// String methods
// var str = "blalba";
// var x = 5;

// toString() - тоог стринг болгож хувиргана

// toUpperCase() - бүх үсгийг томруулна
// toLowerCase() - Бүх үсгийг жижиг болгоно
// trim() - эхэнд болон сүүлд байгаа хэрэгцээгүй хоосон зайг устгана
// replace() - ямар нэг тэмдэгтийг өөр тэмдэгтээр орлуулна


// index - тэмдэгтийг дарааллаар нь дугаарласан дугаар

// charAt(index) (""[index]) - тухайн индекс дээр байгаа тэмдэгтийг буцаана
// slice() - Тэмдэгт мөрийн тодорхой хэсгийг тасдаж авна
// subString - Тэмдэгт мөрийн элементүүд

// includes - Тэмдэгт мөрийн дотроос элемент хайна


// "   nfs   bag    bla      "
// "nfs-bag bla"


// "aabbccdd"
// abcd

// "blabla"   "123"
// "vlavla123"

// merge
// "a" + "b" = "ab"
// str1.concat(str2) - 2 string merge hiine

// 5 оронтой хадгалаад, тухайн тооны цифрүүдийг урвуу
// дарааллаар байрлуулаад шинэ тоо үүсгэ

// 1. String method
// 2. Math
// 462387 ---> 783264

// condition - нөхцөл

// true , false

// = , ? , : , >< , ! , | , &

// = - хувьсагч зарлах, хувьсагчын утгыг өөрчлөх
// == - Нөхцөл шалгана /2 болон түүнээс дээш өгөгдлийн тэмдэгтүүд ижил байгаа эсэхийг шалгана/
// === - Нөхцөл шалгана /Өгөгдлийн төрлийг давхар шалгана/

// > - их
// < - бага
// <= - бага буюу тэнцүү
// >= - их буюу тэнцүү
// != , !== - ялгаатай

// var password = "MyPass123";

// // if statement


// // UX - User Experience

// var pass = prompt('Нууц үгээ оруул');

// if(password === pass){
//     // true байх тохиолдолд энэ хэсэг ажиллана
//     console.log('Welcome');
// } else {
//     // false байх тохиолдолд энэ хэсэг ажиллана 
//     console.log('Нууц үг буруу байна...')
// }

// if else


// and && , or || logic

// && - бүх шалгаж байгаа нөхцлүүд биелэхийг шаардана
// || - аль нэг нөхцөл заавал биелэхийг шаардана

var nas = 26;

if(nas >= 18 && nas <= 25){
    console.log('Таны анкетыг хүлээн авлаа...')
}  else {
    console.log('Насны ангилалд хамаарахгүй байна')
}

var x = +prompt('ehnii too');
var y = +prompt('2 dahi too');
var z = +prompt('3 dahi too');

// 1. Гараас тоо оруулаад, тухайн тоог тэгш сондгой эсэхийг шалгаад консолд үр дүнг бич.

// 2. 3 ширхэг тоо гараас оруулаад, хэдэн ширхэг сондгой, хэдэн ширхэг тэгш тоо байгааг тоолоод консолд үр дүнг хэвлэ.

// 3. email , нууц үг хувьсагчид хадгалаад, гараас оруулсан утгуудтай харьцуул