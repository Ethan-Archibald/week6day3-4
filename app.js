$('#submitButton').on('click', function() {

    let displayNameInput = $('#displayName').val();
    let commentInput = $('#comment').val();

    let shmars = $(this).parents()[0];

    let shmarpent = $(shmars).prev();
    let k = $(shmarpent).children()[0];

    let p = $(shmarpent).prev();
    let g = $(p).children()[0];

    $(k).val('');
    $(g).val('');

    $('.commentSection').prepend(`
      <div class="commentContainer">
      <img class="commentImage" src="profile.png" alt="User Icon">
        <div class ="parent">
            <p class="displayNameContent">${displayNameInput}</p> <div class="buttons"> <span class="editButton">Edit</span> <span class="deleteButton">Delete</span> </div>
            <p class="mainComment">${commentInput}</p>
        </div>    
      </div>
    `);

});

$('.commentSection').on('click', '.deleteButton', function() {
   
    let deleteComment = $(this).parents()[2];
    
    $(deleteComment).remove();

});

let condition = true;
$('.commentSection').on('click', '.editButton', function() {

    if (condition == true){

        condition = false;
        let editParent = $(this).parents()[1];

        $(editParent).append(`
            <div class="editSection" >
                <input id="comment" placeholder="Comment">
                <div id="submitButton">Submit</div>
            </div>
        `);
    }

    $('.editSection').on('click', '#submitButton', function() {
        
        let editCommentInput = $('#comment').val();

        let edit = $(this).parents()[1];
        let editsub = $(edit).children()[2];
    
        $(editsub).text(`${editCommentInput}`);
        
        let k = $(this).parents()[0];

        $(k).remove();

        condition = true;
    
    });

});

