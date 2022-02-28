ToDo = function() {
    if (document.querySelector('#name').value.length == 0 && document.querySelector('#content').value.length == 0) {
        alert("Please Enter a Task");
    } else if (document.querySelector('#name').value.length == 0) {
        alert("Please Enter a task name");
    } else if (document.querySelector('#content').value.length == 0) {
        alert("Please Enter a task content");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div id="task">
                <span >
                    ${document.querySelector('#name').value}:  ${document.querySelector('#content').value}
                </span>
                <button class="delete"></button>
            </div> `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        document.querySelector('#name').value = "";
        document.querySelector('#content').value = "";
    }



}