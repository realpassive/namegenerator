function _(x) {
    return document.getElementById(x).value
}

document.getElementById("generate-names").addEventListener('submit', getNames);



function getNames(e) {
    e.preventDefault();

    let url = 'https://uinames.com/api/?';

    let country = _('country');
    let gender = _('gender');
    let quantity = _('quantity');

    if (country != '') {
        url += `region=${country}&`;
    }
    if (gender != '') {
        url += `gender=${gender}&`;
    }
    if (quantity != '') {
        url += `amount=${quantity}&`;
    }


    //ajax call
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText);
            document.querySelector('#result').innerHTML = 'loading....';
            let html = '<h2>Gnerated Names</h2>';
            html += '<ul class="list">';
            names.forEach(function(name) {

                html += `<li>${name.surname + ' ' +name.name }
                `;
            })
            html += '</ul>';

            document.querySelector('#result').innerHTML = html;

        }

    }
    xhr.send();

}