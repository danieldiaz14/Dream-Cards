let test = JSON.parse(sessionStorage.getItem('items'));

function checker() {
    if(test.length <= 30) {
        alert('default deck will be used');
    } else {
        alert('You deck was completed successfully');
    }
}