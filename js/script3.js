let arr1 = ['один', 'два', 'три', 'чотири', 'п’ять', 'шість', 'сім', 'вісім', 'дев’ять', 'десять'];
function getListName(valList) {
    document.write('<ul>');
    for (let i of valList) {
        let listName = '<li>' + i + '</li>';
        document.write(listName);
    }
    document.write('</ul>');
}
getListName(arr1);