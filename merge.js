/*
 * Merge the workspace switch and activity panel.  This panel can be 
 * shown/hidden with the workspace shortcut (cmd-shift-s on mac).
 * If there are more workspaces than fit on the screen, the sidebar
 * can be scrolled, but there isn't much in a visual indicator that
 * there is hidden content.
 */

var sentinal = null;

function fixSlack() {
  document.querySelectorAll(".p-tab_rail__button__label").forEach(e => e.style['display'] = 'none');
  document.querySelectorAll(".c-tabs__tab_content").forEach(e => e.style['padding'] = '2px 0px');
  document.querySelector(".p-tab_rail").style['width'] = '0px';
  
  let tabrail = document.querySelector('.p-tab_rail__tab_menu');
  let workspace = document.querySelector('.p-workspace_switcher_prototype');
  let sidebar = document.querySelector('#team_sidebar_scroll_container');
  sidebar.prepend(tabrail);

  let controls = document.querySelector('.p-control_strip');
  controls.style.left = 0;
  controls.style.width = "64px";

  document.querySelector('.p-client_workspace_wrapper').style['grid-template-columns'] = "0px auto";
  workspace.style['height'] = '100%';
  workspace.style['margin-top'] = '0px';
  sidebar.style['height'] = 'calc(100% - 160px)';
  sidebar.style['margin-bottom'] = '160px';
  sidebar.style['margin-top'] = '0px';

  sidebar.append(controls);
  
  sentinal = document.createElement('span');  
  sidebar.append(sentinal);
  
  const observer = new MutationObserver(function(mutationList, observer) {        
      for(mut of mutationList) {
          if(mut.type == "childList" && mut.removedNodes) {
              if(!document.contains(sentinal)) {
                  let old = sentinal;
                  fixSlack();
                  if(old != sentinal) {
                      //successfully created new sentinal
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
