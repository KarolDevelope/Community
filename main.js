window.addEventListener('load', () =>{
    const form = document.querySelector('#post-form');
    const input = document.querySelector('#post-input');
    const element_list = document.querySelector('#posts');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const post = input.value;
        if(!post)
        {
            alert('Write something');
            return;
        }

        const post_element = document.createElement('div');
        post_element.classList.add('post');

        const post_content_element = document.createElement('div');
        post_content_element.classList.add('content');


        post_element.appendChild(post_content_element);

        const post_input_element = document.createElement('input');
        post_input_element.classList.add('text');
        post_input_element.type= 'text';
        post_input_element.value = post;
        post_input_element.setAttribute('readonly','readonly');

        post_content_element.appendChild(post_input_element);

        const post_action_element = document.createElement('div');
        post_action_element.classList.add('actions');

        const post_edit_element = document.createElement('button');
        post_edit_element.classList.add('edit');
        post_edit_element.innerHTML='Edit';

        const post_delete_element = document.createElement('button');
        post_delete_element.classList.add('delete');
        post_delete_element.innerHTML='Delete';

        post_action_element.appendChild(post_edit_element);
        post_action_element.appendChild(post_delete_element);

        post_element.appendChild(post_action_element);


        element_list.appendChild(post_element);

        input.value = '';

        post_edit_element.addEventListener('click', () => {
            if(post_edit_element.innerText.toLowerCase() == 'edit')
            {
                post_input_element.removeAttribute('readonly');
                post_input_element.focus();
                post_edit_element.innerText = 'Save';
            }else{
                post_input_element.setAttribute('readonly','readonly');
                post_edit_element.innerText='Edit';
            }
        });

        post_delete_element.addEventListener('click', () =>{
            element_list.removeChild(post_element);
        });

        
    });
});
