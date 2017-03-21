import $ from 'jquery'
import RSVP from 'rsvp';

var ROOT = 'http://localhost:8000';

export function fetchPosts() {
    return new RSVP.Promise((resolve, reject) => {
        $.ajax({
            url: ROOT + '/posts',
            method: 'GET'
        }).then(function(data) {
            resolve(data);
        });
    })
}