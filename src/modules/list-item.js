const listItem = (item) => `<li id='${item.index}' class='d-flex item'>
        <div class='form-group grow-1  d-flex'>
            <span class='checkbox'></span>
            <label  for='task-${item.index}-description' class="item-label grow-1">${item.description}</label>
            <input type='text'  value='${item.description}'  id='task-${item.index}-description' name='task-${item.index}-description' class='d-none grow-1'/>
        </div>
        <i class='fa-solid fa-ellipsis-vertical icon'></i>
        </li>`;
export default listItem;