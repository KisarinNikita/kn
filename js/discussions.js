function printStateValidForm(class_p, text) {
    class_p.text(text);
    setTimeout(function() {
        class_p.text("");
    }, 300000);
}

function snedReply(id_form) {
    $(id_form).submit(function(e){
        e.preventDefault();
        var textarea_block = $(this).find("textarea");
        var checkbox_block = $(this).find(".checkbox input");
        var checkbox = checkbox_block.prop("checked");
        var textarea = textarea_block.val();

        if(checkbox == false) {
             var class_p = $(this).find('.err');
             var text = "Вы не приняли условия";
             printStateValidForm(class_p, text);
        } else if (textarea == "") {
            var class_p = $(this).find('.err');
            var text = "Вы не заполнили поле";
            printStateValidForm(class_p, text);
        } else {
            console.log("Данные отправились на сервер");
            textarea_block.val("");
            checkbox_block.removeAttr("checked");
            $('.reply-block').css('display','none');
        }
    });
}

function openFormReply() {
    $('.open-reply').click(function(){
        var id_form_block = $(this).attr("block-form-open");
        $('.reply-block').css('display','none');
        $('#' + id_form_block).css('display','block');
    });
}

function closeFormReply() {
    $('.del-item').click(function(){
        $('.reply-block').css('display','none');
    });
}

$(document).ready(function() {
    $('.reply-block').css("display", "none");
    var count_replay_form = 2;

    for(var i = 1; i <= count_replay_form; i++) {
        snedReply("#reply-form-"+i);
    }

    openFormReply();
    closeFormReply();
});
