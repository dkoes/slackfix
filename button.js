var b;
var thing = $; //no idea why $ isn't defined within handler

function fixSlack() {
    thing('.p-control_strip').style.left = 0
    thing('.p-control_strip').style.width = "64px"

    b = document.createElement('button');
    b.classList.add('c-button-unstyled');
    b.classList.add('p-control_strip__circle_button');
    b.classList.add('p-control_strip__create_button');
    b.style.padding = '5pt';
    b.innerHTML = "<svg data-pe9=\"true\" aria-hidden=\"true\" viewBox=\"0 0 20 20\" class=\"\" style=\"--s: 20px;\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.836 3A1.836 1.836 0 0 0 3 4.836v7.328c0 .9.646 1.647 1.5 1.805V7.836A3.336 3.336 0 0 1 7.836 4.5h6.133A1.837 1.837 0 0 0 12.164 3H4.836ZM1.5 12.164a3.337 3.337 0 0 0 3.015 3.32A3.337 3.337 0 0 0 7.836 18.5h3.968c.73 0 1.43-.29 1.945-.805l3.946-3.946a2.75 2.75 0 0 0 .805-1.945V7.836a3.337 3.337 0 0 0-3.015-3.32A3.337 3.337 0 0 0 12.164 1.5H4.836A3.336 3.336 0 0 0 1.5 4.836v7.328ZM7.836 6A1.836 1.836 0 0 0 6 7.836v7.328C6 16.178 6.822 17 7.836 17H11.5v-4a1.5 1.5 0 0 1 1.5-1.5h4V7.836A1.836 1.836 0 0 0 15.164 6H7.836Zm8.486 7H13v3.322L16.322 13Z\" clip-rule=\"evenodd\"></path></svg>";

    var tabstate = 1;
    b.addEventListener("click", function() {
        if(tabstate) {
            thing('.p-client_workspace_wrapper').style['grid-template-columns'] = "0px auto";
            thing('.p-tab_rail').style.width = "0px";
            tabstate = 0;
        } else {
            thing('.p-client_workspace_wrapper').style['grid-template-columns'] = "64px auto";
            thing('.p-tab_rail').style.width = "64px";        
            tabstate = 1;
        }
    });
    thing('.p-control_strip').prepend(b);
    
    const observer = new MutationObserver(function(mutationList, observer) {        
        for(mut of mutationList) {
            if(mut.type == "childList" && mut.removedNodes) {
                if(!document.contains(b)) {
                    let oldb = b;
                    fixSlack();
                    if(oldb != b) {
                        //successfully created new b
                        observer.disconnect();
                    }
                    return;
                }
            }
        }
    });
    observer.observe(document.body, {childList:true});
}

fixSlack();
