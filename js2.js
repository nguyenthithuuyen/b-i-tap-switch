let a = + prompt('a?');
switch (a) {
    case 0:
        a= 0;
        break;
    case 1:
        a=1;
        break;
    case 2:
    case 3:
        a= '2,3';
        break;
}
alert(a);