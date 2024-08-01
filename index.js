document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('blockMenu');
    let selectedMenuIndex = 0;
    const keyword = document.getElementById('keyword');
    const filterAlert = document.querySelector('#blockMenu span');
    const allBlockOptions = document.querySelectorAll('#blockMenu li');
    const headingOne = document.getElementById('headingOne');
    const blocksContainter = document.getElementById('blocksContainer');

    function resizeInput(target){
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    
    }
    function displayMenu(target, shortcutKeyword, targetId){
        let position = target.getBoundingClientRect();
        menu.style.left = `${position.left}px`;
        menu.style.top = `${position.bottom }px`;
        if(shortcutKeyword == ""){
            keyword.innerHTML = '';
            keyword.style.opacity = '0';
            filterAlert.style.display = 'none';
        }
        else{
            keyword.innerHTML = shortcutKeyword;
            keyword.style.opacity = '100';
            filterAlert.style.display = 'flex';
            filterAlert.style.alignItems = 'center';
        }
        menu.style.display = 'block';
        
        headingOne.addEventListener('click', () => {
            let textareaElement = document.querySelector('#blocksContainer textarea[data-id="'+targetId+'"]');
            textareaElement.classList.add('headingOne');
            menu.style.display = 'none';
            if(textareaElement.value.startsWith('/')){
                textareaElement.value = '';
            }
            textareaElement.value = textareaElement.value.replace(/\/1/g, '');
            textareaElement.placeholder = 'Heading 1';
        })
        
    }
    function updateBlockOptionNavigation(){
        allBlockOptions.forEach((item, index) => {
            if (index === selectedMenuIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        })
    }
    function createNewBlock(){
        let existingIds = [];
        let newId = 0;
        let allBlocksCreated = blocksContainter.querySelectorAll('textarea');
        allBlocksCreated.forEach((block) => {
            existingIds.push(block.dataset.id)
        })
        let numberIds = existingIds.map(Number);
        let lastId = Math.max(...numberIds)
        newId = lastId+1;
        let newTextarea = document.createElement('textarea');
        newTextarea.dataset.id = newId;
        newTextarea.placeholder = "Type / for blocks, @ to link docs or people";
        
        blocksContainter.appendChild(newTextarea);
        newTextarea.focus();
        newTextarea.click();
        updateBlocks();
    }
    function updateBlocks(){
        let allTextareaElements = document.querySelectorAll('#userPanel textarea');
        allTextareaElements.forEach(textarea => {
            resizeInput(textarea);
            textarea.addEventListener('input',(event) => {
                resizeInput(event.target)
                let value = event.target.value;
                let useArrowKeysInsideMenu = value.length > 3 ? false : true;
                let targetId = event.target.dataset.id;
                let shortcutKeyword = value.replace(/\//g, '');
                
                if(useArrowKeysInsideMenu){
                    event.target.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' && menu.style.display == 'block') {
                            e.preventDefault();
                            allBlockOptions[selectedMenuIndex].click();
                        }
                        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                            e.preventDefault();
                            if (e.key === 'ArrowUp') {
                                selectedMenuIndex = (selectedMenuIndex > 0) ? selectedMenuIndex - 1 : allBlockOptions.length - 1;
                            } else if (e.key === 'ArrowDown') {
                                selectedMenuIndex = (selectedMenuIndex < allBlockOptions.length - 1) ? selectedMenuIndex + 1 : 0;
                            }
                        }
                        updateBlockOptionNavigation();
                    });
                }
    
                if(value.length >= 3){
                    menu.style.display = 'none';
                }
                else if(value.startsWith('/')){
                    displayMenu(event.target, shortcutKeyword, targetId);
                }
                else if(value == ''){
                    menu.style.display = 'none';
                    
                }    
            });
            textarea.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' && textarea.value.length > 3) {
                        event.preventDefault();
                        createNewBlock();
                    }
                    else if(event.key === 'Backspace' && textarea.value.length == 0 && allTextareaElements.length > 0) {
                        textarea.remove();
                        updateBlocks();
                    }
            });
        });
    }
    updateBlocks();
});