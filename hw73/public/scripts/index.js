(function () {
    'use strict';

    const addComment = $('#addComment'),
        commentDiv = $('#comments'),
        commentButton = $('#commentButton');

    let commentName = $('#NameInput'),
        commentInput = $('#commentInput'),
        hidden = $('#hidden');

    addComment.click((event) => {
        commentDiv.show();
    });
    commentButton.click(() => {
        $.post('/newComment', { name: commentName.val(), body: commentInput.val(), id: hidden.val() }, () => {
            console.log('protest', commentName.val(), commentInput.val(), hidden.val());
        });
    });
}());
