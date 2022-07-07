const listItem = (item) => `<li id='${item.index}' class='d-flex item'><span class='checkbox ${item.completed ? 'd-none' : ''}'></span><span class='fa fa-check color-primary ${item.completed ? '' : 'd-none'} check'></span>
        <div class='form-group grow-1  d-flex'>
            <label  for='task-${item.index}-description' class='item-label grow-1 ${item.completed ? 'line-through' : ''}'>${item.description}</label>
            <input type='text' id='task-${item.index}-description' name='task-${item.index}-description' class='d-none grow-1 update'/>
        </div>
        <i class='fa-solid fa-ellipsis-vertical icon'></i><i class='fa-solid fa-trash icon d-none dark-light trash'></i></li>`;
export default listItem;