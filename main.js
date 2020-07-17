
export class Main{



    prepPayload(){


    let payload={
    token: "sqx3371f4ZGGWYWj-wXfgw",
    data: {
        name: "qqq",
        email: "internetEmail",
        phone: "phoneHome",
    },
    parameters: {
        code:404,
        delay: 5,

    },
};

    }

execPayload(){

            $.ajax({
            type: "POST",
            url: "https://app.fakejson.com/q/9qKsYxFv",
            data: payload,
            cache: false,
            success: function(data,textStatus, errorThrown){
                console.log(data);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });

}

}